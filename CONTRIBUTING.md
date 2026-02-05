# 🤝 Loyihaga Hissa Qo'shish

EduSelf Virtual Laboratoriyalar Portaliga hissa qo'shganingiz uchun rahmat!

## 📋 Hissa Qo'shish Yo'llari

### 1. Yangi Laboratoriya Qo'shish

Yangi virtual laboratoriya qo'shish uchun:

1. `scripts/data.js` yoki `scripts/labs-complete.js` faylini oching
2. Quyidagi formatda yangi laboratoriya qo'shing:

```javascript
{
    id: 'unique-lab-id',
    category: 'mechanics', // yoki boshqa kategoriya
    difficulty: 'school', // school, undergraduate, advanced
    uz: { 
        name: 'Laboratoriya Nomi', 
        desc: 'Qisqa tavsif' 
    },
    ru: { 
        name: 'Название Лаборатории', 
        desc: 'Краткое описание' 
    },
    en: { 
        name: 'Laboratory Name', 
        desc: 'Short description' 
    },
    url: 'https://example.com/lab',
    embed: true, // yoki false
    featured: false // mashhur laboratoriya bo'lsa true
}
```

### 2. Tarjimalarni Yaxshilash

Tarjimalarni yaxshilash uchun `scripts/i18n.js` faylini tahrirlang:

```javascript
const translations = {
    uz: { 'key': 'O\'zbek tarjima' },
    ru: { 'key': 'Русский перевод' },
    en: { 'key': 'English translation' }
};
```

### 3. Dizaynni Yaxshilash

CSS o'zgartirishlar uchun `styles/main.css` faylini tahrirlang.

### 4. Yangi Xususiyat Qo'shish

JavaScript funksiyalari uchun `scripts/main.js` faylini tahrirlang.

## 🐛 Xatolarni Xabar Qilish

Xato topilsa:

1. GitHub Issues bo'limida yangi issue yarating
2. Xatoning batafsil tavsifini bering
3. Qayta ishlab chiqarish qadamlarini ko'rsating
4. Screenshot qo'shing (agar kerak bo'lsa)

## 📝 Pull Request Qoidalari

1. Fork qiling va yangi branch yarating
2. O'zgarishlarni amalga oshiring
3. Testdan o'tkazing
4. Commit message aniq bo'lsin
5. Pull Request yarating

### Commit Message Formati

```
feat: yangi xususiyat qo'shildi
fix: xato tuzatildi
docs: dokumentatsiya yangilandi
style: dizayn o'zgartirildi
refactor: kod refaktoring qilindi
```

## ✅ Kod Standartlari

- HTML5 semantik teglardan foydalaning
- CSS class nomlari aniq va tushunarli bo'lsin
- JavaScript ES6+ sintaksisidan foydalaning
- Kodni izohlar bilan ta'minlang
- Responsive dizaynni ta'minlang

## 🧪 Test Qilish

O'zgarishlarni quyidagi brauzerlarda test qiling:

- Chrome (oxirgi versiya)
- Firefox (oxirgi versiya)
- Safari (oxirgi versiya)
- Edge (oxirgi versiya)

Mobile qurilmalarda ham test qiling:

- iOS Safari
- Android Chrome

## 📞 Aloqa

Savollar bo'lsa:

- Email: physics@eduself.uz
- GitHub Issues: [Issues sahifasi]

## 🙏 Minnatdorchilik

Har bir hissa qo'shgan kishiga minnatdorchilik bildiramiz!

---

**© 2026 EduSelf**
