# 📁 File Structure Quick Reference

## Complete File Organization

```
my-portfolio/
│
├── 📄 index.html                    # Main HTML structure
├── 📄 README.md                     # Setup and deployment guide
├── 📄 resume.pdf                    # Your resume (ADD THIS)
│
├── 📁 css/
│   └── 📄 style.css                 # Custom styles and animations
│
├── 📁 js/
│   ├── 📄 data.js                   # Portfolio data (UPDATE THIS!)
│   └── 📄 main.js                   # JavaScript functionality
│
├── 📁 images/
│   ├── 🖼️ profile.jpg               # Your profile photo (ADD THIS)
│   ├── 🖼️ og-image.jpg              # Social media preview (ADD THIS)
│   ├── 🖼️ twitter-image.jpg         # Twitter card image (ADD THIS)
│   └── 📁 projects/
│       ├── 🖼️ project1.jpg          # Project screenshots
│       ├── 🖼️ project2.jpg
│       ├── 🖼️ project3.jpg
│       └── 🖼️ project4.jpg
│
└── 📁 assets/                       # Optional additional files
    ├── 📁 icons/
    └── 📁 fonts/
```

---

## 📝 File Descriptions

### Core Files (Required)

| File | Description | Action Required |
|------|-------------|-----------------|
| `index.html` | Main website structure | Update social links |
| `css/style.css` | Custom styling | Customize colors if needed |
| `js/data.js` | **YOUR DATA HERE** | ⚠️ MUST UPDATE |
| `js/main.js` | JavaScript logic | No changes needed |
| `README.md` | Documentation | Reference guide |

### Assets to Add

| File | Size | Purpose |
|------|------|---------|
| `images/profile.jpg` | 200x200px | Profile picture in hero |
| `images/og-image.jpg` | 1200x630px | Social media preview |
| `images/twitter-image.jpg` | 1200x675px | Twitter card |
| `images/projects/project*.jpg` | 600x400px | Project screenshots |
| `resume.pdf` | Any | Downloadable resume |

---

## 🎯 Quick Start Commands

### Create All Folders
```bash
mkdir -p my-portfolio/{css,js,images/projects,assets/{icons,fonts}}
cd my-portfolio
```

### Create All Files
```bash
touch index.html README.md resume.pdf
touch css/style.css
touch js/data.js js/main.js
```

---

## 🔄 Update Priority

### 🔴 Critical (Must Update Before Launch)
1. ✅ `js/data.js` - All your personal data
2. ✅ `images/profile.jpg` - Your photo
3. ✅ `resume.pdf` - Your resume
4. ✅ Social links in `index.html`
5. ✅ Email address
6. ✅ Project images

### 🟡 Important (Should Update)
1. ⚠️ Meta tags in `index.html`
2. ⚠️ Open Graph images
3. ⚠️ Project URLs
4. ⚠️ Company logos

### 🟢 Optional (Nice to Have)
1. 💡 Custom favicon
2. 💡 Custom fonts
3. 💡 Additional animations
4. 💡 Blog section

---

## 📋 Content Checklist

### In `js/data.js`, update:
- [ ] `skillsData` - Your technologies
- [ ] `projectsData` - Your projects
  - [ ] titles
  - [ ] descriptions
  - [ ] tags
  - [ ] imageUrls
  - [ ] sourceUrls
  - [ ] liveUrls
- [ ] `experienceData` - Your work history
  - [ ] roles
  - [ ] companies
  - [ ] periods
  - [ ] descriptions
  - [ ] logoUrls
- [ ] `educationData` - Your education
  - [ ] institutions
  - [ ] degrees
  - [ ] periods
  - [ ] courses
- [ ] `certificationData` - Your certs
- [ ] `socialLinks` - Your profiles

### In `index.html`, update:
- [ ] Page title
- [ ] Meta description
- [ ] GitHub links (3 places)
- [ ] LinkedIn links (3 places)
- [ ] Email address
- [ ] Your name (header logo)
- [ ] Hero section name
- [ ] Hero section title
- [ ] Hero section description

### Add files:
- [ ] Profile image
- [ ] Resume PDF
- [ ] Project screenshots
- [ ] Social sharing images

---

## 🎨 Customization Points

### Colors (in `index.html`)
```javascript
colors: {
  primary: {
    DEFAULT: '#3b82f6',  // Main blue
    light: '#60a5fa',    // Light blue
    dark: '#2563eb',     // Dark blue
  }
}
```

### Fonts (in `index.html`)
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],  // Change 'Inter' to your font
}
```

### Background Pattern (in `css/style.css`)
```css
body {
  background-size: 30px 30px;  /* Change grid size */
}
```

---

## 🚨 Common Mistakes to Avoid

1. ❌ Forgetting to update placeholder URLs
2. ❌ Using wrong image paths
3. ❌ Not testing on mobile
4. ❌ Leaving default "yourusername" in links
5. ❌ Forgetting to add resume.pdf
6. ❌ Not optimizing images (use TinyPNG)
7. ❌ Skipping the TODO items in data.js

---

## 🔍 File Dependencies

```
index.html
    ↓ requires
    ├── css/style.css
    ├── js/data.js
    └── js/main.js
        ↓ uses
        └── data from data.js
```

**Load Order Matters!**
1. First: Tailwind CDN
2. Then: style.css
3. Then: data.js
4. Finally: main.js

---

## 📦 Deployment Checklist

Before deploying:
- [ ] All files created
- [ ] All content updated
- [ ] Images optimized
- [ ] Links tested
- [ ] Mobile tested
- [ ] Forms tested (if added)
- [ ] No console errors
- [ ] Lighthouse score checked

---

## 🛠️ Where to Make Changes

| What to Change | File | Line/Section |
|----------------|------|--------------|
| Your info | `js/data.js` | All data arrays |
| Colors | `index.html` | Tailwind config |
| Social links | `index.html` | Hero & footer |
| Animations | `css/style.css` | Animation section |
| Layout | `index.html` | HTML structure |
| Functionality | `js/main.js` | Functions |

---

## 💾 Backup Important Files

Always keep backups of:
1. `js/data.js` - Your content
2. `images/` folder - Your images
3. `resume.pdf` - Your resume

---

## 🎓 Learning Resources

- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **JavaScript**: [javascript.info](https://javascript.info)
- **Git**: [git-scm.com/doc](https://git-scm.com/doc)
- **Deployment**: See README.md

---

**Questions? Check README.md for detailed instructions!**