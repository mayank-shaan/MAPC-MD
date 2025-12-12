# Quick Start Guide

## Initial Setup (One Time)

```bash
# Navigate to project directory
cd /Users/msd/Work/Repositories/mapc-study

# Install dependencies
npm install

# Start development server
npm run start
```

Your site will be available at `http://localhost:3000`

## Copy PDFs

Copy your IGNOU PDFs to the static folder:
```bash
cp -r "/Users/msd/Downloads/MA in Psychology (MAPC) First Year/"* ./static/pdfs/
```

## Start Processing Content

1. Open a new Claude chat
2. Add the `CLAUDE_PROJECT_INSTRUCTIONS.md` to the project
3. Type "continue" to start processing PDFs
4. Claude will:
   - Read the next PDF
   - Research and enrich content
   - Create MDX files
   - Update status

## Development Workflow

### While Processing
- Keep `npm run start` running
- Changes appear instantly in browser
- Check `http://localhost:3000` to see updates

### Regular Commands
```bash
# Start dev server
npm run start

# Build for production
npm run build

# Test production build locally
npm run serve

# Clear cache if issues
npm run clear
```

## Git Workflow

```bash
# First time setup
git init
git add .
git commit -m "Initial setup"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# Regular updates
git add .
git commit -m "Add [topic] content"
git push
```

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click Deploy
5. Your site is live!

## File Locations Reference

| Content | Location |
|---------|----------|
| Source PDFs | `/Downloads/MA in Psychology (MAPC) First Year/` |
| Project Root | `/Users/msd/Work/Repositories/mapc-study/` |
| Study Materials | `./docs/` |
| Static PDFs | `./static/pdfs/` |
| Processing Status | `./processing/status.json` |

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
```

### Clear Everything and Restart
```bash
rm -rf node_modules .docusaurus
npm install
npm run clear
npm run start
```

### Check Setup
```bash
chmod +x verify-setup.sh
./verify-setup.sh
```

## Support

- [Docusaurus Docs](https://docusaurus.io)
- [MDX Guide](https://mdxjs.com)
- Check `DEPLOYMENT.md` for deployment details
- Check `MDX_TEMPLATE.md` for content format
