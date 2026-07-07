# BeatNow Landing

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Por defecto arranca en `http://localhost:5174`.

Para apuntar el CTA de la landing a tu consola local:

```bash
VITE_WEBAPP_URL=http://localhost:5173/register
```

## Vercel

- Root Directory: `web`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Variables recomendadas en Vercel:

```bash
VITE_API_BASE_URL=https://api.beatnow.app
VITE_WEBAPP_URL=https://app.beatnow.app/register
```
