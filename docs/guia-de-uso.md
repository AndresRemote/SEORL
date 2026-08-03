# Guía de uso

## Puesta en marcha en orden

1. **Credenciales** — [`credenciales.md`](credenciales.md).
2. **Spreadsheet** — crea las cuatro pestañas con las cabeceras de
   [`google-sheets.md`](google-sheets.md).
3. **Importa** los cuatro JSON de `workflows/` en n8n.
4. **Edita el nodo `Configuracion`** de cada workflow.
5. **Asigna credenciales** en los nodos que las pidan.
6. **Enlaza el workflow de errores** (Settings → Error Workflow) en los tres primeros.
7. **Ejecuta manualmente** cada uno y revisa la salida.
8. **Activa** solo cuando la ejecución manual salga limpia.

---

## Workflow 01 · Monitoreo semanal

**Qué hace exactamente**

Pide a Search Console las dimensiones `query` + `page` de dos ventanas de 7 días
consecutivas (descontando 3 días de latencia de los datos), las cruza y clasifica cada
consulta:

- **Caída** — perdió `umbralCaidaPosiciones` o más posiciones
- **Mejora** — ganó ese mismo umbral o más
- **Nueva** — no aparecía en el periodo anterior
- **Distancia corta** — está entre las posiciones `distanciaCortaDesde` y
  `distanciaCortaHasta`: ya rankea, y un empujón puede llevarla al top 3

Todo el detalle va a la pestaña `Historico`; un resumen (las 15 filas más relevantes de cada
categoría, configurable con `maxFilasIA`) va a Claude, que devuelve diagnóstico, riesgos y
un plan de acción priorizado que se publica en Slack.

**Parámetros que probablemente quieras tocar**

| Parámetro | Por defecto | Cuándo cambiarlo |
|---|---|---|
| `minImpresiones` | 20 | Súbelo en sitios grandes para reducir ruido de cola larga |
| `umbralCaidaPosiciones` | 3 | Bájalo a 2 si quieres detección más sensible |
| `distanciaCortaDesde` / `Hasta` | 4 / 20 | Ajusta al rango donde realmente puedes competir |
| `maxFilasIA` | 15 | Súbelo si quieres análisis más exhaustivo (y más caro) |

**Si falla**

- *"GSC no devolvió filas por encima del umbral"* → revisa `siteUrl` (debe coincidir
  exactamente con la propiedad) o baja `minImpresiones`.
- Un 403 en los nodos GSC casi siempre es formato de `siteUrl` o permisos de la cuenta.

---

## Workflow 02 · Auditoría técnica

**Qué hace exactamente**

Descarga el sitemap; si es un índice de sitemaps, expande hasta `maxSitemaps` hijos. Extrae
las URLs, descarta las que coincidan con `excluirPatron` y las duplicadas, y rastrea hasta
`maxUrls` páginas en lotes de 5 por segundo.

De cada página extrae y evalúa: código HTTP, `<title>`, meta description, H1/H2, canonical,
meta robots, `og:title`, recuento de palabras del cuerpo, imágenes sin `alt` y presencia de
JSON-LD. Asigna una puntuación de 0 a 100 y una lista de problemas por gravedad.

Antes de enviar a la IA agrupa los problemas por **patrón** (`"Falta la meta description →
34 páginas"`), para que el plan de corrección ataque causas sistémicas en vez de listar
página por página.

**Reglas de puntuación**

| Gravedad | Penalización | Ejemplos |
|---|---|---|
| Crítica | −25 | Error 4xx/5xx, `noindex`, falta el `<title>` |
| Media | −8 | Sin meta description, sin H1, sin canonical, contenido escaso, title corto |
| Baja | −3 | Title largo, meta larga, varios H1, imágenes sin `alt`, sin schema |

**Antes de la primera ejecución real**, baja `maxUrls` a 10 para comprobar que el rastreo
funciona sin castigar el servidor.

**Si falla**

- *"El sitemap no contiene etiquetas `<loc>`"* → la URL devuelve HTML en vez de XML, o hay
  una redirección. Ábrela en el navegador para confirmar.
- *"No se encontró ninguna URL auditable"* → `excluirPatron` es demasiado agresivo.
- Muchos códigos 403 al rastrear → el WAF bloquea el User-Agent; cámbialo en el nodo
  `Rastrear paginas` o añade la IP de n8n a la lista blanca.

---

## Workflow 03 · Briefs de contenido

**Flujo de trabajo previsto**

1. Añades keywords a la pestaña `Keywords` con `estado = pendiente`.
2. El workflow arranca (martes 08:00 o manualmente) y toma hasta `maxBriefs` keywords.
3. Para cada una consulta la SERP real de tu país e idioma (`pais`, `idioma`).
4. Claude genera el brief usando el top 10 real como referencia competitiva.
5. Los briefs se guardan en la pestaña `Briefs` y se avisa en Slack.

**Por qué consulta la SERP**

Sin ella el brief sale genérico. Con el top 10 delante, el prompt puede pedir explícitamente
cubrir lo que cubren los competidores **y añadir al menos dos ángulos que ninguno cubra** —
que es de donde sale el diferencial.

**Parámetros**

| Parámetro | Por defecto | Nota |
|---|---|---|
| `maxBriefs` | 5 | Controla el gasto de Serper y de Anthropic por ejecución |
| `pais` / `idioma` | `mx` / `es` | Códigos de Google (`gl` y `hl`) |
| `tonoDeVoz` | — | Cuanto más concreto, más consistentes los briefs |

**Si falla**

- *No se genera nada y la ejecución termina sin error* → no hay filas con
  `estado = pendiente`. Es el comportamiento esperado.
- Error 403 en `SERP · Top 10` → créditos de Serper agotados o cabecera mal nombrada
  (debe ser `X-API-KEY`).

---

## Workflow 99 · Manejo de errores

No se ejecuta por su cuenta: se dispara cuando otro workflow que lo tenga configurado como
*Error Workflow* falla. El aviso de Slack incluye el workflow, el nodo exacto donde se
rompió y el enlace a la ejecución para inspeccionarla.

---

## Modificar los workflows

Los JSON de `workflows/` **se generan** desde `src/`. Si editas un workflow en la interfaz
de n8n, traslada el cambio a `src/` antes de recompilar; si no, el siguiente
`npm run build` lo sobrescribirá.

```bash
npm run check   # compila, valida y prueba la lógica de todos los nodos Code
```

`npm run validate` detecta nombres de nodo duplicados, conexiones rotas, workflows sin
trigger, errores de sintaxis en los nodos Code y expresiones `$('Nodo')` que apuntan a
nodos inexistentes — que es el error más habitual al renombrar un nodo en la interfaz.
