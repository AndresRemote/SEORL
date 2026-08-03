# Credenciales

Los workflows **no incluyen credenciales**: al importarlos, cada nodo que necesita una
aparecerá con el selector vacío. Crea las credenciales en n8n
(**Credentials → Add credential**) y selecciónalas en cada nodo.

---

## 1. Google OAuth2 API — Search Console

Usada por: `GSC · Periodo actual` y `GSC · Periodo anterior` (workflow 01).

El nodo HTTP Request usa autenticación **Predefined Credential Type → Google OAuth2 API**,
porque n8n no trae un nodo nativo de Search Console.

1. En [Google Cloud Console](https://console.cloud.google.com/), crea un proyecto y habilita
   la **Google Search Console API**.
2. **APIs y servicios → Credenciales → Crear credenciales → ID de cliente OAuth** (tipo
   *Aplicación web*).
3. Copia la *Redirect URL* que n8n te muestra al crear la credencial y pégala en
   **URIs de redireccionamiento autorizados**.
4. En n8n, crea la credencial **Google OAuth2 API** con el Client ID y el Client Secret, y
   en **Scope** pon:

   ```
   https://www.googleapis.com/auth/webmasters.readonly
   ```

5. Conecta la cuenta. La cuenta de Google debe tener acceso a la propiedad en Search Console.

> **El valor de `siteUrl` debe coincidir exactamente con la propiedad en Search Console.**
> Para una propiedad de dominio es `sc-domain:ejemplo.com`; para una de prefijo de URL es
> `https://www.ejemplo.com/` **con la barra final**. Un 403 aquí casi siempre es esto.

---

## 2. Anthropic — Header Auth

Usada por: `Claude · Diagnostico SEO`, `Claude · Plan de correccion`,
`Claude · Brief de contenido`.

1. Obtén una clave en [console.anthropic.com](https://console.anthropic.com) → **API Keys**.
2. En n8n crea una credencial de tipo **Header Auth**:

   | Campo | Valor |
   |---|---|
   | Name | `x-api-key` |
   | Value | `sk-ant-...` |

3. Nómbrala, por ejemplo, `Anthropic API`.

La cabecera `anthropic-version: 2023-06-01` ya está declarada dentro del nodo; no la pongas
también en la credencial.

---

## 3. Serper.dev — Header Auth

Usada por: `SERP · Top 10` (workflow 03).

1. Regístrate en [serper.dev](https://serper.dev) y copia tu API key.
2. Crea una credencial **Header Auth**:

   | Campo | Valor |
   |---|---|
   | Name | `X-API-KEY` |
   | Value | tu clave de Serper |

Si prefieres otro proveedor (DataForSEO, SerpAPI, ValueSERP), sustituye el nodo
`SERP · Top 10` y adapta el nodo `Contexto SERP` al formato de respuesta correspondiente.

---

## 4. Google Sheets

Usada por los nodos `Google Sheets · ...` de los workflows 01, 02 y 03.

Usa el tipo **Google Sheets OAuth2 API** de n8n (o una cuenta de servicio). Si eliges cuenta
de servicio, recuerda **compartir el spreadsheet con el email de la cuenta de servicio** con
permiso de edición.

Scopes necesarios:

```
https://www.googleapis.com/auth/spreadsheets
https://www.googleapis.com/auth/drive.file
```

---

## 5. Slack

Usada por todos los nodos `Slack · ...`.

1. Crea una app en [api.slack.com/apps](https://api.slack.com/apps).
2. **OAuth & Permissions → Bot Token Scopes**: `chat:write` y `channels:read`
   (añade `groups:read` si vas a publicar en canales privados).
3. Instala la app en el workspace y copia el *Bot User OAuth Token* (`xoxb-...`).
4. En n8n crea una credencial **Slack API** con ese token.
5. **Invita al bot al canal**: `/invite @nombre-del-bot`. Sin esto obtendrás
   `channel_not_found` aunque el canal exista.

---

## Comprobación rápida

| Síntoma | Causa habitual |
|---|---|
| `403` en los nodos GSC | `siteUrl` no coincide con la propiedad, o la cuenta no tiene acceso |
| `401` en los nodos de Claude | La credencial Header Auth no se llama exactamente `x-api-key` |
| `400 invalid_request_error` de Anthropic | Se añadió `temperature` o `budget_tokens` al body (Opus 5 los rechaza) |
| `channel_not_found` en Slack | El bot no está invitado al canal, o falta el scope `channels:read` |
| Google Sheets no encuentra la hoja | El nombre de la pestaña no coincide con el del nodo `Configuracion` |
