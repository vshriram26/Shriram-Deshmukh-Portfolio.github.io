@echo off
echo Starting deployment process...

echo Step 1: Adding all changes to git
git add .

echo Step 2: Committing changes
git commit -m "Setup for GitHub Pages deployment with workflow"

echo Step 3: Pushing to main branch
git push origin main

echo Step 4: Deploying to GitHub Pages
npm run deploy

echo Deployment completed! Your site should be available at:
echo https://vshriram26.github.io/Shriram-Deshmukh-Portfolio.github.io

pause
