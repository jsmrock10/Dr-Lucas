#!/bin/bash

echo "🚀 Deploying Rigorous Learning Platform..."
echo ""

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI found"
    echo ""
    echo "Building project..."
    npm run build:all
    
    echo ""
    echo "Deploying to Vercel..."
    vercel --prod
    
    echo ""
    echo "✅ Deployment complete!"
else
    echo "❌ Vercel CLI not found"
    echo ""
    echo "Installing Vercel CLI..."
    npm install -g vercel
    
    echo ""
    echo "Building project..."
    npm run build:all
    
    echo ""
    echo "Deploying to Vercel..."
    vercel --prod
    
    echo ""
    echo "✅ Deployment complete!"
fi

