// Internationalization (i18n) - Uzbek, Russian, English

const translations = {
    uz: {
        'header-title': 'Virtual Fizika Laboratoriyalari',
        'header-subtitle': 'O\'zbekiston Milliy Universiteti',
        'nav-home': 'Bosh sahifa',
        'nav-categories': 'Kategoriyalar',
        'nav-glossary': 'Lug\'at',
        'nav-about': 'Fakultet haqida',
        'nav-bookmarks': 'Saqlangan',
        'hero-title': 'Virtual Fizika Laboratoriyalari Portali',
        'hero-subtitle': '150+ bepul interaktiv simulatsiya va tajribalar',
        'hero-description': 'O\'zbekiston Milliy Universiteti Fizika Fakulteti tomonidan taqdim etilgan ochiq ta\'lim platformasi. Talabalar, o\'qituvchilar va tadqiqotchilar uchun dunyodagi eng yaxshi virtual laboratoriyalar.',
        'search-placeholder': 'Laboratoriya qidirish...',
        'stat-labs': 'Laboratoriyalar',
        'stat-categories': 'Kategoriyalar',
        'stat-free': 'Bepul',
        'stat-access': 'Kirish',
        'categories-title': 'Fizika Sohalar',
        'featured-title': 'Mashhur Laboratoriyalar',
        'footer-about': 'Loyiha haqida',
        'footer-description': 'O\'zbekiston Milliy Universiteti Fizika Fakulteti tomonidan ishlab chiqilgan ochiq ta\'lim tashabbusi. Fizika ta\'limini interaktiv virtual tajribalar orqali yaxshilash maqsadida yaratilgan.',
        'footer-links': 'Foydali havolalar',
        'footer-contact': 'Aloqa',
        'difficulty-school': 'Maktab',
        'difficulty-undergraduate': 'Universitet',
        'difficulty-advanced': 'Ilg\'or',
        'launch-lab': 'Laboratoriyani ochish',
        'bookmark-add': 'Saqlash',
        'bookmark-remove': 'O\'chirish',
        'filter-all': 'Barchasi',
        'filter-school': 'Maktab',
        'filter-undergraduate': 'Universitet',
        'filter-advanced': 'Ilg\'or',
        'no-results': 'Natija topilmadi',
        'loading': 'Yuklanmoqda...'
    },
    ru: {
        'header-title': 'Виртуальные Физические Лаборатории',
        'header-subtitle': 'Национальный Университет Узбекистана',
        'nav-home': 'Главная',
        'nav-categories': 'Категории',
        'nav-glossary': 'Словарь',
        'nav-about': 'О факультете',
        'nav-bookmarks': 'Сохраненные',
        'hero-title': 'Портал Виртуальных Физических Лабораторий',
        'hero-subtitle': '150+ бесплатных интерактивных симуляций и экспериментов',
        'hero-description': 'Открытая образовательная платформа, представленная Физическим факультетом Национального университета Узбекистана. Лучшие виртуальные лаборатории мира для студентов, преподавателей и исследователей.',
        'search-placeholder': 'Поиск лаборатории...',
        'stat-labs': 'Лаборатории',
        'stat-categories': 'Категории',
        'stat-free': 'Бесплатно',
        'stat-access': 'Доступ',
        'categories-title': 'Области Физики',
        'featured-title': 'Популярные Лаборатории',
        'footer-about': 'О проекте',
        'footer-description': 'Инициатива открытого образования, разработанная Физическим факультетом Национального университета Узбекистана. Создана для улучшения физического образования через интерактивные виртуальные эксперименты.',
        'footer-links': 'Полезные ссылки',
        'footer-contact': 'Контакты',
        'difficulty-school': 'Школа',
        'difficulty-undergraduate': 'Университет',
        'difficulty-advanced': 'Продвинутый',
        'launch-lab': 'Открыть лабораторию',
        'bookmark-add': 'Сохранить',
        'bookmark-remove': 'Удалить',
        'filter-all': 'Все',
        'filter-school': 'Школа',
        'filter-undergraduate': 'Университет',
        'filter-advanced': 'Продвинутый',
        'no-results': 'Результаты не найдены',
        'loading': 'Загрузка...'
    },
    en: {
        'header-title': 'Virtual Physics Laboratories',
        'header-subtitle': 'National University of Uzbekistan',
        'nav-home': 'Home',
        'nav-categories': 'Categories',
        'nav-glossary': 'Glossary',
        'nav-about': 'About Faculty',
        'nav-bookmarks': 'Bookmarks',
        'hero-title': 'Virtual Physics Laboratories Portal',
        'hero-subtitle': '150+ free interactive simulations and experiments',
        'hero-description': 'Open educational platform presented by the Physics Faculty of the National University of Uzbekistan. The world\'s best virtual laboratories for students, teachers, and researchers.',
        'search-placeholder': 'Search laboratory...',
        'stat-labs': 'Laboratories',
        'stat-categories': 'Categories',
        'stat-free': 'Free',
        'stat-access': 'Access',
        'categories-title': 'Physics Fields',
        'featured-title': 'Featured Laboratories',
        'footer-about': 'About Project',
        'footer-description': 'Open education initiative developed by the Physics Faculty of the National University of Uzbekistan. Created to improve physics education through interactive virtual experiments.',
        'footer-links': 'Useful Links',
        'footer-contact': 'Contact',
        'difficulty-school': 'School',
        'difficulty-undergraduate': 'Undergraduate',
        'difficulty-advanced': 'Advanced',
        'launch-lab': 'Launch Laboratory',
        'bookmark-add': 'Bookmark',
        'bookmark-remove': 'Remove',
        'filter-all': 'All',
        'filter-school': 'School',
        'filter-undergraduate': 'Undergraduate',
        'filter-advanced': 'Advanced',
        'no-results': 'No results found',
        'loading': 'Loading...'
    }
};

let currentLang = localStorage.getItem('language') || 'uz';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageTranslations();
}

function t(key) {
    return translations[currentLang][key] || key;
}

function updatePageTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.value = currentLang;
        langSwitch.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            // Reload page to update all dynamic content including lab names
            window.location.reload();
        });
    }
    updatePageTranslations();
});
