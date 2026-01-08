// Course structure data
const courseStructure = {
    "01-financial-markets": {
        title: "Course 1: Financial Markets",
        duration: "7 weeks",
        modules: {
            "credit-risk-and-financing": {
                title: "Credit Risk and Financing",
                lessons: [
                    {
                        id: "lesson-01",
                        title: "Lesson 1: Saving and Borrowing",
                        studyGuide: "01-financial-markets/modules/credit-risk-and-financing/lesson-01-study-guide.md",
                        practice: "01-financial-markets/modules/credit-risk-and-financing/lesson-01-practice-questions.md",
                        original: "01-financial-markets/modules/credit-risk-and-financing/saving-and -borrowing.md"
                    },
                    {
                        id: "lesson-02",
                        title: "Lesson 2: Counterparties and Credit Risk",
                        studyGuide: "01-financial-markets/modules/credit-risk-and-financing/lesson-02-study-guide.md",
                        practice: "01-financial-markets/modules/credit-risk-and-financing/lesson-02-practice-questions.md"
                    }
                ]
            }
        }
    }
};

// State management
let currentPath = null;
let theme = localStorage.getItem('theme') || 'light';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    buildNavigation();
    setupEventListeners();
    loadFromHash();
});

// Theme management
function initializeTheme() {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').textContent = '☀️';
    }
}

function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('themeToggle').textContent = '🌙';
    }
}

// Navigation building
function buildNavigation() {
    const navMenu = document.getElementById('navMenu');
    navMenu.innerHTML = '';

    Object.entries(courseStructure).forEach(([courseId, course]) => {
        const courseItem = createNavItem(course.title, course.duration, () => {
            showCourseOverview(courseId, course);
        });
        navMenu.appendChild(courseItem);

        Object.entries(course.modules).forEach(([moduleId, module]) => {
            const moduleItem = createNavSubItem(module.title, () => {
                showModuleOverview(courseId, moduleId, module);
            });
            navMenu.appendChild(moduleItem);

            module.lessons.forEach(lesson => {
                const lessonItem = createNavSubItem(lesson.title, () => {
                    loadContent(lesson.studyGuide, `${course.title} > ${module.title} > ${lesson.title}`);
                });
                navMenu.appendChild(lessonItem);
            });
        });
    });
}

function createNavItem(title, subtitle, onClick) {
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.innerHTML = `
        <div class="nav-item-title">${title}</div>
        <div class="nav-item-subtitle">${subtitle}</div>
    `;
    item.addEventListener('click', onClick);
    return item;
}

function createNavSubItem(title, onClick) {
    const item = document.createElement('div');
    item.className = 'nav-subitem';
    item.textContent = title;
    item.addEventListener('click', onClick);
    return item;
}

// Event listeners
function setupEventListeners() {
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('sidebarToggle')?.addEventListener('click', toggleSidebar);
    
    // Quick links
    document.querySelectorAll('.quick-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('data-path');
            loadContent(path);
        });
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Content loading
async function loadContent(filePath, breadcrumbText = null) {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = '<div class="loading">Loading content...</div>';

    currentPath = filePath;
    updateBreadcrumb(breadcrumbText || filePath);
    updateActiveNav(filePath);

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load: ${response.statusText}`);
        }
        
        const text = await response.text();
        const html = markdownToHTML(text);
        contentBody.innerHTML = `<div class="content">${html}</div>`;
        
        // Update hash
        window.location.hash = encodeURIComponent(filePath);
    } catch (error) {
        contentBody.innerHTML = `
            <div class="error">
                <h3>Error Loading Content</h3>
                <p>${error.message}</p>
                <p><strong>Note:</strong> This interface requires a local web server to load markdown files.</p>
                <p>Run: <code>python -m http.server 8000</code> or <code>npx serve</code> in the project root.</p>
            </div>
        `;
    }
}

function updateBreadcrumb(text) {
    const breadcrumb = document.getElementById('breadcrumb');
    const parts = text.split(' > ');
    if (parts.length > 1) {
        breadcrumb.innerHTML = parts.map((part, i) => 
            i < parts.length - 1 
                ? `<a href="#" onclick="loadContent('${currentPath}')">${part}</a> > `
                : part
        ).join('');
    } else {
        breadcrumb.textContent = text;
    }
}

function updateActiveNav(path) {
    document.querySelectorAll('.nav-item, .nav-subitem').forEach(item => {
        item.classList.remove('active');
    });
    // Could add logic to highlight active item based on path
}

// Markdown to HTML converter using marked.js
function markdownToHTML(markdown) {
    if (typeof marked !== 'undefined') {
        // Configure marked options
        marked.setOptions({
            breaks: true,
            gfm: true,
            highlight: function(code, lang) {
                if (typeof hljs !== 'undefined' && lang) {
                    try {
                        return hljs.highlight(code, { language: lang }).value;
                    } catch (err) {
                        return hljs.highlightAuto(code).value;
                    }
                }
                return code;
            }
        });
        
        let html = marked.parse(markdown);
        
        // Post-process to add classes for styling
        html = html.replace(/<table>/g, '<table class="content-table">');
        html = html.replace(/<pre><code>/g, '<pre><code class="hljs">');
        
        return html;
    } else {
        // Fallback simple converter
        let html = markdown;
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        return html;
    }
}

// Hash navigation
function loadFromHash() {
    if (window.location.hash) {
        const path = decodeURIComponent(window.location.hash.substring(1));
        loadContent(path);
    }
}

window.addEventListener('hashchange', () => {
    if (window.location.hash) {
        const path = decodeURIComponent(window.location.hash.substring(1));
        loadContent(path);
    }
});

// Course/Module overviews
function showCourseOverview(courseId, course) {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = `
        <div class="content">
            <h1>${course.title}</h1>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <h2>Modules</h2>
            <ul>
                ${Object.entries(course.modules).map(([id, module]) => 
                    `<li><a href="#" onclick="showModuleOverview('${courseId}', '${id}', ${JSON.stringify(module).replace(/"/g, '&quot;')})">${module.title}</a></li>`
                ).join('')}
            </ul>
        </div>
    `;
    updateBreadcrumb(course.title);
}

function showModuleOverview(courseId, moduleId, module) {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = `
        <div class="content">
            <h1>${module.title}</h1>
            <h2>Lessons</h2>
            <ul>
                ${module.lessons.map(lesson => 
                    `<li>
                        <a href="#" onclick="loadContent('${lesson.studyGuide}', '${courseStructure[courseId].title} > ${module.title} > ${lesson.title}')">
                            ${lesson.title}
                        </a>
                        <div style="margin-left: 2rem; margin-top: 0.5rem;">
                            <a href="#" onclick="loadContent('${lesson.studyGuide}')" style="font-size: 0.9em; color: var(--accent-color);">Study Guide</a> | 
                            <a href="#" onclick="loadContent('${lesson.practice}')" style="font-size: 0.9em; color: var(--accent-color);">Practice Questions</a>
                        </div>
                    </li>`
                ).join('')}
            </ul>
        </div>
    `;
    updateBreadcrumb(`${courseStructure[courseId].title} > ${module.title}`);
}

// Make functions globally available
window.loadContent = loadContent;
window.showModuleOverview = showModuleOverview;

