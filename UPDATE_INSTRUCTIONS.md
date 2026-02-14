# Quick Update Instructions

## What Was Fixed
Fixed alignment issue in the Solution section - the long paragraph is now left-aligned for better readability while the heading stays centered.

## How to Update Your Live Site

### Option 1: Replace Just the CSS File (Fastest - 1 minute)

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/thedigitalspecies`
2. Navigate to `css/style.css`
3. Click the pencil icon (Edit this file)
4. Delete all the content
5. Open `/Users/sydbot/.openclaw/workspace/thedigitalspecies-launch/css/style.css` on your computer
6. Copy all the content
7. Paste it into GitHub
8. Scroll down and click "Commit changes"
9. Wait 1-2 minutes for GitHub Pages to rebuild

### Option 2: Re-upload All Files (3 minutes)

1. Go to your GitHub repository
2. Delete the old `css` folder
3. Upload the new `css` folder from the updated package
4. Click "Commit changes"

### Option 3: Via Git Command Line

```bash
cd /path/to/your/local/repository
cp /Users/sydbot/.openclaw/workspace/thedigitalspecies-launch/css/style.css css/
git add css/style.css
git commit -m "Fix alignment in Solution section"
git push
```

## What Changed in the CSS

**Before:**
```css
.solution-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto var(--spacing-xl);
    font-size: 1.125rem;
}
```

**After:**
```css
.solution-intro {
    text-align: left;
    max-width: 800px;
    margin: 0 auto var(--spacing-xl);
    font-size: 1.125rem;
}
```

The paragraph is still centered on the page (via `margin: 0 auto`), but the text inside aligns left, making it much more readable.

---

Let me know if you need any other adjustments!
