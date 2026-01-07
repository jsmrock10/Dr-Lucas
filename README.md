# 📚 Rigorous Learning Platform

A beautiful, modern educational platform that extracts and uses content directly from PDF files (Bible, Quran, and Shakespeare) to teach kids and youth a rigorous curriculum from ages 0-18.

![Platform Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### 🎨 Beautiful UI/UX
- **Modern Design**: Gradient backgrounds, smooth animations, and engaging interactions
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive**: Hover effects, transitions, and visual feedback
- **Accessible**: Easy to use for all ages

### 📖 Direct PDF Integration
- Extracts content from:
  - `The-Holy-Bible-King-James-Version.pdf`
  - `Holy-Quran-English.pdf`
  - `Shakespeare-Complete-Works.pdf`
- Automatic parsing and structuring
- Cached for fast performance

### 🎯 Age-Appropriate Learning (0-18)
- **Infant (0-1)**: Rhythmic sounds and recognition
- **Toddler (1-3)**: Visual storytelling
- **Preschool (3-6)**: Simple stories and concepts
- **Elementary (6-11)**: Structured narratives
- **Middle School (11-15)**: Guided analysis
- **High School (15-18)**: Critical analysis

### 🚀 Ready to Deploy
- One-command deployment
- Multiple hosting options
- Production-ready build

## 🚀 Quick Deploy (3 Steps!)

### Option 1: Vercel (Easiest - Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy!
./deploy.sh
```

**Or use the web interface:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Auto-deploys! 🎉

### Option 2: Netlify

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
npm run build:all
netlify deploy --prod
```

## 📦 Installation

```bash
# Install all dependencies
npm run install:all

# Start development
npm run dev
```

Visit: http://localhost:3000

## 🏗️ Project Structure

```
.
├── server/              # Backend API
│   ├── routes/         # API endpoints
│   ├── services/       # Business logic (PDF extraction, content, curriculum)
│   ├── database/       # SQLite database
│   └── utils/          # Utilities (age filtering)
├── client/             # Frontend React app
│   └── src/
│       ├── components/ # React components
│       └── App.jsx     # Main app
├── *.pdf              # Your PDF files
└── deploy.sh          # Quick deploy script
```

## 🎨 UI/UX Highlights

- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Fade-ins, slides, and hover effects
- **Interactive Cards**: Hover to lift and scale
- **Age Badge**: Visual age indicator with animations
- **Loading States**: Beautiful spinners and loading indicators
- **Error Handling**: User-friendly error messages
- **Mobile Responsive**: Perfect on all devices

## 📡 API Endpoints

### Content (from PDFs)
- `GET /api/content/bible?book=&chapter=&verse=&age=`
- `GET /api/content/quran?surah=&ayah=&age=`
- `GET /api/content/shakespeare?work=&act=&scene=&age=`
- `GET /api/content/recommendations/:age`

### Curriculum
- `GET /api/curriculum/age/:age`
- `GET /api/curriculum/progression`
- `GET /api/curriculum/lesson/:age/:week`

### Extraction
- `POST /api/extract/all` - Extract all PDFs
- `GET /api/extract/status` - Check status

## 🛠️ Technology Stack

- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express
- **PDF Processing**: pdf-parse
- **Database**: SQLite
- **Styling**: CSS3 with animations

## 📝 Scripts

```bash
npm run dev              # Start development (both frontend & backend)
npm run build:all        # Build for production
npm run install:all      # Install all dependencies
./deploy.sh              # Quick deploy to Vercel
```

## 🌐 Deployment Options

1. **Vercel** (Recommended) - Easiest, auto-detects everything
2. **Netlify** - Great for static sites
3. **Render** - Good for full-stack apps
4. **Railway** - Simple deployment

See `DEPLOYMENT.md` for detailed instructions.

## 📚 Documentation

- `QUICK_START.md` - Get started in 3 steps
- `DEPLOYMENT.md` - Detailed deployment guide
- `README.md` - This file

## 🎯 Features in Detail

### Dashboard
- Personalized welcome message
- Age-specific recommendations
- Beautiful card layouts
- Smooth animations

### Curriculum
- Age-based learning paths
- Weekly lesson plans
- Learning objectives
- Sample content previews

### Content Viewer
- Browse Bible, Quran, and Shakespeare
- Age-appropriate versions
- Learning objectives
- Theme tags

### Progress Tracking
- Visual progress indicators
- Completion tracking
- Score tracking

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
```

## 📱 Mobile Support

Fully responsive design that works on:
- 📱 Phones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🎨 Customization

The UI is highly customizable:
- Colors: Edit CSS variables in `App.css`
- Animations: Adjust timing in component CSS files
- Layout: Modify grid and flexbox settings

## 🐛 Troubleshooting

### PDF extraction fails
- Make sure PDF files are in root directory
- Check file permissions
- Verify PDF files are valid

### Build fails
- Run `npm run install:all`
- Clear `node_modules` and reinstall
- Check Node.js version (14+)

### Deployment issues
- Check environment variables
- Verify build command
- Check platform logs

## 📄 License

MIT

## 🙏 Credits

Built with ❤️ for rigorous learning from ages 0-18.

---

## 🚀 Ready to Deploy?

```bash
./deploy.sh
```

**That's it!** Your platform will be live in minutes! 🎉
