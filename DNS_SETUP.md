# 🌐 DNS Sozlamalari - physics.eduself.uz

Domain: **physics.eduself.uz**

## 📋 Netlify uchun DNS Sozlamalari

### 1. A Record (Root Domain)

```
Type: A
Name: physics
Host: physics.eduself.uz
Value: 75.2.60.5
TTL: 3600 (yoki Auto)
```

### 2. CNAME Record (WWW)

```
Type: CNAME
Name: www.physics
Host: www.physics.eduself.uz
Value: [your-site-name].netlify.app
TTL: 3600 (yoki Auto)
```

**Misol:**
```
Type: CNAME
Name: www.physics
Value: physics-virtual-labs.netlify.app
```

## 📋 Vercel uchun DNS Sozlamalari

### 1. A Record

```
Type: A
Name: physics
Value: 76.76.21.21
TTL: 3600
```

### 2. CNAME Record

```
Type: CNAME
Name: www.physics
Value: cname.vercel-dns.com
TTL: 3600
```

## 🔧 DNS Provider Sozlamalari

### eduself.uz DNS Panel

1. eduself.uz DNS panelga kiring
2. "DNS Records" yoki "DNS Management" bo'limiga o'ting
3. Yangi record qo'shing:

#### Netlify uchun:
```
Record 1:
  Type: A
  Name: physics
  Value: 75.2.60.5
  
Record 2:
  Type: CNAME
  Name: www.physics
  Value: [your-site].netlify.app
```

#### Vercel uchun:
```
Record 1:
  Type: A
  Name: physics
  Value: 76.76.21.21
  
Record 2:
  Type: CNAME
  Name: www.physics
  Value: cname.vercel-dns.com
```

## ✅ Tekshirish

### DNS Propagation Tekshirish

```bash
# Windows
nslookup physics.eduself.uz

# Linux/Mac
dig physics.eduself.uz

# Online tool
https://dnschecker.org
```

### Kutish Vaqti

- DNS o'zgarishlar: 5-10 daqiqa (tez)
- To'liq propagation: 24-48 soat (maksimal)
- Odatda: 1-2 soat ichida ishlaydi

## 🔒 SSL Certificate

### Netlify

1. Domain qo'shilgandan keyin
2. Netlify avtomatik SSL sertifikat o'rnatadi
3. 1-2 daqiqa ichida HTTPS faol bo'ladi

### Vercel

1. Domain qo'shilgandan keyin
2. Vercel avtomatik SSL beradi
3. Bir necha daqiqa ichida tayyor

## 🌍 Subdomain Sozlamalari

Agar boshqa subdomain kerak bo'lsa:

### labs.physics.eduself.uz

```
Type: CNAME
Name: labs.physics
Value: [your-site].netlify.app
```

### demo.physics.eduself.uz

```
Type: CNAME
Name: demo.physics
Value: [your-site].netlify.app
```

## 📊 DNS Records Jadvali

| Type | Name | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | physics | 75.2.60.5 | 3600 | Root domain (Netlify) |
| CNAME | www.physics | [site].netlify.app | 3600 | WWW redirect |
| TXT | physics | netlify-verification=... | 3600 | Domain verification |

## 🐛 Troubleshooting

### Domain ishlamayapti?

1. **DNS tekshirish:**
   ```bash
   nslookup physics.eduself.uz
   ```

2. **Netlify/Vercel panelda tekshirish:**
   - Domain settings
   - DNS configuration
   - SSL certificate status

3. **Cache tozalash:**
   ```bash
   ipconfig /flushdns  # Windows
   sudo dscacheutil -flushcache  # Mac
   ```

### SSL xatosi?

1. 24 soat kuting (DNS propagation)
2. Netlify/Vercel panelda "Renew certificate"
3. Domain to'g'ri sozlanganligini tekshiring

### WWW ishlamayapti?

CNAME record to'g'ri sozlanganligini tekshiring:
```
www.physics.eduself.uz → [your-site].netlify.app
```

## 📞 Yordam

DNS sozlamalarda muammo bo'lsa:

1. **eduself.uz support:** DNS provider bilan bog'laning
2. **Netlify support:** https://answers.netlify.com
3. **Vercel support:** https://vercel.com/support

## ✅ Tayyor!

DNS sozlamalari to'g'ri amalga oshirilgandan keyin:

- ✅ https://physics.eduself.uz - Asosiy sayt
- ✅ https://www.physics.eduself.uz - WWW versiya
- ✅ SSL certificate faol
- ✅ HTTPS redirect avtomatik

---

**© 2026 EduSelf**
