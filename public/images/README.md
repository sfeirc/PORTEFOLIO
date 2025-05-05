# Portfolio Image System

This directory contains images used in the portfolio. The system is designed to make it easy to add and reference images in your portfolio data.

## Directory Structure

- `images/` - Root directory for all portfolio images
  - `projects/` - Images related to projects
  - `certifications/` - Images related to certifications

## How to Use

1. **Add an image**:
   - Place your image in the appropriate subdirectory (e.g., `projects/` or `certifications/`)
   - Use descriptive filenames (e.g., `react-weather-app.png`, `aws-certification.png`)

2. **Reference in JSON Data**:
   - In `portfolioData.json`, you can reference your images in three ways:

   a. **Full URLs** (for external images):
   ```json
   "image": "https://example.com/image.png"
   ```

   b. **Public path** (starting with `/`):
   ```json
   "image": "/images/projects/my-project.png"
   ```

   c. **Relative path** (automatically goes to `/images/`):
   ```json
   "image": "projects/my-project.png"
   ```

3. **The Image Resolver**:
   - The `getImageUrl` function in `usePortfolioData.ts` automatically handles all these formats
   - All components automatically use this resolver for images

## Example

```json
{
  "projects": [
    {
      "id": "weather-app",
      "title": "Weather App",
      "image": "projects/weather-app.png",
      "projectImage": "projects/weather-app-screenshot.png",
      // ... other project data
    }
  ]
}
```

## Tips

- Use PNG or WebP format for better quality
- Keep image file sizes reasonable (< 500KB) for better performance
- Use descriptive filenames to keep track of your images
- For placeholder icons, consider using public icon libraries like Font Awesome or Heroicons 