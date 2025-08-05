// Global variables
let currentLanguage = 'uz';
const telegramBotToken = '8296795603:AAHwfo0GktxoDsFmq5Zo7gMf3x7IM7bUj10';
const telegramChatId = '8154497279';

// Language data
const translations = {
    uz: {
        // Navigation
        'Bosh sahifa': 'Bosh sahifa',
        'Biz haqimizda': 'Biz haqimizda',
        'Kurslar': 'Kurslar',
        'Videolar': 'Videolar',
        'Aloqa': 'Aloqa',
        'Ro\'yxatdan o\'tish': 'Ro\'yxatdan o\'tish',
        
        // Hero section
        'JEONBUK KOREYS TILI MAKTABI': 'JEONBUK KOREYS TILI MAKTABI',
        'Koreys tilini noldan professional darajagacha o\'rganing': 'Koreys tilini noldan professional darajagacha o\'rganing',
        'Soule Hangugo kitobidan': 'Soule Hangugo kitobidan',
        'TOPIK 1 & 2 tayyorlash': 'TOPIK 1 & 2 tayyorlash',
        'Online darslar': 'Online darslar',
        'Sertifikat berish': 'Sertifikat berish',
        'Hoziroq boshlash': 'Hoziroq boshlash',
        'Batafsil ma\'lumot': 'Batafsil ma\'lumot',
        
        // About section
        'Biz haqimizda': 'Biz haqimizda',
        '2020-yilda tashkil etilgan zamonaviy koreys tili maktabi': '2020-yilda tashkil etilgan zamonaviy koreys tili maktabi',
        'Nima uchun aynan biz?': 'Nima uchun aynan biz?',
        'Soule Hangugo kitobidan professional darslar': 'Soule Hangugo kitobidan professional darslar',
        'TOPIK 1 va TOPIK 2 imtihonlariga tayyorlash': 'TOPIK 1 va TOPIK 2 imtihonlariga tayyorlash',
        'Noldan boshlovchilar uchun maxsus dastur': 'Noldan boshlovchilar uchun maxsus dastur',
        'Online ZOOM orqali interaktiv darslar': 'Online ZOOM orqali interaktiv darslar',
        'Kurs tugagach rasmiy sertifikat berish': 'Kurs tugagach rasmiy sertifikat berish',
        'Tashkil etilgan yil': 'Tashkil etilgan yil',
        'Muvaffaqiyatli o\'quvchilar': 'Muvaffaqiyatli o\'quvchilar',
        'TOPIK darajalari': 'TOPIK darajalari',
        
        // Courses section
        'Bizning kurslarimiz': 'Bizning kurslarimiz',
        'Har bir daraja uchun maxsus ishlab chiqilgan dasturlar': 'Har bir daraja uchun maxsus ishlab chiqilgan dasturlar',
        'TOPIK 1 tayyorlash': 'TOPIK 1 tayyorlash',
        'Boshlang\'ich va o\'rta daraja uchun': 'Boshlang\'ich va o\'rta daraja uchun',
        'Asosiy grammatika': 'Asosiy grammatika',
        'So\'z boyligi': 'So\'z boyligi',
        'Eshitish va o\'qish': 'Eshitish va o\'qish',
        'Kursga yozilish': 'Kursga yozilish',
        'TOPIK 2 tayyorlash': 'TOPIK 2 tayyorlash',
        'O\'rta va yuqori daraja uchun': 'O\'rta va yuqori daraja uchun',
        'Murakkab grammatika': 'Murakkab grammatika',
        'Yozish ko\'nikmalari': 'Yozish ko\'nikmalari',
        'Professional lug\'at': 'Professional lug\'at',
        'Noldan boshlash': 'Noldan boshlash',
        'Mutlaqo yangi boshlovchilar uchun': 'Mutlaqo yangi boshlovchilar uchun',
        'Koreya alifbosi': 'Koreya alifbosi',
        'Asosiy iboralar': 'Asosiy iboralar',
        'Kundalik suhbat': 'Kundalik suhbat',
        'Mashhur': 'Mashhur',
        
        // Videos section
        'Bepul video darslar': 'Bepul video darslar',
        'YouTube kanalimizdan eng yaxshi darslar': 'YouTube kanalimizdan eng yaxshi darslar',
        'TOPIK 1 Master Class': 'TOPIK 1 Master Class',
        'Boshlang\'ich daraja uchun to\'liq kurs': 'Boshlang\'ich daraja uchun to\'liq kurs',
        'TOPIK 2 Master Class': 'TOPIK 2 Master Class',
        'Yuqori daraja uchun professional tayyorlash': 'Yuqori daraja uchun professional tayyorlash',
        'TOPIK daraja olish uchun qancha vaqt kerak?': 'TOPIK daraja olish uchun qancha vaqt kerak?',
        'Foydali maslahatlar va yo\'l xaritasi': 'Foydali maslahatlar va yo\'l xaritasi',
        'YouTube kanalimizga obuna bo\'ling': 'YouTube kanalimizga obuna bo\'ling',
        
        // Certificate section
        'Rasmiy sertifikat oling': 'Rasmiy sertifikat oling',
        'Kurs muvaffaqiyatli tugagach, rasmiy sertifikat bilan taqdirlanasiz': 'Kurs muvaffaqiyatli tugagach, rasmiy sertifikat bilan taqdirlanasiz',
        'Xalqaro tan olingan sertifikat': 'Xalqaro tan olingan sertifikat',
        'Raqamli va qog\'oz nusxalari': 'Raqamli va qog\'oz nusxalari',
        'LinkedIn profilingizga qo\'shing': 'LinkedIn profilingizga qo\'shing',
        
        // Contact section
        'Biz bilan bog\'laning': 'Biz bilan bog\'laning',
        'Savollaringiz bormi? Biz doimo yordam berishga tayyormiz!': 'Savollaringiz bormi? Biz doimo yordam berishga tayyormiz!',
        'Telefon raqamlar': 'Telefon raqamlar',
        'Telegram adminlar': 'Telegram adminlar',
        'Ijtimoiy tarmoqlar': 'Ijtimoiy tarmoqlar',
        'Tezkor aloqa': 'Tezkor aloqa',
        'Xabar yuborish': 'Xabar yuborish',
        
        // Registration form
        'Kursga ro\'yxatdan o\'tish': 'Kursga ro\'yxatdan o\'tish',
        'Ism va familiya': 'Ism va familiya',
        'Telefon raqam': 'Telefon raqam',
        'Telegram username': 'Telegram username',
        'Mamlakat va shahar': 'Mamlakat va shahar',
        'Ilgari koreys tilini o\'rgangan misiz?': 'Ilgari koreys tilini o\'rgangan misiz?',
        'Tanlang': 'Tanlang',
        'Yo\'q, birinchi marta': 'Yo\'q, birinchi marta',
        'Ha, mustaqil o\'rganganman': 'Ha, mustaqil o\'rganganman',
        'Ha, boshqa maktabda o\'rganganman': 'Ha, boshqa maktabda o\'rganganman',
        'Hozirgi til darajangiz': 'Hozirgi til darajangiz',
        'Boshlang\'ich (0 daraja)': 'Boshlang\'ich (0 daraja)',
        'Elementar (1-2 daraja)': 'Elementar (1-2 daraja)',
        'O\'rta (3-4 daraja)': 'O\'rta (3-4 daraja)',
        'Yuqori (5-6 daraja)': 'Yuqori (5-6 daraja)',
        'Qaysi kitobdan o\'rgangan?': 'Qaysi kitobdan o\'rgangan?',
        'Qaysi kursga yozilmoqchisiz?': 'Qaysi kursga yozilmoqchisiz?',
        'Suhbat kursi': 'Suhbat kursi',
        'Qo\'shimcha ma\'lumot': 'Qo\'shimcha ma\'lumot',
        'Ro\'yxatdan o\'tish': 'Ro\'yxatdan o\'tish'
    },
    ko: {
        // Navigation
        'Bosh sahifa': '홈',
        'Biz haqimizda': '소개',
        'Kurslar': '코스',
        'Videolar': '비디오',
        'Aloqa': '연락처',
        'Ro\'yxatdan o\'tish': '등록',
        
        // Hero section
        'JEONBUK KOREYS TILI MAKTABI': '전북 한국어 학교',
        'Koreys tilini noldan professional darajagacha o\'rganing': '한국어를 기초부터 전문 수준까지 배우세요',
        'Soule Hangugo kitobidan': '서울 한국어 교재로',
        'TOPIK 1 & 2 tayyorlash': 'TOPIK 1 & 2 준비',
        'Online darslar': '온라인 수업',
        'Sertifikat berish': '수료증 발급',
        'Hoziroq boshlash': '지금 시작하기',
        'Batafsil ma\'lumot': '자세히 보기',
        
        // About section
        'Biz haqimizda': '소개',
        '2020-yilda tashkil etilgan zamonaviy koreys tili maktabi': '2020년에 설립된 현대적인 한국어 학교',
        'Nima uchun aynan biz?': '왜 저희를 선택해야 할까요?',
        'Soule Hangugo kitobidan professional darslar': '서울 한국어 교재로 전문적인 수업',
        'TOPIK 1 va TOPIK 2 imtihonlariga tayyorlash': 'TOPIK 1과 TOPIK 2 시험 준비',
        'Noldan boshlovchilar uchun maxsus dastur': '초보자를 위한 특별 프로그램',
        'Online ZOOM orqali interaktiv darslar': 'ZOOM을 통한 온라인 대화형 수업',
        'Kurs tugagach rasmiy sertifikat berish': '코스 완료 후 공식 수료증 발급',
        'Tashkil etilgan yil': '설립 연도',
        'Muvaffaqiyatli o\'quvchilar': '성공한 학생들',
        'TOPIK darajalari': 'TOPIK 레벨',
        
        // Courses section
        'Bizning kurslarimiz': '우리의 코스',
        'Har bir daraja uchun maxsus ishlab chiqilgan dasturlar': '각 레벨을 위해 특별히 개발된 프로그램',
        'TOPIK 1 tayyorlash': 'TOPIK 1 준비',
        'Boshlang\'ich va o\'rta daraja uchun': '초급 및 중급을 위한',
        'Asosiy grammatika': '기본 문법',
        'So\'z boyligi': '어휘력',
        'Eshitish va o\'qish': '듣기와 읽기',
        'Kursga yozilish': '코스 등록',
        'TOPIK 2 tayyorlash': 'TOPIK 2 준비',
        'O\'rta va yuqori daraja uchun': '중급 및 고급을 위한',
        'Murakkab grammatika': '복잡한 문법',
        'Yozish ko\'nikmalari': '쓰기 기술',
        'Professional lug\'at': '전문 어휘',
        'Noldan boshlash': '기초부터 시작',
        'Mutlaqo yangi boshlovchilar uchun': '완전 초보자를 위한',
        'Koreya alifbosi': '한글 알파벳',
        'Asosiy iboralar': '기본 표현',
        'Kundalik suhbat': '일상 대화',
        'Mashhur': '인기',
        
        // Videos section
        'Bepul video darslar': '무료 비디오 강의',
        'YouTube kanalimizdan eng yaxshi darslar': 'YouTube 채널의 최고 강의',
        'TOPIK 1 Master Class': 'TOPIK 1 마스터 클래스',
        'Boshlang\'ich daraja uchun to\'liq kurs': '초급을 위한 완전한 코스',
        'TOPIK 2 Master Class': 'TOPIK 2 마스터 클래스',
        'Yuqori daraja uchun professional tayyorlash': '고급을 위한 전문 준비',
        'TOPIK daraja olish uchun qancha vaqt kerak?': 'TOPIK 레벨을 얻는 데 얼마나 걸리나요?',
        'Foydali maslahatlar va yo\'l xaritasi': '유용한 팁과 로드맵',
        'YouTube kanalimizga obuna bo\'ling': 'YouTube 채널 구독',
        
        // Certificate section
        'Rasmiy sertifikat oling': '공식 수료증 받기',
        'Kurs muvaffaqiyatli tugagach, rasmiy sertifikat bilan taqdirlanasiz': '코스를 성공적으로 완료하면 공식 수료증을 받게 됩니다',
        'Xalqaro tan olingan sertifikat': '국제적으로 인정받는 수료증',
        'Raqamli va qog\'oz nusxalari': '디지털 및 종이 사본',
        'LinkedIn profilingizga qo\'shing': 'LinkedIn 프로필에 추가',
        
        // Contact section
        'Biz bilan bog\'laning': '연락하기',
        'Savollaringiz bormi? Biz doimo yordam berishga tayyormiz!': '질문이 있으신가요? 언제든지 도움을 드릴 준비가 되어 있습니다!',
        'Telefon raqamlar': '전화번호',
        'Telegram adminlar': '텔레그램 관리자',
        'Ijtimoiy tarmoqlar': '소셜 미디어',
        'Tezkor aloqa': '빠른 연락',
        'Xabar yuborish': '메시지 보내기',
        
        // Registration form
        'Kursga ro\'yxatdan o\'tish': '코스 등록',
        'Ism va familiya': '성명',
        'Telefon raqam': '전화번호',
        'Telegram username': '텔레그램 사용자명',
        'Mamlakat va shahar': '국가 및 도시',
        'Ilgari koreys tilini o\'rgangan misiz?': '이전에 한국어를 배운 적이 있나요?',
        'Tanlang': '선택하세요',
        'Yo\'q, birinchi marta': '아니요, 처음입니다',
        'Ha, mustaqil o\'rganganman': '네, 독학했습니다',
        'Ha, boshqa maktabda o\'rganganman': '네, 다른 학교에서 배웠습니다',
        'Hozirgi til darajangiz': '현재 언어 수준',
        'Boshlang\'ich (0 daraja)': '초급 (0 레벨)',
        'Elementar (1-2 daraja)': '기초 (1-2 레벨)',
        'O\'rta (3-4 daraja)': '중급 (3-4 레벨)',
        'Yuqori (5-6 daraja)': '고급 (5-6 레벨)',
        'Qaysi kitobdan o\'rgangan?': '어떤 교재로 배웠나요?',
        'Qaysi kursga yozilmoqchisiz?': '어떤 코스에 등록하고 싶나요?',
        'Suhbat kursi': '회화 코스',
        'Qo\'shimcha ma\'lumot': '추가 정보',
        'Ro\'yxatdan o\'tish': '등록하기'
    }
};

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
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
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
    document.getElementById(lang + '-btn').classList.add('active');
    
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
        if (placeholders[lang][currentPlaceholder]) {
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
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
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
        
        return response.ok;
    } catch (error) {
        console.error('Telegram API error:', error);
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

//
