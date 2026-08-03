# SEORL · Automatización SEO en n8n

Cuatro workflows de [n8n](https://n8n.io) que automatizan el trabajo SEO recurrente:
monitoreo de posiciones, auditoría técnica on-page y generación de briefs de contenido,
con análisis generado por la Messages API de Claude.

| Workflow | Qué hace | Cadencia sugerida |
|---|---|---|
| [`01-monitoreo-gsc`](workflows/01-monitoreo-gsc.json) | Compara 7 días de Search Console contra los 7 anteriores, detecta caídas, mejoras y oportunidades en "distancia corta", guarda histórico en Sheets y publica el diagnóstico en Slack | Lunes 07:00 |
| [`02-auditoria-tecnica`](workflows/02-auditoria-tecnica.json) | Rastrea el sitemap, audita title/meta/H1/canonical/robots/contenido/imágenes/schema de cada URL, puntúa cada página y devuelve un plan de corrección priorizado | Diaria 06:00 |
| [`03-briefs-contenido`](workflows/03-briefs-contenido.json) | Toma keywords pendientes de una hoja, consulta la SERP real y genera briefs editoriales completos (título, esquema, FAQ, enlazado interno) | Martes 08:00 o manual |
| [`99-manejo-errores`](workflows/99-manejo-errores.json) | Workflow de error compartido: avisa en Slack qué workflow y qué nodo falló | Al fallar cualquiera |

---

## Puesta en marcha

### 1. Importar los workflows

En n8n: **Workflows → Import from File**, y selecciona cada JSON de `workflows/`.
Los cuatro se importan **desactivados** a propósito.

### 2. Configurar credenciales

Ver [`docs/credenciales.md`](docs/credenciales.md) para el detalle. Resumen:

| Credencial en n8n | Tipo | Usada por |
|---|---|---|
| Google OAuth2 API (scope `webmasters.readonly`) | `googleOAuth2Api` | Workflow 01 (Search Console) |
| Anthropic | Header Auth · `x-api-key` | Workflows 01, 02, 03 |
| Serper.dev | Header Auth · `X-API-KEY` | Workflow 03 |
| Google Sheets | Google Sheets OAuth2 | Workflows 01, 02, 03 |
| Slack | Slack API | Workflows 01, 02, 03, 99 |

### 3. Preparar la hoja de cálculo

Crea un spreadsheet con las pestañas `Historico`, `Auditoria`, `Keywords` y `Briefs`.
Las cabeceras exactas están en [`docs/google-sheets.md`](docs/google-sheets.md).

### 4. Ajustar el nodo `Configuracion`

Cada workflow arranca con un nodo **`Configuracion`** que concentra todos los valores
editables: dominio, sitemap, ID del spreadsheet, canal de Slack y umbrales. **No hace
falta tocar ningún otro nodo** para poner el sistema en marcha.

Los valores a reemplazar sí o sí:

- `siteUrl` / `sitemapUrl` / `dominio` → tu sitio
- `sheetId` → el ID del spreadsheet (está en su URL)
- `slackCanal` → tu canal
- `descripcionNegocio` → contexto real del negocio; va directo al prompt de la IA y es lo
  que separa un análisis genérico de uno útil

### 5. Enlazar el workflow de errores

En cada workflow: menú `···` → **Settings** → **Error Workflow** → `SEO 99 · Manejo de errores`.

### 6. Probar antes de activar

Ejecuta cada workflow manualmente con **Execute Workflow** y revisa la salida nodo a nodo.
Para el 02, baja `maxUrls` a 10 en la primera prueba.

Guía paso a paso: [`docs/guia-de-uso.md`](docs/guia-de-uso.md).

---

## Cómo está construido este repositorio

Los workflows **se escriben en JavaScript** (`src/`) y **se compilan a JSON** (`workflows/`).
El motivo: el código de los nodos `Code` de n8n vive dentro de una cadena JSON, y editarlo
a mano con `\n` escapados es frágil e ilegible. Con este esquema el código va en template
literals normales, revisables en un diff.

```
src/
  lib.mjs                        helpers: nodos, conexiones, nodo de Claude
  workflow-01-monitoreo-gsc.mjs
  workflow-02-auditoria-tecnica.mjs
  workflow-03-briefs-contenido.mjs
  workflow-99-manejo-errores.mjs
scripts/
  build.mjs        src/*.mjs  →  workflows/*.json
  validate.mjs     estructura, conexiones, sintaxis y referencias entre nodos
  test-nodos.mjs   ejecuta el código de cada nodo Code con datos simulados
workflows/         JSON listo para importar en n8n  ← lo que importas
docs/              credenciales, estructura de Sheets, guía de uso
```

```bash
npm run build      # regenera workflows/*.json
npm run validate   # valida los JSON generados
npm test           # prueba la lógica de los nodos Code (sin llamadas de red)
npm run check      # los tres, en orden
```

> **Si editas un workflow en la interfaz de n8n**, exporta el JSON y traslada el cambio a
> `src/` antes de volver a compilar; si no, el siguiente `npm run build` lo sobrescribirá.

`npm test` cubre 40 comprobaciones sobre datos simulados: cálculo de ventanas temporales,
detección de caídas y mejoras, extracción de HTML, expansión de índices de sitemaps,
alineación SERP↔keyword y parseo de las respuestas de la API.

---

## Notas sobre la integración con Claude

Las llamadas van por nodo **HTTP Request** contra `https://api.anthropic.com/v1/messages`,
no por un nodo de LangChain. Es más código pero da control total sobre el payload, que es
donde está la diferencia de calidad:

- **Modelo `claude-opus-5`**, cabecera `anthropic-version: 2023-06-01`.
- **Structured outputs** (`output_config.format` con JSON Schema): la respuesta viene
  validada contra el esquema, así que no hay que parsear texto libre ni pedir "responde en
  JSON" y confiar en que salga bien.
- **`output_config.effort`** en lugar de `budget_tokens` (retirado en Opus 5) para regular
  profundidad y coste: `medium` en reportes, `high` en briefs.
- **Sin `temperature` / `top_p` / `top_k`** — Opus 5 los rechaza con error 400.
- El parseo de la respuesta **busca el bloque `type: 'text'`** en vez de usar `content[0]`,
  porque con razonamiento activado el primer bloque puede ser `thinking`.
- Se comprueba `stop_reason === 'refusal'` antes de leer el contenido.

El cuerpo de cada petición se construye en un nodo `Code` previo y se expone como
`$json.body`; el nodo HTTP solo hace `{{ JSON.stringify($json.body) }}`. Así los prompts y
esquemas quedan legibles y versionados en `src/`.

---

## Costes y límites a vigilar

- **Anthropic**: 1 llamada por ejecución en los workflows 01 y 02; 1 por keyword en el 03.
  `maxFilasIA` y `maxPaginasIA` acotan cuánto contexto se envía.
- **Search Console API**: cuota generosa, pero los datos tienen ~3 días de retraso — el
  workflow 01 ya lo compensa.
- **Rastreo del workflow 02**: `maxUrls` (100 por defecto) y `batching` de 5 peticiones por
  segundo. Súbelos con criterio si auditas tu propio sitio; bájalos si el servidor es débil.
- **Serper.dev**: plan gratuito con créditos limitados. `maxBriefs` (5) limita el consumo por
  ejecución.

---

## Personalizaciones habituales

- **Cambiar el proveedor de SERP**: sustituye el nodo `SERP · Top 10` por DataForSEO o
  SerpAPI y ajusta `Contexto SERP` al formato de respuesta nuevo.
- **Enviar los briefs a ClickUp o Notion**: añade el nodo correspondiente después de
  `Parsear briefs`; los campos ya vienen aplanados y listos para mapear.
- **Reportar por email en vez de Slack**: sustituye el nodo de Slack por Gmail/SMTP; el
  mensaje ya viene formateado en `$json.mensaje`.
- **Ajustar los umbrales de auditoría**: `tituloMin`, `tituloMax`, `descripcionMax`,
  `palabrasMin` en el nodo `Configuracion` del workflow 02.
