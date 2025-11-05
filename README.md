# CHS Club Finder (Central High School)

Static React + Vite site for CHS clubs; configured for GitHub Pages.

## Local dev
```bash
npm ci
npm run dev
npm run build
```

## Deploy to GitHub Pages
- Enable **Settings → Pages → Source: GitHub Actions**.
- Push to `main`; `.github/workflows/deploy-pages.yml` builds and publishes `dist/`.

Public URL:
```
https://<your-org>.github.io/CHS-Club-App/
```

### Embed in the district website (Apptegy)
```html
<iframe src="https://<your-org>.github.io/CHS-Club-App/" width="100%" height="1400" style="border:0;"></iframe>
```
