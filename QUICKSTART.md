# ⚡ Quick Start Guide

Virtual Fizika Laboratoriyalari Portalini 5 daqiqada ishga tushiring!

## 🚀 Tezkor Boshlash

### 1. Fayllarni Yuklab Olish

```bash
# Git orqali
git clone https://github.com/yourusername/physics-virtual-labs.git
cd physics-virtual-labs

# Yoki ZIP faylni yuklab oling va ochib oling
```

### 2. Brauzerda Ochish

#### Usul 1: To'g'ridan-to'g'ri ochish
```bash
# index.html faylini ikki marta bosing
# Yoki brauzerga sudrab tashlang
```

#### Usul 2: Local Server (Tavsiya etiladi)
```bash
# Python bilan
python -m http.server 8080

# Node.js bilan
npx http-server . -p 8080

# PHP bilan
php -S localhost:8080
```

Keyin brauzerda oching: `http://localhost:8080`

### 3. Saytni Ko'ring! 🎉

Tayyor! Sayt ishlamoqda.

## 📱 Xususiyatlarni Sinab Ko'ring

### Dark Mode
Yuqori o'ng burchakdagi oy/quyosh ikonkasini bosing

### Til O'zgartirish
Yuqori o'ng burchakdagi til tanlagichdan tanlang:
- O'zbek
- Русский
- English

### Laboratoriya Qidirish
Bosh sahifadagi qidiruv maydoniga yozing

### Bookmark
Laboratoriya kartasidagi bookmark ikonkasini bosing

## 🌐 Online Deploy Qilish

### GitHub Pages (Bepul)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/physics-labs.git
git push -u origin main
```

Settings → Pages → Source: main branch

### Netlify (Bepul)
1. [netlify.com](https://netlify.com) ga kiring
2. Drag & drop qiling
3. Tayyor!

### Vercel (Bepul)
```bash
npx vercel
```

## 🎨 Sozlash

### Ranglarni O'zgartirish
`styles/main.css` faylini oching:
```css
:root {
    --primary-blue: #1e3a8a;  /* O'zgartiring */
    --secondary-blue: #3b82f6;
}
```

### Yangi Laboratoriya Qo'shish
`scripts/data.js` faylini oching va qo'shing:
```javascript
{
    id: 'my-lab',
    category: 'mechanics',
    difficulty: 'school',
    uz: { name: 'Mening Laboratoriyam', desc: 'Tavsif' },
    ru: { name: 'Моя Лаборатория', desc: 'Описание' },
    en: { name: 'My Laboratory', desc: 'Description' },
    url: 'https://example.com',
    embed: true
}
```

### Logo O'zgartirish
`index.html` da `<i class="fas fa-atom">` ni o'zgartiring

## 🐛 Muammolar?

### Sahifa ochilmayapti
- Barcha fayllar bir papkada ekanligini tekshiring
- Local server ishlatib ko'ring

### Laboratoriyalar ko'rinmayapti
- Browser console'ni oching (F12)
- JavaScript xatolarini tekshiring
- `scripts/data.js` faylini tekshiring

### Dark mode ishlamayapti
- Browser cache'ni tozalang (Ctrl+Shift+Delete)
- LocalStorage yoqilganligini tekshiring

## 📚 Keyingi Qadamlar

1. [README.md](README.md) - To'liq dokumentatsiya
2. [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy qilish
3. [CONTRIBUTING.md](CONTRIBUTING.md) - Hissa qo'shish

## 💡 Maslahatlar

- Mobile'da test qiling
- Dark mode'ni sinab ko'ring
- Bookmark funksiyasidan foydalaning
- Har bir kategoriyani ko'rib chiqing

## 🎯 Demo Laboratoriyalar

Quyidagi laboratoriyalarni sinab ko'ring:

1. **PhET Pendulum** - Klassik mexanika
2. **Falstad Circuit** - Elektr zanjirlar
3. **Ray Optics** - Optika
4. **Stellarium** - Astronomiya
5. **Molecular Workbench** - Termodinamika

## ✅ Checklist

- [ ] Sayt brauzerda ochildi
- [ ] Dark mode ishlayapti
- [ ] Til o'zgaradi
- [ ] Qidiruv ishlayapti
- [ ] Laboratoriyalar ochiladi
- [ ] Mobile'da ko'rindi
- [ ] Bookmark saqlandi

## 🎉 Tayyor!

Endi siz Virtual Fizika Laboratoriyalari Portalidan foydalanishingiz mumkin!

Savollar bo'lsa: physics@eduself.uz

---

**© 2026 EduSelf**
