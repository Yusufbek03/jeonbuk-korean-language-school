// Global variables
let currentLanguage = 'uz';
const telegramBotToken = '8296795603:AAHwfo0GktxoDsFmq5Zo7gMf3x7IM7bUj10';
const telegramChatId = '8154497279';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    setupScrollAnimations();
    setupNavbarScroll();
    createScrollToTopButton();
});

// Initialize website
function initializeWebsite() {
    // Set initial language
    switchLanguage('uz');
    
    // Add loading animation to buttons
    addLoadingAnimations();
    
    // Setup intersection observer for animations
    setupIntersectionObserver();
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
    
    // Test if hamburger is clickable
    if (hamburger) {
        console.log('Hamburger is visible and ready for clicks');
    }
    
    if (hamburger && navMenu) {
        console.log('Setting up hamburger menu...');
        
        // Simple click handler
        hamburger.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked!');
            
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            
            console.log('Nav menu classes:', navMenu.classList.toString());
            console.log('Hamburger classes:', hamburger.classList.toString());
        };
        
        // Also add touch support for mobile
        hamburger.ontouchstart = function(e) {
            e.preventDefault();
            hamburger.onclick(e);
        };
        
        console.log('Hamburger menu setup complete');
    } else {
        console.error('Hamburger or nav menu not found!');
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && hamburger) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Registration form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }
    
    // Quick contact form submission
    const quickContactForm = document.getElementById('quickContactForm');
    if (quickContactForm) {
        quickContactForm.addEventListener('submit', handleQuickContactSubmit);
    }
    
    // Modal close events
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('registrationModal');
        if (event.target === modal) {
            closeRegistrationModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeRegistrationModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const langBtn = document.getElementById(lang + '-btn');
    if (langBtn) langBtn.classList.add('active');
    
    // Update body class for font changes
    document.body.className = lang === 'ko' ? 'korean' : '';
    
    // Update all translatable elements
    document.querySelectorAll('[data-uz]').forEach(element => {
        const uzText = element.getAttribute('data-uz');
        const koText = element.getAttribute('data-ko');
        
        if (lang === 'ko' && koText) {
            element.textContent = koText;
        } else if (lang === 'uz' && uzText) {
            element.textContent = uzText;
        }
    });
    
    // Update select options
    document.querySelectorAll('option[data-uz]').forEach(option => {
        const uzText = option.getAttribute('data-uz');
        const koText = option.getAttribute('data-ko');
        
        if (lang === 'ko' && koText) {
            option.textContent = koText;
        } else if (lang === 'uz' && uzText) {
            option.textContent = uzText;
        }
    });
    
    // Update placeholders
    updatePlaceholders(lang);
}

// Update form placeholders
function updatePlaceholders(lang) {
    const placeholders = {
        uz: {
            'Ismingiz / 이름': 'Ismingiz',
            'Telefon raqam / 전화번호': 'Telefon raqam',
            'Xabaringiz / 메시지': 'Xabaringiz',
            '@username': '@username',
            'Kitob nomi / 교재명': 'Kitob nomi',
            'Kurs haqida savollaringiz yoki qo\'shimcha ma\'lumotlar / 코스에 대한 질문이나 추가 정보': 'Kurs haqida savollaringiz yoki qo\'shimcha ma\'lumotlar'
        },
        ko: {
            'Ismingiz / 이름': '이름',
            'Telefon raqam / 전화번호': '전화번호',
            'Xabaringiz / 메시지': '메시지',
            '@username': '@username',
            'Kitob nomi / 교재명': '교재명',
            'Kurs haqida savollaringiz yoki qo\'shimcha ma\'lumotlar / 코스에 대한 질문이나 추가 정보': '코스에 대한 질문이나 추가 정보'
        }
    };
    
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
        const currentPlaceholder = element.getAttribute('placeholder');
        if (placeholders[lang] && placeholders[lang][currentPlaceholder]) {
            element.setAttribute('placeholder', placeholders[lang][currentPlaceholder]);
        }
    });
}

