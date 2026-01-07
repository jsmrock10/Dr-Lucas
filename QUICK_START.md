# 🚀 Quick Start Guide - Deploy to Web

## Fastest Way to Go Live (Vercel - Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy!
```bash
./deploy.sh
```

Or manually:
```bash
npm run build:all
vercel --prod
```

**That's it!** Your site will be live in minutes! 🎉

---

## Alternative: One-Click Deploy

### Option A: Deploy to Vercel (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Click "New Project"
4. Import your GitHub repository (or drag & drop)
5. Vercel auto-detects and deploys!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub or drag & drop
5. Build command: `npm run build:all`
6. Publish directory: `client/dist`
7. Deploy!

---

## Local Development

```bash
# Install dependencies
npm run install:all

# Start development servers
npm run dev
```

Visit: http://localhost:3000

---

## Production Build

```bash
# Build for production
npm run build:all

# Start production server
npm start
```

---

## Need Help?

Check `DEPLOYMENT.md` for detailed instructions!

