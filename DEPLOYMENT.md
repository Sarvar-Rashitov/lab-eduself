# 🚀 Deployment Guide

Virtual Fizika Laboratoriyalari Portalini turli platformalarga joylashtirish bo'yicha qo'llanma.

## 📋 Talab Qilinadigan Narsalar

- Git
- GitHub account (GitHub Pages uchun)
- Netlify account (Netlify uchun)
- Vercel account (Vercel uchun)

## 🌐 GitHub Pages

### 1-Usul: GitHub Web Interface

1. GitHub'da yangi repository yarating
2. Barcha fayllarni repository'ga yuklang
3. Settings → Pages ga o'ting
4. Source: `main` branch tanlang
5. Save tugmasini bosing
6. 2-3 daqiqadan keyin saytingiz tayyor!

URL: `https://yourusername.github.io/repository-name`

### 2-Usul: Git Command Line

```bash
# Repository yaratish
git init
git add .
git commit -m "Initial commit: Physics Virtual Labs Portal"

# GitHub'ga push qilish
git remote add origin https://github.com/yourusername/physics-labs.git
git branch -M main
git push -u origin main

# GitHub Pages'ni yoqish
# Settings → Pages → Source: main branch
```

## 🎯 Netlify

### 1-Usul: Netlify Web Interface

1. [Netlify.com](https://netlify.com) ga kiring
2. "New site from Git" tugmasini bosing
3. GitHub repository'ni ulang
4. Build settings:
   - Build command: `echo 'No build required'`
   - Publish directory: `.`
5. "Deploy site" tugmasini bosing

### 2-Usul: Netlify CLI

```bash
# Netlify CLI o'rnatish
npm install -g netlify-cli

# Login qilish
netlify login

# Deploy qilish
netlify deploy --prod

# Yoki drag & drop
netlify deploy --dir=. --prod
```

### Custom Domain (Netlify)

1. Netlify dashboard → Domain settings
2. "Add custom domain" tugmasini bosing
3. Domain nomini kiriting: physics.eduself.uz
4. DNS sozlamalarini yangilang:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

## ⚡ Vercel

### 1-Usul: Vercel Web Interface

1. [Vercel.com](https://vercel.com) ga kiring
2. "New Project" tugmasini bosing
3. GitHub repository'ni import qiling
4. Deploy tugmasini bosing

### 2-Usul: Vercel CLI

```bash
# Vercel CLI o'rnatish
npm install -g vercel

# Login qilish
vercel login

# Deploy qilish
vercel

# Production deploy
vercel --prod
```

## 🔧 Custom Domain Setup

### Netlify Custom Domain

```bash
# Netlify CLI orqali
netlify domains:add physics.eduself.uz
```

DNS Settings:
```
A Record:
  Host: @
  Points to: 75.2.60.5

CNAME Record:
  Host: www
  Points to: your-site.netlify.app
```

### Vercel Custom Domain

1. Vercel Dashboard → Project → Settings → Domains
2. Domain nomini qo'shing
3. DNS sozlamalarini yangilang:
```
A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

## 🔒 SSL Certificate

Netlify va Vercel avtomatik ravishda bepul SSL sertifikat (Let's Encrypt) taqdim etadi.

## 🌍 Environment Variables

Agar kerak bo'lsa, environment variables qo'shish:

### Netlify
```bash
netlify env:set VARIABLE_NAME value
```

### Vercel
```bash
vercel env add VARIABLE_NAME
```

## 📊 Analytics

### Netlify Analytics

1. Site settings → Analytics
2. Enable Netlify Analytics
3. $9/month

### Vercel Analytics

1. Project settings → Analytics
2. Enable Analytics
3. Bepul (hobby plan)

### Google Analytics

`index.html` ga qo'shing:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Continuous Deployment

GitHub'ga har push qilganingizda avtomatik deploy bo'ladi:

```bash
git add .
git commit -m "Update: yangi laboratoriya qo'shildi"
git push origin main
```

Netlify va Vercel avtomatik ravishda yangi versiyani deploy qiladi.

## 🐛 Troubleshooting

### 404 Error

`netlify.toml` yoki `vercel.json` fayllarini tekshiring.

### Build Failed

```bash
# Local test
npx http-server . -p 8080
```

### Slow Loading

1. Rasmlarni optimize qiling
2. CDN'dan foydalaning
3. Lazy loading yoqing

## 📱 Mobile Testing

Deploy qilgandan keyin mobile qurilmalarda test qiling:

- iOS Safari
- Android Chrome
- Responsive mode (Chrome DevTools)

## ✅ Deployment Checklist

- [ ] Barcha fayllar commit qilindi
- [ ] README.md to'ldirildi
- [ ] Meta tags to'g'ri
- [ ] Favicon qo'shildi
- [ ] Mobile responsive
- [ ] Dark mode ishlaydi
- [ ] Barcha havolalar ishlaydi
- [ ] SEO optimizatsiya qilindi
- [ ] Analytics qo'shildi
- [ ] Custom domain sozlandi
- [ ] SSL certificate faol

## 🎉 Success!

Saytingiz tayyor! Quyidagi URL'larda mavjud:

- GitHub Pages: `https://yourusername.github.io/physics-labs`
- Netlify: `https://physics-labs.netlify.app`
- Vercel: `https://physics-labs.vercel.app`
- Custom: `https://physics.eduself.uz`

---

**© 2026 EduSelf**
