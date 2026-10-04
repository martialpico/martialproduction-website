# Martial Production — site

Site React + Vite exporté de Figma Make, nettoyé pour être hébergé n'importe où.

## Développer
    npm install
    npm run dev

## Construire
    npm run build      # génère le dossier dist/

## Mettre en ligne
- **Netlify** (gratuit) : glisser le dossier `dist/` sur https://app.netlify.com/drop
- **Hostinger** : envoyer le *contenu* de `dist/` dans `public_html/` (le .htaccess est inclus)
- **GitHub + Netlify/Vercel/Cloudflare Pages** : commande de build `npm run build`, dossier de sortie `dist`
