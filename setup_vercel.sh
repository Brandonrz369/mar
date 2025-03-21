#!/bin/bash

# This script sets up Vercel deployment for the project

# Install Vercel CLI if not already installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel
echo "Logging in to Vercel..."
vercel login

# Link the project to Vercel
echo "Linking project to Vercel..."
vercel link

# Deploy the project
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment setup complete! Your website is now live on Vercel."