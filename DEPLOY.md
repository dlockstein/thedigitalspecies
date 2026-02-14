# Deploy The Digital Species Website
## Get Live in 15 Minutes

**What you're deploying:** Single-page website for thedigitalspecies.com  
**Where:** GitHub Pages (free, custom domain support)  
**Time:** ~15 minutes total

---

## Step 1: Create GitHub Repository (3 minutes)

1. Go to https://github.com/new
2. Repository name: `thedigitalspecies` (or any name you want)
3. Set to **Public**
4. **DON'T** initialize with README (you already have files)
5. Click **Create repository**

---

## Step 2: Upload Your Website (5 minutes)

### Option A: Via GitHub Web Interface (Easiest)

1. In your new repository, click **uploading an existing file**
2. Drag and drop ALL files from `/Users/sydbot/.openclaw/workspace/thedigitalspecies-launch/`:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `images/` folder
3. Add commit message: "Initial website launch"
4. Click **Commit changes**

### Option B: Via Command Line (If you prefer)

```bash
cd /Users/sydbot/.openclaw/workspace/thedigitalspecies-launch
git init
git add .
git commit -m "Initial website launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/thedigitalspecies.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your actual GitHub username)*

---

## Step 3: Enable GitHub Pages (2 minutes)

1. In your repository, click **Settings** (top menu)
2. Click **Pages** (left sidebar, under "Code and automation")
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

**Your site will be live at:**  
`https://YOUR_USERNAME.github.io/thedigitalspecies/`

Test it! Click the link GitHub shows you.

---

## Step 4: Point Your Domain (5 minutes)

### In GitHub:

1. Still in Settings → Pages
2. Under **Custom domain**, enter: `thedigitalspecies.com`
3. Click **Save**
4. **Check** "Enforce HTTPS" (after DNS propagates)

### In GoDaddy (or your domain provider):

1. Log into GoDaddy → My Products → Domains → `thedigitalspecies.com`
2. Click **DNS** (or **Manage DNS**)
3. Add these records:

| Type  | Name | Value                          | TTL     |
|-------|------|--------------------------------|---------|
| A     | @    | 185.199.108.153                | 600     |
| A     | @    | 185.199.109.153                | 600     |
| A     | @    | 185.199.110.153                | 600     |
| A     | @    | 185.199.111.153                | 600     |
| CNAME | www  | YOUR_USERNAME.github.io        | 600     |

*(Replace `YOUR_USERNAME` with your GitHub username)*

4. **Delete** any existing A or CNAME records for `@` and `www` first
5. Click **Save**

**DNS propagation takes 10-60 minutes.** Check status at: https://dnschecker.org

---

## Step 5: Verify It's Live (1 minute)

After DNS propagates:

1. Visit `https://thedigitalspecies.com`
2. Check that:
   - Page loads correctly
   - Amazon links work
   - Social media links work
   - Email signup works
   - Mobile responsive (test on phone)

---

## 🎉 Done!

Your website is now live at **https://thedigitalspecies.com**

---

## What's Next?

### Add Google Analytics (Optional, 5 minutes)

1. Go to https://analytics.google.com
2. Create account + property for thedigitalspecies.com
3. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)
4. Edit `index.html` and uncomment the Google Analytics section in `<head>`
5. Replace `G-XXXXXXXXXX` with your actual ID
6. Commit and push changes to GitHub

### Email Newsletter Integration (Optional, 15 minutes)

The form currently uses `mailto:` as a fallback.

**For Mailchimp:**
1. Create free account at https://mailchimp.com
2. Create Audience
3. Go to Signup Forms → Embedded forms
4. Copy form action URL
5. Replace the form `action` attribute in `index.html`

**For ConvertKit/Kit:**
1. Create free account at https://convertkit.com
2. Create Form
3. Get embed code
4. Replace entire `<form>` section in `index.html`

### Update Book Cover Image

The site expects:
- `images/book-cover.jpg` (400x600px) - for hero section
- `images/book-cover-social.jpg` (1200x630px) - for social media previews

Replace these with your actual book cover images.

---

## Troubleshooting

**"Domain doesn't resolve"**
- Wait 30-60 minutes for DNS propagation
- Check https://dnschecker.org

**"HTTPS not working"**
- GitHub needs 24 hours to issue SSL certificate after DNS setup
- "Enforce HTTPS" checkbox will become available then

**"404 Not Found"**
- Make sure GitHub Pages source is set to `main` branch, `/ (root)` folder
- Verify `index.html` is in the root directory (not in a subfolder)

**"Images/CSS not loading"**
- Check that `css/`, `js/`, and `images/` folders uploaded correctly
- Paths are relative, should work automatically

---

## Need Help?

Contact Syd on Telegram or at csssyd@mywusd.org

**Estimated total time: 15 minutes** (plus DNS wait time)
