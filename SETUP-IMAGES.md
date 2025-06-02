# 🖼️ Image Setup Guide for GitHub Pages

Your portfolio is now configured to use **GitHub Raw URLs** for reliable image hosting that works perfectly with GitHub Pages!

## ✅ What's Already Done:

1. **Image URLs configured** - Your `portfolioData.json` now uses GitHub Raw URLs
2. **Directory structure created** - `public/images/projects/flutter-francofolies/` is ready
3. **Code pushed to GitHub** - The setup is live on your repository

## 🔥 Quick Solution (5 minutes):

### Option A: GitHub Issues Upload (Fastest)

1. Go to: https://github.com/sfeirc/PORTFOLIO/issues
2. Click **"New Issue"**
3. **Drag and drop** your 5 Flutter screenshots into the text box
4. GitHub will auto-generate URLs like: `https://github.com/sfeirc/PORTFOLIO/assets/123456/abcd1234...`
5. **Copy these URLs** and replace them in `src/data/portfolioData.json`
6. **Delete the issue** (the image URLs remain valid)

### Option B: Proper File Upload (Recommended)

1. **Download your images** from Google Drive
2. **Rename them** to:
   - `screenshot-1.png`
   - `screenshot-2.png` 
   - `screenshot-3.png`
   - `screenshot-4.png`
   - `screenshot-5.png`
3. **Place them** in: `public/images/projects/flutter-francofolies/`
4. **Commit and push**:
   ```bash
   git add public/images/projects/flutter-francofolies/
   git commit -m "Add Flutter Francofolies screenshots"
   git push
   ```

## 🎯 Expected Result:

Once you add the images, they'll be accessible at:
- https://raw.githubusercontent.com/sfeirc/PORTFOLIO/main/public/images/projects/flutter-francofolies/screenshot-1.png
- https://raw.githubusercontent.com/sfeirc/PORTFOLIO/main/public/images/projects/flutter-francofolies/screenshot-2.png
- etc...

## 🚀 Deploy to GitHub Pages:

After adding images, redeploy your site:
1. Go to your repository **Settings** → **Pages**
2. Your site will automatically rebuild
3. Images will work perfectly on your live site!

## ❓ Need Help?

- The URLs are already configured in your code
- Just add the actual image files and they'll work immediately
- No more Google Drive link expiration issues!
- Perfect integration with GitHub Pages

**Your portfolio will now display images reliably on all devices and deployments! 🎉** 