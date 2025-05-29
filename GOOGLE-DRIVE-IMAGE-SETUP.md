# 🖼️ Google Drive Image Setup Guide

## 🔧 **Step 1: Fix Your Google Drive Image Sharing**

Your Google Drive images need specific sharing settings to work. Here's how to fix them:

### **For Each Image in Google Drive:**

1. **Right-click** on each image file
2. Select **"Share"**
3. Click **"Change to anyone with the link"**
4. Set permission to **"Viewer"**
5. Click **"Copy link"**

### **Important: Check Current Sharing Status**

Your current image links:
- `1xICoDQF0INq4_Byk_V-ychXYKxh-3E9e` ← Screenshot 1
- `13dI5vfxMXKM-B4qozTmqu0GdSQGeOIG2` ← Screenshot 2  
- `1C7jLyh4exwDXkMYfboU0gg-e0op25eAB` ← Screenshot 3
- `103hKNdT6PtDGN7HnC3IPSdMoslGHKqpH` ← Screenshot 4
- `1hnwVEMK2_BXiO2XnDkkUr9lG38lUcefe` ← Screenshot 5

## 🚀 **Step 2: Test Your Images**

After setting sharing to public, test each image by visiting:
```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

For example:
```
https://drive.google.com/uc?export=download&id=1xICoDQF0INq4_Byk_V-ychXYKxh-3E9e
```

## ✅ **Step 3: Verify It Works**

1. **Start your dev server**: `npm run dev`
2. **Navigate** to your Flutter Francofolies project
3. **Check** if images load properly

## 🔥 **Alternative: Use Google Drive Embed (Like PDFs)**

If direct download doesn't work, we can embed images similar to PDFs:

```
https://drive.google.com/file/d/FILE_ID/preview
```

## 📝 **Current Setup:**

✅ **PDFs work** because they use: `https://drive.google.com/file/d/FILE_ID/preview`  
🔄 **Images now use**: `https://drive.google.com/uc?export=download&id=FILE_ID`

## 🛠️ **If Images Still Don't Work:**

Try these alternative methods:

### **Method 1: Google Photos Public Link**
1. Upload to Google Photos
2. Share as public link
3. Use the direct image URL

### **Method 2: Google Sites Embed**
1. Create a simple Google Site
2. Upload images there
3. Use the embedded image URLs

### **Method 3: Google Drive Thumbnail**
```
https://lh3.googleusercontent.com/d/FILE_ID=w800-h600
```

## 🎯 **Why This Should Work:**

- ✅ **Same Google Drive account** as your working PDFs
- ✅ **Public sharing** allows direct access
- ✅ **Download export** bypasses viewer restrictions
- ✅ **No CORS issues** with download method

**Your images should work exactly like your PDFs now! 🎉** 