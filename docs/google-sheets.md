# Estructura del spreadsheet

Los tres workflows escriben en el **mismo spreadsheet**, en pestañas distintas. El ID que
va en el campo `sheetId` del nodo `Configuracion` es la parte central de la URL:

```
https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit
```

Los nodos usan el mapeo automático (`autoMapInputData`): cada campo del item se escribe en
la columna cuya **cabecera coincide exactamente con el nombre del campo**. Por eso las
cabeceras de la fila 1 deben escribirse tal cual aparecen abajo — sin acentos, respetando
mayúsculas y minúsculas.

---

## Pestaña `Historico` — workflow 01

Una fila por consulta y URL, en cada ejecución semanal.

| Columna | Contenido |
|---|---|
| `fecha` | Último día del periodo analizado |
| `periodo` | Rango completo, ej. `2026-07-20 a 2026-07-26` |
| `keyword` | Consulta de búsqueda |
| `url` | Página que recibió la impresión |
| `clics` | Clics del periodo actual |
| `impresiones` | Impresiones del periodo actual |
| `ctr` | CTR en porcentaje |
| `posicion` | Posición media actual |
| `posicionPrevia` | Posición media del periodo anterior (vacío si es nueva) |
| `deltaPosicion` | Positivo = mejora, negativo = caída |
| `clicsPrevios` | Clics del periodo anterior |
| `deltaClics` | Diferencia de clics |
| `categoria` | `Caida`, `Mejora`, `Nueva` o `Estable` |
| `distanciaCorta` | `TRUE` si la posición está en el rango configurado |

**Fila 1, para copiar y pegar:**

```
fecha	periodo	keyword	url	clics	impresiones	ctr	posicion	posicionPrevia	deltaPosicion	clicsPrevios	deltaClics	categoria	distanciaCorta
```

---

## Pestaña `Auditoria` — workflow 02

Una fila por URL rastreada, en cada ejecución.

| Columna | Contenido |
|---|---|
| `fecha` | Día de la auditoría |
| `url` | URL auditada |
| `estado` | Código HTTP |
| `titulo` / `longitudTitulo` | Etiqueta `<title>` y su longitud |
| `metaDescripcion` / `longitudDescripcion` | Meta description y su longitud |
| `h1` / `numeroH1` / `numeroH2` | Primer H1, cuántos H1 y cuántos H2 |
| `canonical` | URL canónica declarada |
| `metaRobots` | Contenido de `<meta name="robots">` |
| `ogTitulo` | `og:title` |
| `palabras` | Palabras en el cuerpo (sin scripts ni estilos) |
| `imagenes` / `imagenesSinAlt` | Total de imágenes y cuántas no tienen `alt` |
| `tieneSchema` | `TRUE` si hay JSON-LD |
| `noindex` | `TRUE` si la página está bloqueada a indexación |
| `problemasCriticos` / `problemasMedios` / `problemasBajos` | Conteo por gravedad |
| `puntuacion` | 0–100 (100 − 25×críticos − 8×medios − 3×bajos) |
| `problemas` | Lista legible de todos los problemas detectados |

**Fila 1, para copiar y pegar:**

```
fecha	url	estado	titulo	longitudTitulo	metaDescripcion	longitudDescripcion	h1	numeroH1	numeroH2	canonical	metaRobots	ogTitulo	palabras	imagenes	imagenesSinAlt	tieneSchema	noindex	problemasCriticos	problemasMedios	problemasBajos	puntuacion	problemas
```

---

## Pestaña `Keywords` — workflow 03 (entrada)

Esta pestaña **la rellenas tú**. El workflow lee las filas cuyo `estado` sea `pendiente`.

| Columna | Contenido |
|---|---|
| `keyword` | Keyword objetivo (obligatoria) |
| `intencion` | Intención declarada, opcional; ayuda al prompt |
| `prioridad` | `Alta`, `Media` o `Baja` — solo afecta al orden en el aviso de Slack |
| `notas` | Contexto libre para el redactor y para la IA |
| `estado` | `pendiente` para encolarla; cualquier otro valor la ignora |

**Fila 1, para copiar y pegar:**

```
keyword	intencion	prioridad	notas	estado
```

Ejemplo:

| keyword | intencion | prioridad | notas | estado |
|---|---|---|---|---|
| botas de montaña mujer | Comercial | Alta | Enlazar a la categoría de calzado técnico | pendiente |
| cómo impermeabilizar botas | Informacional | Media | | pendiente |

> El workflow **no** marca automáticamente las keywords como procesadas: al escribir el
> brief deja `estado = Brief listo` en la pestaña `Briefs`, pero la fila original en
> `Keywords` no se toca. Es deliberado — así puedes revisar el brief antes de sacarla de la
> cola. Si prefieres automatizarlo, añade un nodo de Google Sheets en modo
> *Append or Update* usando `keyword` como columna de coincidencia.

---

## Pestaña `Briefs` — workflow 03 (salida)

| Columna | Contenido |
|---|---|
| `fecha` | Día de generación |
| `keyword` | Keyword de origen |
| `prioridad` | Heredada de la pestaña `Keywords` |
| `titulo` | Título propuesto |
| `slug` | Slug sugerido |
| `metaDescripcion` | Meta description propuesta |
| `intencion` | Intención detectada a partir de la SERP real |
| `publico` | Público objetivo |
| `angulo` | Ángulo diferencial frente al top 10 actual |
| `palabrasObjetivo` | Extensión recomendada |
| `keywordsSecundarias` | Separadas por comas |
| `esquema` | Estructura H2/H3 con qué cubrir en cada sección |
| `preguntasFrecuentes` | Separadas por ` | ` |
| `enlacesInternos` | Sugerencias de enlazado, separadas por ` | ` |
| `cta` | Llamada a la acción sugerida |
| `estado` | `Brief listo` |

**Fila 1, para copiar y pegar:**

```
fecha	keyword	prioridad	titulo	slug	metaDescripcion	intencion	publico	angulo	palabrasObjetivo	keywordsSecundarias	esquema	preguntasFrecuentes	enlacesInternos	cta	estado
```
