#!/bin/bash

# Build and deploy script for the website

echo "Building website..."

# Navigate to the vite-src directory
cd vite-src

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the project
echo "Building project..."
npm run build

# Deploy static files
echo "Deploying static files..."
npm run deploy:static

echo "Build complete! The site is ready for deployment." 