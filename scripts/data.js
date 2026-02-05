// Virtual Physics Lab - Clean and Working Labs Only
// All labs tested and verified for iframe compatibility

const categories = [
    {
        id: 'mechanics',
        icon: 'fa-cog',
        color: 'from-blue-500 to-blue-700',
        uz: 'Klassik Mexanika',
        ru: 'Классическая Механика',
        en: 'Classical Mechanics'
    },
    {
        id: 'electromagnetism',
        icon: 'fa-bolt',
        color: 'from-yellow-500 to-orange-600',
        uz: 'Elektromagnetizm',
        ru: 'Электромагнетизм',
        en: 'Electromagnetism'
    },
    {
        id: 'optics',
        icon: 'fa-eye',
        color: 'from-purple-500 to-pink-600',
        uz: 'Optika va To\'lqinlar',
        ru: 'Оптика и Волны',
        en: 'Optics and Waves'
    },
    {
        id: 'thermodynamics',
        icon: 'fa-fire',
        color: 'from-red-500 to-red-700',
        uz: 'Termodinamika',
        ru: 'Термодинамика',
        en: 'Thermodynamics'
    },
    {
        id: 'quantum',
        icon: 'fa-atom',
        color: 'from-indigo-500 to-purple-700',
        uz: 'Kvant Fizikasi',
        ru: 'Квантовая Физика',
        en: 'Quantum Physics'
    },
    {
        id: 'nuclear',
        icon: 'fa-radiation',
        color: 'from-green-500 to-teal-600',
        uz: 'Yadro Fizikasi',
        ru: 'Ядерная Физика',
        en: 'Nuclear Physics'
    },
    {
        id: 'astrophysics',
        icon: 'fa-star',
        color: 'from-cyan-500 to-blue-600',
        uz: 'Astrofizika',
        ru: 'Астрофизика',
        en: 'Astrophysics'
    },
    {
        id: 'particle',
        icon: 'fa-circle-notch',
        color: 'from-violet-500 to-purple-600',
        uz: 'Zarrachalar Fizikasi',
        ru: 'Физика Частиц',
        en: 'Particle Physics'
    },
    {
        id: 'computational',
        icon: 'fa-laptop-code',
        color: 'from-emerald-500 to-green-600',
        uz: 'Hisoblash Fizikasi',
        ru: 'Вычислительная Физика',
        en: 'Computational Physics'
    },
    {
        id: 'experimental',
        icon: 'fa-flask',
        color: 'from-orange-500 to-red-600',
        uz: 'Eksperimental Fizika',
        ru: 'Экспериментальная Физика',
        en: 'Experimental Physics'
    },
    {
        id: 'biophysics',
        icon: 'fa-dna',
        color: 'from-lime-500 to-green-600',
        uz: 'Biofizika',
        ru: 'Биофизика',
        en: 'Biophysics'
    },
    {
        id: 'labs3d',
        icon: 'fa-cube',
        color: 'from-pink-500 to-rose-600',
        uz: '3D Virtual Laboratoriyalar',
        ru: '3D Виртуальные Лаборатории',
        en: '3D Physics Laboratories'
    }
];

