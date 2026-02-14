# Images Directory

This folder contains all images for the website.

## Required Images

### Book Cover
- **Filename:** `book-cover.jpg`
- **Size:** 400x600px minimum (maintain 2:3 aspect ratio)
- **Format:** JPG or PNG
- **Usage:** Hero section, sidebar displays
- **Notes:** This is the main book cover image visible throughout the site

### Social Media Image
- **Filename:** `book-cover-social.jpg`
- **Size:** 1200x630px (Facebook/Twitter optimal)
- **Format:** JPG
- **Usage:** Open Graph / social sharing meta tags
- **Notes:** This appears when the site is shared on social media

### Author Photo
- **Filename:** `david-lockstein.jpg`
- **Size:** 400x400px minimum (square)
- **Format:** JPG
- **Usage:** About page
- **Notes:** Professional headshot of David Lockstein

## Optional Images (for future use)

- Testimonial photos
- Blog post headers
- Resource preview images
- Screenshot examples

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use TinyPNG (https://tinypng.com) or ImageOptim
   - Target: Under 200KB per image
   
2. **Use correct formats:**
   - Photos: JPG
   - Graphics/logos: PNG
   - Simple graphics: SVG (scalable!)
   
3. **Provide alt text** in HTML for accessibility

4. **Use responsive images** when possible:
   ```html
   <img src="image.jpg" 
        srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w"
        alt="Description">
   ```

## Placeholder Until Images Added

The site will work without these images — broken image icons will appear as placeholders. Add images as soon as possible for professional appearance.

To add images:
1. Place files in this `/images` directory
2. Ensure filenames match exactly (case-sensitive)
3. Push to GitHub
4. Refresh the website

---

**Questions?** Email david@thedigitalspecies.com
