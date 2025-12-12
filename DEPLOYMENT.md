# Deployment Guide for MAPC Study Portal

## Deployment Options

### Option 1: Vercel (Recommended)

#### Prerequisites
- Vercel account (free at vercel.com)
- GitHub repository

#### Steps
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - Framework Preset: `Docusaurus 2`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Click "Deploy"

#### Environment Variables (if needed)
```
ALGOLIA_APP_ID=your_app_id
ALGOLIA_API_KEY=your_api_key
```

### Option 2: Netlify

#### Prerequisites
- Netlify account (free at netlify.com)
- GitHub repository

#### Steps
1. Push code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Choose GitHub and select repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

#### netlify.toml (create in root)
```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

#### Steps
1. Install deployment package:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "docusaurus deploy"
  }
}
```

3. Update `docusaurus.config.js`:
```javascript
const config = {
  url: 'https://yourusername.github.io',
  baseUrl: '/mapc-study/',
  organizationName: 'yourusername',
  projectName: 'mapc-study',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
};
```

4. Deploy:
```bash
npm run deploy
```

## Setting Up Algolia Search (Free)

1. Go to [algolia.com](https://www.algolia.com/)
2. Sign up for free account
3. Create new application
4. Go to DocSearch program: https://docsearch.algolia.com/
5. Apply with your deployed URL
6. Once approved, add credentials to `docusaurus.config.js`:

```javascript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_PUBLIC_API_KEY',
  indexName: 'mapc-study',
},
```

## Custom Domain Setup

### For Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Follow DNS configuration instructions

### For Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS as instructed

## Continuous Deployment

All platforms support automatic deployment on push to main branch:

1. Make changes locally
2. Commit and push:
```bash
git add .
git commit -m "Update content"
git push origin main
```
3. Site automatically rebuilds and deploys

## Performance Optimization

### Before Deployment
1. Optimize images:
```bash
# Install image optimization
npm install --save-dev @docusaurus/plugin-ideal-image

# Use in MDX
import Image from '@theme/IdealImage';
<Image img={require('./image.png')} />
```

2. Enable PWA:
```bash
npm install --save @docusaurus/plugin-pwa
```

3. Add to `docusaurus.config.js`:
```javascript
plugins: [
  [
    '@docusaurus/plugin-pwa',
    {
      pwaHead: [
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    },
  ],
],
```

## Monitoring

### Analytics Setup
1. **Plausible** (Privacy-friendly)
```javascript
// In docusaurus.config.js
scripts: [
  {
    src: 'https://plausible.io/js/script.js',
    defer: true,
    'data-domain': 'your-domain.com'
  }
],
```

2. **Google Analytics**
```javascript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

## Backup Strategy

1. **GitHub**: All code versioned
2. **Content**: MDX files in `/docs`
3. **Status**: `/processing/status.json`
4. **Regular exports**: Download build periodically

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Clear cache: `npm run clear`
- Delete `node_modules` and reinstall

### Search Not Working
- Ensure site is publicly accessible
- Wait for Algolia to crawl (24-48 hours)
- Check API keys are correct

### Slow Performance
- Enable caching headers
- Optimize images
- Use CDN (automatic with Vercel/Netlify)

## Update Workflow

1. Process new PDFs locally
2. Test with `npm run start`
3. Build test: `npm run build`
4. Commit and push
5. Verify deployment
6. Check live site

---

## Quick Deploy Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/mapc-study.git
git push -u origin main

# Regular updates
git add .
git commit -m "Add [topic] content"
git push

# Local testing
npm run start

# Build check
npm run build
npm run serve
```

## Support Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [MDX Documentation](https://mdxjs.com/)