const laboratories = [
    // ========== FALSTAD SIMULATIONS (Verified Working) ==========
    {
        id: 'falstad-circuit',
        category: 'electromagnetism',
        difficulty: 'undergraduate',
        uz: { name: 'Falstad Zanjir Simulatori', desc: 'Elektr zanjirlar simulatori' },
        ru: { name: 'Falstad Симулятор Цепей', desc: 'Симулятор электрических цепей' },
        en: { name: 'Falstad Circuit Simulator', desc: 'Electronic circuit simulator' },
        url: 'https://www.falstad.com/circuit/circuitjs.html',
        embed: true,
        featured: true
    },
    {
        id: 'falstad-ripple',
        category: 'optics',
        difficulty: 'school',
        uz: { name: 'Falstad To\'lqin Tanki', desc: 'Suv to\'lqinlari simulatsiyasi' },
        ru: { name: 'Falstad Волновой Резервуар', desc: 'Симуляция водных волн' },
        en: { name: 'Falstad Ripple Tank', desc: 'Water waves simulation' },
        url: 'https://www.falstad.com/ripple/',
        embed: true,
        featured: true
    },
    {
        id: 'falstad-emwave',
        category: 'electromagnetism',
        difficulty: 'undergraduate',
        uz: { name: 'Falstad EM To\'lqinlar', desc: 'Elektromagnit to\'lqinlar' },
        ru: { name: 'Falstad ЭМ Волны', desc: 'Электромагнитные волны' },
        en: { name: 'Falstad EM Waves', desc: 'Electromagnetic waves' },
        url: 'https://www.falstad.com/emwave/',
        embed: true
    },
    {
        id: 'falstad-vector',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'Falstad Vektor Maydonlari', desc: 'Vektor maydonlari vizualizatsiyasi' },
        ru: { name: 'Falstad Векторные Поля', desc: 'Визуализация векторных полей' },
        en: { name: 'Falstad Vector Fields', desc: 'Vector fields visualization' },
        url: 'https://www.falstad.com/vector/',
        embed: true
    },
    {
        id: 'falstad-vector3d',
        category: 'mechanics',
        difficulty: 'undergraduate',
        uz: { name: 'Falstad 3D Vektor', desc: '3D vektor maydonlari' },
        ru: { name: 'Falstad 3D Вектор', desc: '3D векторные поля' },
        en: { name: 'Falstad 3D Vector', desc: '3D vector fields' },
        url: 'https://www.falstad.com/vector3d/',
        embed: true
    },
    {
        id: 'falstad-qmatom',
        category: 'quantum',
        difficulty: 'advanced',
        uz: { name: 'Falstad Kvant Atom', desc: 'Kvant atom modeli' },
        ru: { name: 'Falstad Квантовый Атом', desc: 'Модель квантового атома' },
        en: { name: 'Falstad Quantum Atom', desc: 'Quantum atom model' },
        url: 'https://www.falstad.com/qmatom/',
        embed: true
    },
    {
        id: 'falstad-qmwave',
        category: 'quantum',
        difficulty: 'advanced',
        uz: { name: 'Falstad Kvant To\'lqinlar', desc: 'Kvant to\'lqin funksiyalari' },
        ru: { name: 'Falstad Квантовые Волны', desc: 'Квантовые волновые функции' },
        en: { name: 'Falstad Quantum Waves', desc: 'Quantum wave functions' },
        url: 'https://www.falstad.com/qm1d/',
        embed: true
    },

    // ========== MYPHYSICSLAB (Verified Working) ==========
    {
        id: 'myphysicslab-pendulum',
        category: 'mechanics',
        difficulty: 'undergraduate',
        uz: { name: 'MyPhysicsLab Mayatnik', desc: 'Tebranma harakat simulatsiyasi' },
        ru: { name: 'MyPhysicsLab Маятник', desc: 'Симуляция колебательного движения' },
        en: { name: 'MyPhysicsLab Pendulum', desc: 'Oscillatory motion simulation' },
        url: 'https://www.myphysicslab.com/pendulum/pendulum-en.html',
        embed: true,
        featured: true
    },
    {
        id: 'myphysicslab-double-pendulum',
        category: 'mechanics',
        difficulty: 'advanced',
        uz: { name: 'MyPhysicsLab Qo\'sh Mayatnik', desc: 'Xaotik harakat' },
        ru: { name: 'MyPhysicsLab Двойной Маятник', desc: 'Хаотическое движение' },
        en: { name: 'MyPhysicsLab Double Pendulum', desc: 'Chaotic motion' },
        url: 'https://www.myphysicslab.com/pendulum/double-pendulum-en.html',
        embed: true,
        featured: true
    },
    {
        id: 'myphysicslab-spring',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'MyPhysicsLab Prujina', desc: 'Prujina tebranishlari' },
        ru: { name: 'MyPhysicsLab Пружина', desc: 'Колебания пружины' },
        en: { name: 'MyPhysicsLab Spring', desc: 'Spring oscillations' },
        url: 'https://www.myphysicslab.com/springs/single-spring-en.html',
        embed: true
    },
    {
        id: 'myphysicslab-collision',
        category: 'mechanics',
        difficulty: 'undergraduate',
        uz: { name: 'MyPhysicsLab To\'qnashuvlar', desc: 'Elastik to\'qnashuvlar' },
        ru: { name: 'MyPhysicsLab Столкновения', desc: 'Упругие столкновения' },
        en: { name: 'MyPhysicsLab Collisions', desc: 'Elastic collisions' },
        url: 'https://www.myphysicslab.com/engine2D/collision-en.html',
        embed: true
    },
    {
        id: 'myphysicslab-roller',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'MyPhysicsLab Roller Coaster', desc: 'Energiya saqlanishi' },
        ru: { name: 'MyPhysicsLab Американские Горки', desc: 'Сохранение энергии' },
        en: { name: 'MyPhysicsLab Roller Coaster', desc: 'Energy conservation' },
        url: 'https://www.myphysicslab.com/roller/roller-single-en.html',
        embed: true
    },

    // ========== WALTER FENDT (Verified Working) ==========
    {
        id: 'fendt-projectile',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'Fendt Proyektil Harakati', desc: 'Proyektil harakati simulatsiyasi' },
        ru: { name: 'Fendt Движение Снаряда', desc: 'Симуляция движения снаряда' },
        en: { name: 'Fendt Projectile Motion', desc: 'Projectile motion simulation' },
        url: 'https://www.walter-fendt.de/html5/phen/projectile_en.htm',
        embed: true,
        featured: true
    },
    {
        id: 'fendt-newton',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'Fendt Nyuton Qonunlari', desc: 'Nyuton qonunlari simulatsiyasi' },
        ru: { name: 'Fendt Законы Ньютона', desc: 'Симуляция законов Ньютона' },
        en: { name: 'Fendt Newton\'s Laws', desc: 'Newton\'s laws simulation' },
        url: 'https://www.walter-fendt.de/html5/phen/n2law_en.htm',
        embed: true
    },
    {
        id: 'fendt-pendulum',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'Fendt Mayatnik', desc: 'Matematik mayatnik' },
        ru: { name: 'Fendt Маятник', desc: 'Математический маятник' },
        en: { name: 'Fendt Pendulum', desc: 'Mathematical pendulum' },
        url: 'https://www.walter-fendt.de/html5/phen/pendulum_en.htm',
        embed: true
    },
    {
        id: 'fendt-doppler',
        category: 'optics',
        difficulty: 'undergraduate',
        uz: { name: 'Fendt Doppler Effekti', desc: 'Doppler effekti simulatsiyasi' },
        ru: { name: 'Fendt Эффект Доплера', desc: 'Симуляция эффекта Доплера' },
        en: { name: 'Fendt Doppler Effect', desc: 'Doppler effect simulation' },
        url: 'https://www.walter-fendt.de/html5/phen/dopplereff_en.htm',
        embed: true
    },
    {
        id: 'fendt-refraction',
        category: 'optics',
        difficulty: 'school',
        uz: { name: 'Fendt Sinish', desc: 'Yorug\'lik sinishi' },
        ru: { name: 'Fendt Преломление', desc: 'Преломление света' },
        en: { name: 'Fendt Refraction', desc: 'Light refraction' },
        url: 'https://www.walter-fendt.de/html5/phen/refraction_en.htm',
        embed: true
    },
    {
        id: 'fendt-lens',
        category: 'optics',
        difficulty: 'school',
        uz: { name: 'Fendt Linzalar', desc: 'Linzalar va tasvir' },
        ru: { name: 'Fendt Линзы', desc: 'Линзы и изображение' },
        en: { name: 'Fendt Lenses', desc: 'Lenses and image' },
        url: 'https://www.walter-fendt.de/html5/phen/lens_en.htm',
        embed: true
    },
    {
        id: 'fendt-transformer',
        category: 'electromagnetism',
        difficulty: 'undergraduate',
        uz: { name: 'Fendt Transformator', desc: 'Transformator ishlashi' },
        ru: { name: 'Fendt Трансформатор', desc: 'Работа трансформатора' },
        en: { name: 'Fendt Transformer', desc: 'Transformer operation' },
        url: 'https://www.walter-fendt.de/html5/phen/transformer_en.htm',
        embed: true
    },
    {
        id: 'fendt-generator',
        category: 'electromagnetism',
        difficulty: 'undergraduate',
        uz: { name: 'Fendt Generator', desc: 'Elektr generatori' },
        ru: { name: 'Fendt Генератор', desc: 'Электрический генератор' },
        en: { name: 'Fendt Generator', desc: 'Electric generator' },
        url: 'https://www.walter-fendt.de/html5/phen/generator_en.htm',
        embed: true
    },
    {
        id: 'fendt-gaslaw',
        category: 'thermodynamics',
        difficulty: 'undergraduate',
        uz: { name: 'Fendt Gaz Qonunlari', desc: 'Ideal gaz qonunlari' },
        ru: { name: 'Fendt Газовые Законы', desc: 'Законы идеального газа' },
        en: { name: 'Fendt Gas Laws', desc: 'Ideal gas laws' },
        url: 'https://www.walter-fendt.de/html5/phen/gaslaw_en.htm',
        embed: true
    },

    // ========== MODERN SIMULATORS (Verified Working) ==========
    {
        id: 'ray-optics',
        category: 'optics',
        difficulty: 'undergraduate',
        uz: { name: 'Ray Optics Simulator', desc: 'Nur optikasi simulatori' },
        ru: { name: 'Ray Optics Simulator', desc: 'Симулятор лучевой оптики' },
        en: { name: 'Ray Optics Simulator', desc: 'Ray optics simulator' },
        url: 'https://ricktu288.github.io/ray-optics/',
        embed: true,
        featured: true
    },
    {
        id: 'dcaclab',
        category: 'electromagnetism',
        difficulty: 'undergraduate',
        uz: { name: 'DCAC Lab', desc: 'DC va AC zanjirlar laboratoriyasi' },
        ru: { name: 'DCAC Lab', desc: 'Лаборатория DC и AC цепей' },
        en: { name: 'DCAC Lab', desc: 'DC and AC circuits lab' },
        url: 'https://dcaclab.com/',
        embed: true,
        featured: true
    },
    {
        id: 'everycircuit',
        category: 'electromagnetism',
        difficulty: 'undergraduate',
        uz: { name: 'EveryCircuit', desc: 'Real vaqtda zanjir tahlili' },
        ru: { name: 'EveryCircuit', desc: 'Анализ цепей в реальном времени' },
        en: { name: 'EveryCircuit', desc: 'Real-time circuit analysis' },
        url: 'https://everycircuit.com/app',
        embed: true,
        featured: true
    },
    {
        id: 'molecular-workbench',
        category: 'thermodynamics',
        difficulty: 'undergraduate',
        uz: { name: 'Molecular Workbench', desc: 'Molekulyar dinamika' },
        ru: { name: 'Molecular Workbench', desc: 'Молекулярная динамика' },
        en: { name: 'Molecular Workbench', desc: 'Molecular dynamics' },
        url: 'https://mw.concord.org/',
        embed: true
    },
    {
        id: 'nuclear-reactor-sim',
        category: 'nuclear',
        difficulty: 'advanced',
        uz: { name: 'Yadro Reaktori Simulatori', desc: 'Yadro reaktori boshqaruvi' },
        ru: { name: 'Симулятор Ядерного Реактора', desc: 'Управление ядерным реактором' },
        en: { name: 'Nuclear Reactor Simulator', desc: 'Nuclear reactor control' },
        url: 'http://www.reactorlab.net/reactor-lab-1/',
        embed: true,
        featured: true
    },

    // ========== EDUCATIONAL PLATFORMS (Open in new tab) ==========
    {
        id: 'ck12-physics',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'CK-12 Fizika Simulatsiyalari', desc: 'Interaktiv fizika mashqlari' },
        ru: { name: 'CK-12 Физические Симуляции', desc: 'Интерактивные упражнения по физике' },
        en: { name: 'CK-12 Physics Simulations', desc: 'Interactive physics exercises' },
        url: 'https://interactives.ck12.org/simulations/physics.html',
        embed: false,
        featured: true
    },
    {
        id: 'osp-compadre',
        category: 'computational',
        difficulty: 'advanced',
        uz: { name: 'Open Source Physics', desc: 'Java asosidagi simulatsiyalar' },
        ru: { name: 'Open Source Physics', desc: 'Симуляции на основе Java' },
        en: { name: 'Open Source Physics', desc: 'Java-based simulations' },
        url: 'https://www.compadre.org/osp/',
        embed: false,
        featured: true
    },
    {
        id: 'physics-aviary',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'Physics Aviary', desc: 'Interaktiv fizika mashqlari' },
        ru: { name: 'Physics Aviary', desc: 'Интерактивные упражнения по физике' },
        en: { name: 'Physics Aviary', desc: 'Interactive physics exercises' },
        url: 'https://www.thephysicsaviary.com/',
        embed: false
    },
    {
        id: 'olabs-india',
        category: 'experimental',
        difficulty: 'school',
        uz: { name: 'OLabs India', desc: 'Hindiston virtual laboratoriyalari' },
        ru: { name: 'OLabs India', desc: 'Виртуальные лаборатории Индии' },
        en: { name: 'OLabs India', desc: 'India virtual laboratories' },
        url: 'https://www.olabs.edu.in/',
        embed: false
    },
    {
        id: 'praxilabs',
        category: 'labs3d',
        difficulty: 'undergraduate',
        uz: { name: 'PraxiLabs', desc: '3D virtual laboratoriyalar' },
        ru: { name: 'PraxiLabs', desc: '3D виртуальные лаборатории' },
        en: { name: 'PraxiLabs', desc: '3D virtual laboratories' },
        url: 'https://praxilabs.com/',
        embed: false
    },
    {
        id: 'vlab-iit',
        category: 'experimental',
        difficulty: 'undergraduate',
        uz: { name: 'Virtual Labs IIT', desc: 'IIT virtual laboratoriyalari' },
        ru: { name: 'Virtual Labs IIT', desc: 'Виртуальные лаборатории IIT' },
        en: { name: 'Virtual Labs IIT', desc: 'IIT virtual laboratories' },
        url: 'https://www.vlab.co.in/',
        embed: false
    },
    {
        id: 'algodoo',
        category: 'mechanics',
        difficulty: 'school',
        uz: { name: 'Algodoo Physics Sandbox', desc: '2D fizika simulyatori' },
        ru: { name: 'Algodoo Physics Sandbox', desc: '2D физический симулятор' },
        en: { name: 'Algodoo Physics Sandbox', desc: '2D physics simulator' },
        url: 'https://www.algodoo.com/',
        embed: false,
        featured: true
    }
];

// Note: All labs are tested and verified
// Labs with embed: true work in iframe
// Labs with embed: false open in new tab
