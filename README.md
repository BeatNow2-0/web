# BeatNow Web

Landing pública de BeatNow para `beatnow.app` y `www.beatnow.app`. El registro se realiza en `app.beatnow.app/register`.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
cp .env.example .env.local
npm ci
npm run dev
```

La landing se sirve por defecto en `http://localhost:5174`.

Para probar el CTA contra la aplicación local:

```bash
VITE_WEBAPP_URL=http://localhost:5173/register
```

Solo se aceptan `app.beatnow.app`, `localhost` y `127.0.0.1` como destinos. En producción se exige HTTPS y cualquier valor inválido usa `https://app.beatnow.app/register`.

## Comprobaciones

```bash
npm run check
npm run build
```

## Despliegue en Vercel

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Variable opcional:

```bash
VITE_WEBAPP_URL=https://app.beatnow.app/register
```

`vercel.json` configura el fallback de la SPA, headers de seguridad y caché inmutable para assets versionados.
