# 🚀 physics.eduself.uz ga Deploy Qilish

## Tezkor Deploy Qo'llanmasi

Domain: **physics.eduself.uz**

---

## 📋 Bosqichma-bosqich Deploy

### 1️⃣ GitHub Repository Yaratish

```bash
# Loyiha papkasida
cd "Physics Vertual lab"

# Git init
git init
git add .
git commit -m "Initial commit: Virtual Physics Lab Portal"

# GitHub repository yaratish (GitHub.com da)
# Keyin:
git remote add origin https://github.com/[username]/physics-eduself-uz.git
git branch -M main
git push -u origin main
```

### 2️⃣ Netlify ga Deploy (Tavsiya etiladi)

#### A. Web Interface orqali

1. **Netlify.com ga kiring**
   - https://app.netlify.com

2. **"New site from Git" tugmasini bosing**

3. **GitHub repository ni tanlang**
   - physics-eduself-uz

4. **Build settings:**
   ```
   Build command: (bo'sh qoldiring)
   Publish directory: .
   ```

5. **"Deploy site" tugmasini bosing**

6. **Custom domain qo'shish:**
   - Site settings → Domain management
   - "Add custom domain"
   - Domain: `physics.eduself.uz`
   - "Verify" tugmasini bosing

#### B. Netlify CLI orqali

```bash
# Netlify CLI o'rnatish
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init

# Savollar:
# - Create & configure a new site: Yes
# - Team: [Sizning team]
# - Site name: physics-eduself-uz
# - Build command: (Enter - bo'sh)
# - Publish directory: . (nuqta)

# Production deploy
netlify deploy --prod

# Custom domain qo'shish
netlify domains:add physics.eduself.uz
```

### 3️⃣ DNS Sozlamalari

**eduself.uz DNS panelda:**

```
Record 1 (A Record):
  Type: A
  Name: physics
  Value: 75.2.60.5
  TTL: 3600

Record 2 (CNAME):
  Type: CNAME
  Name: www.physics
  Value: [your-site-name].netlify.app
  TTL: 3600
```

**Netlify paneldan olish:**
- Site settings → Domain management
- "physics.eduself.uz" ni qo'shganingizda
- Netlify sizga DNS sozlamalarni ko'rsatadi

### 4️⃣ SSL Certificate

Netlify avtomatik SSL sertifikat o'rnatadi:
- 1-2 daqiqa ichida
- Let's Encrypt (bepul)
- Avtomatik yangilanadi

### 5️⃣ Tekshirish

```bash
# DNS tekshirish
nslookup physics.eduself.uz

# Browser'da ochish
https://physics.eduself.uz
```

---

## 🎯 Vercel bilan Deploy (Alternativ)

### 1. Vercel CLI

```bash
# Vercel CLI o'rnatish
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production
vercel --prod

# Custom domain
# Vercel dashboard → Settings → Domains
# physics.eduself.uz ni qo'shing
```

### 2. DNS (Vercel uchun)

```
A Record:
  Name: physics
  Value: 76.76.21.21

CNAME:
  Name: www.physics
  Value: cname.vercel-dns.com
```

---

## 📊 Deploy Checklist

### Pre-Deploy
- ✅ Barcha fayllar commit qilindi
- ✅ Git repository yaratildi
- ✅ GitHub'ga push qilindi

### Netlify/Vercel
- ✅ Site yaratildi
- ✅ Deploy muvaffaqiyatli
- ✅ Custom domain qo'shildi
- ✅ DNS sozlamalari amalga oshirildi

### DNS & SSL
- ✅ A record qo'shildi
- ✅ CNAME record qo'shildi
- ✅ DNS propagation kutildi (1-2 soat)
- ✅ SSL certificate faol

### Testing
- ✅ https://physics.eduself.uz ochiladi
- ✅ https://www.physics.eduself.uz ochiladi
- ✅ HTTPS ishlayapti (qulf belgisi)
- ✅ Mobile'da test qilindi
- ✅ Barcha sahifalar ishlayapti

---

## 🔄 Yangilanishlar Deploy Qilish

### Har safar o'zgarish qilganingizda:

```bash
# O'zgarishlarni commit qiling
git add .
git commit -m "Update: yangi laboratoriya qo'shildi"
git push origin main
```

Netlify/Vercel avtomatik ravishda yangi versiyani deploy qiladi!

---

## 🌐 Final URLs

Deploy qilgandan keyin:

- **Production:** https://physics.eduself.uz
- **WWW:** https://www.physics.eduself.uz
- **Netlify:** https://[site-name].netlify.app
- **GitHub:** https://github.com/[username]/physics-eduself-uz

---

## 📱 Post-Deploy Tasks

### 1. Google Search Console

```
1. https://search.google.com/search-console
2. "Add property" → physics.eduself.uz
3. Verify ownership (DNS yoki HTML file)
4. Submit sitemap: https://physics.eduself.uz/sitemap.xml
```

### 2. Google Analytics (Optional)

```html
<!-- index.html ga qo'shing -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Social Media

- Facebook: https://physics.eduself.uz
- Twitter: https://physics.eduself.uz
- LinkedIn: https://physics.eduself.uz

---

## 🐛 Muammolar va Yechimlar

### Domain ochilmayapti?

```bash
# DNS tekshirish
nslookup physics.eduself.uz

# Agar javob yo'q bo'lsa:
# 1. DNS sozlamalarni qayta tekshiring
# 2. 1-2 soat kuting (propagation)
# 3. DNS cache tozalang: ipconfig /flushdns
```

### SSL xatosi?

```
1. 24 soat kuting
2. Netlify panelda: Domain settings → HTTPS → Renew certificate
3. DNS to'g'ri sozlanganligini tekshiring
```

### Deploy failed?

```bash
# Netlify logs tekshirish
netlify logs

# Yoki Netlify dashboard → Deploys → [latest] → Deploy log
```

---

## 📞 Support

### Netlify Support
- Community: https://answers.netlify.com
- Docs: https://docs.netlify.com

### DNS Support
- eduself.uz support team

### Project Support
- Email: physics@eduself.uz
- GitHub Issues: [repository]/issues

---

## ✅ Deploy Muvaffaqiyatli!

Tabriklaymiz! 🎉

Saytingiz endi jonli:
**https://physics.eduself.uz**

150+ virtual fizika laboratoriyalari endi barcha uchun ochiq!

---

**© 2026 EduSelf**  
*Virtual Fizika Laboratoriyalari Portali*
