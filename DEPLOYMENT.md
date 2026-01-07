# Deployment Guide

This guide will help you deploy your Rigorous Learning Platform to the web.

## Option 1: Vercel (Recommended - Easiest)

### Steps:

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name? **rigorous-learning-platform**
   - Directory? **./**
   - Override settings? **No**

5. **Your site will be live!** Vercel will provide you with a URL.

### For Production Deployment:

```bash
vercel --prod
```

## Option 2: Netlify

### Steps:

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Build the project**:
```bash
npm run build:all
```

4. **Deploy**:
```bash
netlify deploy --prod
```

5. **Follow the prompts** to link your site.

## Option 3: Render.com

### Steps:

1. Go to [render.com](https://render.com) and sign up
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm run build:all`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Add environment variables if needed
6. Deploy!

## Option 4: Railway

### Steps:

1. Go to [railway.app](https://railway.app) and sign up
2. Create a new project
3. Deploy from GitHub
4. Railway will auto-detect and deploy

## Important Notes for Production:

### Environment Variables:
Make sure to set these in your hosting platform:
- `NODE_ENV=production`
- `PORT=5000` (or your platform's assigned port)

### PDF Files:
- Make sure your PDF files are included in the deployment
- They should be in the root directory
- Some platforms may have file size limits

### Database:
- SQLite database will be created automatically
- For production, consider using PostgreSQL or another database service

### CORS:
- Update CORS settings in `server/index.js` to allow your production domain

## Quick Deploy Commands:

### Vercel:
```bash
vercel --prod
```

### Netlify:
```bash
netlify deploy --prod
```

### Manual Build:
```bash
npm run build:all
# Then upload the client/dist folder to your hosting
```

## Troubleshooting:

1. **PDF extraction fails**: Make sure PDF files are in the root directory
2. **API not working**: Check CORS settings and environment variables
3. **Build fails**: Make sure all dependencies are installed

## Support:

For issues, check:
- Server logs in your hosting platform
- Browser console for frontend errors
- Network tab for API errors

