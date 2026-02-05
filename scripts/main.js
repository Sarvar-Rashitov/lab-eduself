// Main JavaScript for Physics Lab Portal

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Bookmarks Management
class BookmarkManager {
    constructor() {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        this.updateCount();
    }

    add(labId) {
        if (!this.bookmarks.includes(labId)) {
            this.bookmarks.push(labId);
            this.save();
            this.showToast(t('bookmark-add'));
        }
    }

    remove(labId) {
        this.bookmarks = this.bookmarks.filter(id => id !== labId);
        this.save();
        this.showToast(t('bookmark-remove'));
    }

    toggle(labId) {
        if (this.has(labId)) {
            this.remove(labId);
        } else {
            this.add(labId);
        }
        return this.has(labId);
    }

    has(labId) {
        return this.bookmarks.includes(labId);
    }

    save() {
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        this.updateCount();
    }

    updateCount() {
        const countEl = document.getElementById('bookmarkCount');
        if (countEl) {
            countEl.textContent = this.bookmarks.length;
        }
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

const bookmarkManager = new BookmarkManager();

// Render Categories
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    grid.innerHTML = categories.map((cat, index) => `
        <a href="category.html?id=${cat.id}" class="category-card" style="animation-delay: ${index * 0.1}s">
            <div class="category-icon" style="background: linear-gradient(135deg, ${cat.color.replace('from-', '').replace('to-', ', ')})">
                <i class="fas ${cat.icon}"></i>
            </div>
            <h4 class="text-xl font-bold text-center text-white mb-2">
                ${cat[currentLang]}
            </h4>
            <p class="text-center text-white/80 text-lg font-semibold">
                ${laboratories.filter(lab => lab.category === cat.id).length} ${t('stat-labs')}
            </p>
        </a>
    `).join('');
}

// Render Featured Labs
function renderFeaturedLabs() {
    const container = document.getElementById('featuredLabs');
    if (!container) return;

    const featured = laboratories.filter(lab => lab.featured);
    
    container.innerHTML = featured.map(lab => createLabCard(lab)).join('');
}

// Create Lab Card
function createLabCard(lab) {
    const isBookmarked = bookmarkManager.has(lab.id);
    const category = categories.find(c => c.id === lab.category);
    
    return `
        <div class="lab-card relative">
            <button onclick="toggleBookmark('${lab.id}')" class="bookmark-btn ${isBookmarked ? 'active' : ''}">
                <i class="fas fa-bookmark text-xl"></i>
            </button>
            <div class="lab-header">
                <div class="category-icon mx-auto mb-4">
                    <i class="fas ${category.icon}"></i>
                </div>
                <h4 class="text-2xl font-bold text-center relative z-10">${lab[currentLang].name}</h4>
            </div>
            <div class="lab-body">
                <p class="text-gray-800 dark:text-gray-300 mb-4 text-center font-medium">${lab[currentLang].desc}</p>
                <div class="flex flex-wrap justify-center gap-2 mb-4">
                    <span class="lab-badge badge-${lab.difficulty}">
                        ${t('difficulty-' + lab.difficulty)}
                    </span>
                    <span class="lab-badge" style="background: ${category.color}; color: white;">
                        <i class="fas ${category.icon} mr-1"></i>${category[currentLang]}
                    </span>
                </div>
                <a href="lab.html?id=${lab.id}" class="launch-btn">
                    <i class="fas fa-rocket mr-2"></i>${t('launch-lab')}
                </a>
            </div>
        </div>
    `;
}

// Toggle Bookmark
function toggleBookmark(labId) {
    bookmarkManager.toggle(labId);
    // Refresh the page content
    if (typeof renderFeaturedLabs === 'function') renderFeaturedLabs();
    if (typeof renderAllLabs === 'function') renderAllLabs();
}

// Search Functionality
const heroSearch = document.getElementById('heroSearch');
if (heroSearch) {
    heroSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) return;

        const results = laboratories.filter(lab => 
            lab[currentLang].name.toLowerCase().includes(query) ||
            lab[currentLang].desc.toLowerCase().includes(query)
        );

        // Store results and redirect to search page
        sessionStorage.setItem('searchResults', JSON.stringify(results));
        sessionStorage.setItem('searchQuery', query);
    });

    heroSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            window.location.href = 'search.html';
        }
    });
}

// Lazy Loading for Iframes
function setupLazyLoading() {
    const iframes = document.querySelectorAll('iframe[data-src]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.dataset.src;
                iframe.removeAttribute('data-src');
                observer.unobserve(iframe);
            }
        });
    });

    iframes.forEach(iframe => observer.observe(iframe));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure currentLang is loaded from localStorage
    currentLang = localStorage.getItem('language') || 'uz';
    
    renderCategories();
    renderFeaturedLabs();
    renderAllLabsPreview();
    setupLazyLoading();
    
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.category-card, .lab-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 50);
    });
});

// Render All Labs Preview (first 20)
function renderAllLabsPreview() {
    const container = document.getElementById('allLabsPreview');
    if (!container) return;
    
    const previewLabs = laboratories.slice(0, 20);
    container.innerHTML = previewLabs.map(lab => createLabCard(lab)).join('');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
