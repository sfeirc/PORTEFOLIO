# Flutter Francofolies Project Images

This directory will contain the screenshot images for the Flutter Francofolies project that will be accessible via GitHub Pages.

## Required Images:

1. **screenshot-1.png** - Interface principale de l'application (Écran principal avec liste des concerts)
2. **screenshot-2.png** - Page de détails d'un concert (Vue détaillée d'un concert avec informations complètes)
3. **screenshot-3.png** - Système de filtres (Interface de filtrage par scène et date)
4. **screenshot-4.png** - Mode sombre de l'application (Interface en mode sombre)
5. **screenshot-5.png** - Liste des favoris (Gestion des concerts favoris)

## How to Add Images for GitHub Pages:

1. **Download your images** from Google Drive to your computer
2. **Rename them** according to the list above
3. **Add them to this directory**: `public/images/projects/flutter-francofolies/`
4. **Commit and push** to GitHub:
   ```bash
   git add public/images/projects/flutter-francofolies/
   git commit -m "Add Flutter Francofolies project images"
   git push
   ```
5. **Deploy** your site and the images will be accessible via:
   `https://raw.githubusercontent.com/sfeirc/PORTEFOLIO/main/public/images/projects/flutter-francofolies/screenshot-X.png`

## Image URLs are already configured:

The portfolio is already configured to use these GitHub Raw URLs:
- https://raw.githubusercontent.com/sfeirc/PORTEFOLIO/main/public/images/projects/flutter-francofolies/screenshot-1.png
- https://raw.githubusercontent.com/sfeirc/PORTEFOLIO/main/public/images/projects/flutter-francofolies/screenshot-2.png
- https://raw.githubusercontent.com/sfeirc/PORTEFOLIO/main/public/images/projects/flutter-francofolies/screenshot-3.png
- https://raw.githubusercontent.com/sfeirc/PORTEFOLIO/main/public/images/projects/flutter-francofolies/screenshot-4.png
- https://raw.githubusercontent.com/sfeirc/PORTEFOLIO/main/public/images/projects/flutter-francofolies/screenshot-5.png

## Recommended Image Settings:

- **Format**: PNG or WebP for best quality
- **Size**: Maximum width of 800px for optimal loading
- **File size**: Keep under 500KB each for better performance

## Why This Solution Works:

✅ **GitHub Raw URLs** are reliable and fast  
✅ **No CORS issues** like with Google Drive  
✅ **Version controlled** - images are backed up  
✅ **Free** - included with your GitHub repository  
✅ **Works with GitHub Pages** - perfect integration  

## Alternative: Using Issues for Quick Image Hosting

If you need a quick solution before setting up the proper image files:

1. Go to your GitHub repository Issues
2. Create a new issue (you can delete it later)
3. Drag and drop your images into the issue text box
4. GitHub will generate permanent URLs like: `https://github.com/sfeirc/PORTEFOLIO/assets/USER_ID/IMAGE_ID`
5. Copy these URLs and replace the ones in `portfolioData.json`

This is a quick workaround, but the proper solution above is recommended for a professional portfolio. 