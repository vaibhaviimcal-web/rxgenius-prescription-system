#!/bin/bash

echo "🚀 RxGenius Deployment Script"
echo "=============================="
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null
then
    echo "📦 Installing Railway CLI..."
    npm i -g @railway/cli
fi

echo "🔐 Logging into Railway..."
railway login

echo "🏗️  Creating new project..."
railway init

echo "🔗 Linking to GitHub repository..."
railway link

echo "📤 Deploying to Railway..."
railway up

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your app is now live!"
echo ""
echo "Run 'railway open' to view your app"