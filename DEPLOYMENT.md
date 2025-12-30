# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Railway (Recommended)

1. Visit [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `vaibhaviimcal-web/rxgenius-prescription-system`
5. Railway will auto-detect and deploy
6. Your app will be live in ~2 minutes!

**Railway Deploy Button:**
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/vaibhaviimcal-web/rxgenius-prescription-system)

### Option 2: Vercel

1. Visit [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-configure
4. Deploy!

**Vercel Deploy Button:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vaibhaviimcal-web/rxgenius-prescription-system)

### Option 3: Heroku

```bash
# Install Heroku CLI
heroku login

# Create new app
heroku create rxgenius-app

# Deploy
git push heroku main

# Open app
heroku open
```

### Option 4: Render

1. Visit [Render](https://render.com)
2. New Web Service
3. Connect GitHub repo
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Deploy!

## Environment Variables

Set these in your deployment platform:

```
PORT=3000
NODE_ENV=production
```

## Post-Deployment

After deployment, your app will be available at:
- Railway: `https://rxgenius-prescription-system-production.up.railway.app`
- Vercel: `https://rxgenius-prescription-system.vercel.app`
- Heroku: `https://rxgenius-app.herokuapp.com`

## Local Development

```bash
npm install
npm start
# Visit http://localhost:3000
```

## Troubleshooting

**Port Issues**: Railway/Heroku automatically set PORT variable
**Build Fails**: Ensure Node.js version >= 18.0.0
**CSS Not Loading**: Check public folder structure

## Support

Open an issue on GitHub for help!