# 🚀 Portfolio Website - Setup Guide

## 📁 Project Structure

Your portfolio should be organized as follows:

```
my-portfolio/
│
├── index.html                 # Main HTML file
├── README.md                  # This file
│
├── css/
│   └── style.css             # Custom styles
│
├── js/
│   ├── data.js               # Portfolio data (skills, projects, etc.)
│   └── main.js               # Main JavaScript functionality
│
├── images/
│   ├── profile.jpg           # Your profile photo
│   ├── og-image.jpg          # Open Graph image for social sharing
│   ├── twitter-image.jpg     # Twitter card image
│   └── projects/             # Project screenshots
│       ├── project1.jpg
│       ├── project2.jpg
│       └── ...
│
├── resume.pdf                # Your resume file
│
└── assets/                   # Additional assets (optional)
    └── icons/
```

## 🛠️ Setup Instructions

### Step 1: Create the Project Structure

```bash
# Create main directory
mkdir my-portfolio
cd my-portfolio

# Create subdirectories
mkdir css js images images/projects assets

# Create files
touch index.html README.md
touch css/style.css
touch js/data.js js/main.js
```

### Step 2: Copy the Files

1. **Copy `index.html`** - The main HTML structure
2. **Copy `css/style.css`** - All custom styles
3. **Copy `js/data.js`** - Your portfolio data
4. **Copy `js/main.js`** - JavaScript functionality

### Step 3: Add Your Content

#### Update `js/data.js`:

1. **Skills**: Already configured, but you can add/remove as needed
2. **Projects**: Replace placeholder data with your actual projects
3. **Experience**: Add your real work experience
4. **Education**: Add your educational background
5. **Certifications**: Add your certifications
6. **Social Links**: Update with your actual URLs

```javascript
// Example: Update social links
const socialLinks = {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  email: 'your.email@example.com',
};
```

#### Add Your Images:

1. **Profile Photo**: Save as `images/profile.jpg` (200x200px recommended)
2. **Project Screenshots**: Save in `images/projects/`
3. **Resume**: Save as `resume.pdf` in root directory

#### Update Links in `index.html`:

Replace all instances of:
- `https://github.com/yourusername` → Your GitHub URL
- `https://linkedin.com/in/yourusername` → Your LinkedIn URL
- `https://picsum.photos/seed/portfolio-profile/200/200` → `./images/profile.jpg`

## 🎨 Customization

### Change Color Scheme

Edit the Tailwind config in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',  // Change this
          light: '#60a5fa',    // And this
          dark: '#2563eb',     // And this
        },
      },
    },
  },
}
```

### Add More Sections

1. Add HTML in `index.html`
2. Add data in `js/data.js`
3. Add render function in `js/main.js`
4. Call render function in `init()`

## 🧪 Testing Locally

### Option 1: Simple HTTP Server (Python)

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 2: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js HTTP Server

```bash
# Install globally
npm install -g http-server

# Run
http-server

# Then open: http://localhost:8080
```

## 📱 Testing Checklist

- [ ] Desktop view (1920x1080)
- [ ] Laptop view (1366x768)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All links work
- [ ] Images load correctly
- [ ] Mobile menu works
- [ ] Smooth scrolling works
- [ ] Back to top button appears
- [ ] Project filters work
- [ ] All animations work

## 🚀 Deployment

### Deploy to GitHub Pages (Free)

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub named: yourusername.github.io
# Then:
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

Your site will be live at: `https://yourusername.github.io`

### Deploy to Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop your project folder
4. Done! You get a free URL

**For custom domain:**
1. Buy domain from Namecheap/Google Domains
2. Update DNS settings in Netlify
3. Wait 24-48 hours for propagation

### Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Deploy to Traditional Hosting

1. **Choose a host**: Hostinger, Bluehost, etc.
2. **Upload via FTP**: Use FileZilla
3. **Upload all files** to `public_html` directory

## 🔧 Advanced Features (Optional)

### Add Contact Form

Use services like:
- **Formspree**: [formspree.io](https://formspree.io)
- **EmailJS**: [emailjs.com](https://emailjs.com)
- **Netlify Forms**: Built-in if using Netlify

### Add Analytics

```html
<!-- Add to <head> in index.html -->
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Blog Section

1. Create `blog.html`
2. Add blog data to `js/data.js`
3. Create render function
4. Link from navigation

## 📊 SEO Optimization

### Update Meta Tags in `index.html`:

```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your description here">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
```

### Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Create `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images are in correct directory
- Check file extensions match (jpg vs jpeg)

### CSS Not Applied
- Clear browser cache
- Check `<link>` tag path in HTML
- Ensure CSS file is saved

### JavaScript Not Working
- Open browser console (F12)
- Check for errors
- Ensure scripts are in correct order

### Mobile Menu Not Working
- Check that IDs match
- Ensure main.js is loaded
- Clear cache and reload

## 📝 TODO List

Before going live, update:

- [ ] Replace all placeholder images
- [ ] Add your real GitHub URL
- [ ] Add your real LinkedIn URL
- [ ] Add your real email
- [ ] Upload your resume PDF
- [ ] Update project URLs
- [ ] Update experience data
- [ ] Update education data
- [ ] Test on all devices
- [ ] Add custom favicon
- [ ] Update Open Graph images
- [ ] Add Google Analytics (optional)
- [ ] Test all links
- [ ] Spell check all content

## 💡 Tips

1. **Optimize Images**: Use [TinyPNG](https://tinypng.com) to compress images
2. **Test Speed**: Use [PageSpeed Insights](https://pagespeed.web.dev)
3. **Validate HTML**: Use [W3C Validator](https://validator.w3.org)
4. **Check Links**: Use [Dead Link Checker](https://www.deadlinkchecker.com)
5. **Mobile Test**: Use Chrome DevTools device mode

## 🆘 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all file paths
3. Clear browser cache
4. Try different browser
5. Check this README for common issues

## 📄 License

This portfolio template is free to use for personal projects.

---

**Built with ❤️ using HTML, CSS (Tailwind), and JavaScript**

Good luck with your portfolio! 🎉