// Registration modal functions
function openRegistrationModal(courseType = '') {
    const modal = document.getElementById('registrationModal');
    const courseSelect = document.querySelector('select[name="courseType"]');
    
    if (courseType && courseSelect) {
        courseSelect.value = courseType;
    }
    
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Handle registration form submission
async function handleRegistrationSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> ' + (currentLanguage === 'ko' ? '전송 중...' : 'Yuborilmoqda...');
    submitBtn.disabled = true;
    
    try {
        // Prepare message for Telegram
        const message = formatRegistrationMessage(formData);
        
        // Send to Telegram
        const success = await sendToTelegram(message);
        
        if (success) {
            showMessage(currentLanguage === 'ko' ? '등록이 성공적으로 완료되었습니다!' : 'Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi!', 'success');
            form.reset();
            setTimeout(() => {
                closeRegistrationModal();
            }, 2000);
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showMessage(currentLanguage === 'ko' ? '오류가 발생했습니다. 다시 시도해주세요.' : 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Handle quick contact form submission
async function handleQuickContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> ' + (currentLanguage === 'ko' ? '전송 중...' : 'Yuborilmoqda...');
    submitBtn.disabled = true;
    
    try {
        // Prepare message for Telegram
        const message = formatQuickContactMessage(formData);
        
        // Send to Telegram
        const success = await sendToTelegram(message);
        
        if (success) {
            showMessage(currentLanguage === 'ko' ? '메시지가 성공적으로 전송되었습니다!' : 'Xabar muvaffaqiyatli yuborildi!', 'success');
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Contact error:', error);
        showMessage(currentLanguage === 'ko' ? '오류가 발생했습니다. 다시 시도해주세요.' : 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Format registration message for Telegram
function formatRegistrationMessage(formData) {
    const data = Object.fromEntries(formData);
    
    return `🎓 YANGI KURS RO'YXATI / 새로운 코스 등록

👤 Ism / 이름: ${data.fullName}
📱 Telefon / 전화: ${data.phone}
💬 Telegram: ${data.telegram}
🌍 Joylashuv / 위치: ${data.location}

📚 Oldingi tajriba / 이전 경험: ${data.previousStudy}
📊 Hozirgi daraja / 현재 레벨: ${data.level}
📖 Kitob / 교재: ${data.textbook || 'Ko\'rsatilmagan / 명시되지 않음'}
🎯 Kurs turi / 코스 유형: ${data.courseType}

💭 Qo'shimcha ma'lumot / 추가 정보:
${data.description || 'Yo\'q / 없음'}

⏰ Vaqt / 시간: ${new Date().toLocaleString('uz-UZ')}`;
}

// Format quick contact message for Telegram
function formatQuickContactMessage(formData) {
    const data = Object.fromEntries(formData);
    
    return `💬 TEZKOR ALOQA / 빠른 연락

👤 Ism / 이름: ${data.fullName || 'Ko\'rsatilmagan'}
📱 Telefon / 전화: ${data.phone || 'Ko\'rsatilmagan'}

💭 Xabar / 메시지:
${data.message}

⏰ Vaqt / 시간: ${new Date().toLocaleString('uz-UZ')}`;
}

// Send message to Telegram
async function sendToTelegram(message) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('Network error:', error);
        return false;
    }
}

// Show success/error messages
function showMessage(text, type) {
    // Remove existing messages
    document.querySelectorAll('.message').forEach(msg => msg.remove());
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert at the top of the form
    const activeForm = document.querySelector('#registrationModal .registration-form') || 
                      document.querySelector('#quickContactForm');
    
    if (activeForm) {
        activeForm.insertBefore(message, activeForm.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards and other elements
    document.querySelectorAll('.course-card, .video-card, .stat').forEach(element => {
        observer.observe(element);
    });
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Create scroll to top button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add loading animations
function addLoadingAnimations() {
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('course-card') || 
                    entry.target.classList.contains('video-card')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.course-card, .video-card, .contact-item, .about-text, .about-stats').forEach(element => {
        observer.observe(element);
    });
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 20);
    });
}

// Initialize counter animation when stats section is visible
function initCounterAnimation() {
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', initCounterAnimation);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title span');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    // Validate email format if email field exists
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.classList.add('error');
            isValid = false;
        }
    }
    
    // Validate phone format
    const phoneField = form.querySelector('input[type="tel"]');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(phoneField.value)) {
            phoneField.classList.add('error');
            isValid = false;
        }
    }
    
    // Validate Telegram username format
    const telegramField = form.querySelector('input[name="telegram"]');
    if (telegramField && telegramField.value) {
        const telegramRegex = /^@?[a-zA-Z0-9_]{5,}$/;
        if (!telegramRegex.test(telegramField.value)) {
            telegramField.classList.add('error');
            isValid = false;
        }
    }
    
    return isValid;
}

// Add form validation to existing form handlers
const originalHandleRegistrationSubmit = handleRegistrationSubmit;
const originalHandleQuickContactSubmit = handleQuickContactSubmit;

handleRegistrationSubmit = async function(e) {
    e.preventDefault();
    
    if (!validateForm(e.target)) {
        showMessage(currentLanguage === 'ko' ? '모든 필수 필드를 올바르게 입력해주세요.' : 'Barcha majburiy maydonlarni to\'g\'ri to\'ldiring.', 'error');
        return;
    }
    
    return originalHandleRegistrationSubmit.call(this, e);
};

handleQuickContactSubmit = async function(e) {
    e.preventDefault();
    
    if (!validateForm(e.target)) {
        showMessage(currentLanguage === 'ko' ? '모든 필수 필드를 올바르게 입력해주세요.' : 'Barcha majburiy maydonlarni to\'g\'ri to\'ldiring.', 'error');
        return;
    }
    
    return originalHandleQuickContactSubmit.call(this, e);
};

// Image upload functionality (for future use)
function setupImageUpload() {
    const imageUploadInput = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    
    if (imageUploadInput && imagePreview) {
        imageUploadInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.maxWidth = '200px';
                    img.style.height = 'auto';
                    img.style.borderRadius = '8px';
                    
                    imagePreview.innerHTML = '';
                    imagePreview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    setupScrollAnimations();
    setupNavbarScroll();
    createScrollToTopButton();
    initTypingEffect();
    setupImageUpload();
});

// Export functions for global access
window.switchLanguage = switchLanguage;
window.openRegistrationModal = openRegistrationModal;
window.closeRegistrationModal = closeRegistrationModal;
window.scrollToSection = scrollToSection;
