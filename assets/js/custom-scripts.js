// مدیریت حالت تیره
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // بررسی حالت ذخیره شده
    const isDark = localStorage.getItem('darkTheme') === 'true';
    
    if (isDark) {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fa fa-sun';
    }
    
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.className = 'fa fa-sun';
            localStorage.setItem('darkTheme', 'true');
        } else {
            themeIcon.className = 'fa fa-moon';
            localStorage.setItem('darkTheme', 'false');
        }
    });
});

// پاسخ‌های پیشرفته چت‌بات
const seoChatbotResponses = {
    greetings: [
        "سلام! من دستیار هوشمند سئو هستم. برای مشاوره رایگان در زمینه سئو، دیجیتال مارکتینگ و بهینه‌سازی سایت در خدمت شما هستم.",
        "درود! امیرعلی عابدینی اینجاست. چه سوالی در مورد سئو، تولید محتوا یا دیجیتال مارکتینگ دارید؟",
        "سلام عزیز! من دستیار تخصصی سئو هستم. می‌تونم در مورد بهینه‌سازی سایت، افزایش ترافیک و رشد کسب‌وکار آنلاین کمکتون کنم."
    ],
    
    seoTechnical: [
        "سئو فنی شامل بهینه‌سازی سرعت سایت، ساختار URL، معماری سایت و فایل robots.txt می‌شود. سرعت سایت باید زیر ۳ ثانیه باشه.",
        "برای سئو تکنیکال، اول از همه سرعت سایت رو بررسی کنید. از ابزار Google PageSpeed Insights استفاده کنید.",
        "سئو فنی پایه و اساس کاره. باید سایت برای موبایل بهینه باشه، ساختار HTML صحیح داشته باشه و خطای کراول نداشته باشه."
    ],
    
    seoContent: [
        "تولید محتوا باید بر اساس intent کاربر باشه. محتواهای جامع و عمیق ۱۰ برابر بیشتر از محتواهای سطحی نتیجه می‌دن.",
        "محتوای باکیفیت باید مشکل کاربر رو حل کنه، اطلاعات کامل بده و از منابع معتبر استفاده کنه.",
        "برای محتوای سئو شده، از کلمات کلیدی اصلی و فرعی استفاده کنید، ساختار هدینگ رعایت بشه و طول محتوا حداقل ۱۵۰۰ کلمه باشه."
    ],
    
    seoLocal: [
        "سئو محلی برای کسب‌وکارهای فیزیکی حیاتیه. حتما Google Business رو کامل کنید و نظرات واقعی جمع‌آوری کنید.",
        "برای سئو محلی، نام، آدرس و شماره تلفن باید در تمام پلتفرم‌ها یکسان باشه. از NAP consistency پیروی کنید.",
        "سئو محلی با عکس‌های باکیفیت، پاسخ به نظرات و به‌روزرسانی منظم پروفایل بهبود پیدا می‌کنه."
    ],
    
    seoBacklink: [
        "لینک‌سازی باید طبیعی و اصولی باشه. لینک از سایت‌های معتبر و مرتبط ارزش بیشتری داره.",
        "برای بک‌لینک، تولید محتوای باکیفیت و قابل اشتراک بهترین راهه. Guest posting در سایت‌های مرتبط هم موثره.",
        "لینک‌های toxic می‌تونن به سایت آسیب بزنن. از خرید بک‌لینک انبوه خودداری کنید و روی کیفیت تمرکز کنید."
    ],
    
    digitalMarketing: [
        "دیجیتال مارکتینگ شامل سئو، تبلیغات، شبکه‌های اجتماعی و ایمیل مارکتینگ میشه. هر کدوم استراتژی خاص خودش رو داره.",
        "تبلیغات گوگل ادز سریع‌ترین راه برای جذب مشتری هست، اما سئو نتایج بلندمدت و پایدارتری داره.",
        "استراتژی دیجیتال مارکتینگ باید بر اساس اهداف کسب‌وکار، بودجه و پرسونای مخاطب طراحی بشه."
    ],
    
    pricing: [
        "قیمت خدمات سئو بستگی به رقابت صنعت، وضعیت فعلی سایت و اهداف شما داره. از ۱ میلیون تومان شروع می‌شه.",
        "برای قیمت دقیق، نیاز به تحلیل سایت داریم. می‌تونید درخواست تحلیل رایگان بدید تا برآورد دقیق ارائه بدیم.",
        "پکیج‌های سئو ما شامل تحلیل، بهینه‌سازی، تولید محتوا و گزارش‌دهی ماهانه هست. هزینه بر اساس پیچیدگی پروژه متفاوته."
    ],
    
    timeline: [
        "نتایج اولیه سئو معمولا ۳-۶ ماه زمان می‌بره. برای کلمات کلیدی رقابتی ممکنه ۶-۱۲ ماه طول بکشه.",
        "سئو پروسه بلندمدته. ماه اول تحلیل و بهینه‌سازی، ماه دوم شروع نتایج و ماه سوم تا ششم رشد قابل توجه.",
        "برای دیدن نتایج پایدار، حداقل ۶ ماه زمان نیازه. سئو سرمایه‌گذاریه نه هزینه!"
    ],
    
    tools: [
        "برای تحلیل سئو از Google Search Console، Google Analytics، Ahrefs، SEMrush و Screaming Frog استفاده می‌کنیم.",
        "ابزارهای رایگان سئو: Google Search Console، Google Analytics، Google PageSpeed Insights، Google Trends.",
        "برای تحلیل کلمات کلیدی، Ubersuggest و AnswerThePublic رایگان هستن. برای تحلیل پیشرفته Ahrefs و SEMrush."
    ],
    
    commonProblems: [
        "مشکل رایج: سایت سرعت پایینی داره. راه‌حل: بهینه‌سازی تصاویر، فعال‌سازی کش و استفاده از CDN.",
        "مشکل: محتوای تکراری. راه‌حل: تولید محتوای منحصر به فرد و استفاده از تگ canonical.",
        "مشکل: عدم نمایش در گوگل. راه‌حل: بررسی index شدن، فایل robots.txt و sitemap."
    ],
    
    successStories: [
        "یک فروشگاه اینترنتی لوازم خانگی رو در ۴ ماه از رتبه ۸ به ۲ رسوندیم و فروشش ۳۰۰ درصد افزایش پیدا کرد.",
        "برای یک کلینیک پزشکی با سئو محلی، در ۳ ماه به صفحه اول گوگل رسیدیم و نوبت‌گیری آنلاین ۵ برابر شد.",
        "یک استارتاپ فین‌تک با استراتژی محتوای تخصصی، در ۶ ماه رتبه‌های برتر رو برای کلمات کلیدی مهم کسب کرد."
    ],
    
    contact: [
        "برای مشاوره رایگان می‌تونید با شماره ۰۹۳۰۵۶۷۱۰۹ تماس بگیرید یا از طریق فرم تماس اقدام کنید.",
        "ایمیل: amiraliabedini103@gmail.com - در کمتر از ۲۴ ساعت پاسخ می‌دم.",
        "برای درخواست تحلیل رایگان سایت، از بخش 'درخواست پیشنهاد رایگان' در صفحه اصلی استفاده کنید."
    ]
};

// مدیریت چت‌بات
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    // باز کردن چت‌بات
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.add('active');
    });
    
    // بستن چت‌بات
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });
    
    // ارسال پیام
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // اضافه کردن پیام کاربر
        addMessage(message, 'user');
        
        // پاک کردن ورودی
        chatbotInput.value = '';
        
        // پاسخ هوشمند
        setTimeout(() => {
            let response = getResponse(message);
            addMessage(response, 'bot');
        }, 800);
    }
    
    // دریافت پاسخ مناسب
    function getResponse(message) {
        const lowerMessage = message.toLowerCase();
        let category = '';
        
        // تشخیص دسته سوال
        if (lowerMessage.includes('سلام') || lowerMessage.includes('درود') || lowerMessage.includes('سلامت')) {
            category = 'greetings';
        } else if (lowerMessage.includes('فنی') || lowerMessage.includes('تکنیک') || lowerMessage.includes('سرعت')) {
            category = 'seoTechnical';
        } else if (lowerMessage.includes('محتوا') || lowerMessage.includes('مقاله') || lowerMessage.includes('نوشتن')) {
            category = 'seoContent';
        } else if (lowerMessage.includes('محلی') || lowerMessage.includes('گوگل مپ') || lowerMessage.includes('بیزینس')) {
            category = 'seoLocal';
        } else if (lowerMessage.includes('لینک') || lowerMessage.includes('بک لینک') || lowerMessage.includes('link')) {
            category = 'seoBacklink';
        } else if (lowerMessage.includes('دیجیتال') || lowerMessage.includes('مارکتینگ') || lowerMessage.includes('تبلیغات')) {
            category = 'digitalMarketing';
        } else if (lowerMessage.includes('قیمت') || lowerMessage.includes('هزینه') || lowerMessage.includes('چقدر')) {
            category = 'pricing';
        } else if (lowerMessage.includes('زمان') || lowerMessage.includes('چند ماه') || lowerMessage.includes('نتایج')) {
            category = 'timeline';
        } else if (lowerMessage.includes('ابزار') || lowerMessage.includes('نرم افزار') || lowerMessage.includes('tool')) {
            category = 'tools';
        } else if (lowerMessage.includes('مشکل') || lowerMessage.includes('ایراد') || lowerMessage.includes('خطا')) {
            category = 'commonProblems';
        } else if (lowerMessage.includes('موفق') || lowerMessage.includes('نمونه') || lowerMessage.includes('تجربه')) {
            category = 'successStories';
        } else if (lowerMessage.includes('تماس') || lowerMessage.includes('تلفن') || lowerMessage.includes('ایمیل')) {
            category = 'contact';
        } else if (lowerMessage.includes('سئو') || lowerMessage.includes('seo') || lowerMessage.includes('بهینه')) {
            category = 'seoTechnical';
        } else {
            category = 'greetings';
        }
        
        // انتخاب پاسخ تصادفی از دسته مربوطه
        const responses = seoChatbotResponses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // اضافه کردن پیام به چت
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('fa-IR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fa fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${timeString}</span>
            </div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // ارسال با کلیک
    chatbotSend.addEventListener('click', sendMessage);
    
    // ارسال با Enter
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // اتو resize برای textarea
    chatbotInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 100) + 'px';
    });
    
    // اضافه کردن پیام خوش‌آمدگویی اولیه
    setTimeout(() => {
        addMessage("میتونید سوالات متداول رو بپرسید: سئو فنی، تولید محتوا، قیمت خدمات، زمان نتایج، سئو محلی، ابزارهای سئو، مشکلات رایج و نمونه کارها.", 'bot');
    }, 1500);
});

// مدیریت سیستم امتیازدهی سایت
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('#siteRatingStars span');
    const currentRating = document.getElementById('siteCurrentRating');
    const submitRating = document.getElementById('submitSiteRating');
    const averageRating = document.getElementById('siteAverageRating');
    const totalRatings = document.getElementById('siteTotalRatings');
    
    let selectedRating = 0;
    
    // بارگذاری امتیازها از localStorage
    function loadSiteRatings() {
        const ratings = JSON.parse(localStorage.getItem('siteRatings') || '{}');
        
        if (ratings.mainSite) {
            const siteRatings = ratings.mainSite;
            const total = siteRatings.length;
            const sum = siteRatings.reduce((a, b) => a + b, 0);
            const avg = total > 0 ? (sum / total).toFixed(1) : '۰';
            
            averageRating.textContent = avg;
            totalRatings.textContent = total;
        }
    }
    
    // مدیریت کلیک روی ستاره‌ها
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            selectedRating = value;
            
            // به‌روزرسانی نمایش ستاره‌ها
            stars.forEach((s, index) => {
                if (index < value) {
                    s.textContent = '★';
                    s.classList.add('active');
                } else {
                    s.textContent = '☆';
                    s.classList.remove('active');
                }
            });
            
            // به‌روزرسانی متن امتیاز
            currentRating.textContent = `${value} از ۵`;
            
            // فعال کردن دکمه ثبت
            submitRating.disabled = false;
        });
        
        // هاور روی ستاره‌ها
        star.addEventListener('mouseenter', function() {
            const value = parseInt(this.getAttribute('data-value'));
            stars.forEach((s, index) => {
                if (index < value) {
                    s.textContent = '★';
                }
            });
        });
        
        star.addEventListener('mouseleave', function() {
            stars.forEach((s, index) => {
                if (index >= selectedRating) {
                    s.textContent = '☆';
                }
            });
        });
    });
    
    // ثبت امتیاز
    submitRating.addEventListener('click', function() {
        if (selectedRating === 0) return;
        
        // ذخیره در localStorage
        const ratings = JSON.parse(localStorage.getItem('siteRatings') || '{}');
        
        if (!ratings.mainSite) {
            ratings.mainSite = [];
        }
        
        // بررسی آیا کاربر قبلاً امتیاز داده
        const userRated = localStorage.getItem('rated_main_site');
        if (userRated) {
            alert('شما قبلاً به سایت امتیاز داده‌اید!');
            return;
        }
        
        ratings.mainSite.push(selectedRating);
        localStorage.setItem('siteRatings', JSON.stringify(ratings));
        localStorage.setItem('rated_main_site', 'true');
        
        // به‌روزرسانی نمایش
        loadSiteRatings();
        
        // غیرفعال کردن دکمه
        submitRating.disabled = true;
        submitRating.textContent = 'امتیاز شما ثبت شد ✓';
        
        setTimeout(() => {
            submitRating.textContent = 'ثبت امتیاز';
        }, 2000);
    });
    
    // بررسی اگر کاربر قبلاً امتیاز داده
    const userRated = localStorage.getItem('rated_main_site');
    if (userRated) {
        submitRating.disabled = true;
        submitRating.textContent = 'شما قبلاً امتیاز داده‌اید';
    }
    
    // بارگذاری اولیه
    loadSiteRatings();
});

// مدیریت سیستم دیدگاه‌های سایت
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('siteCommentForm');
    const commentsList = document.getElementById('siteCommentsList');
    const loadMoreBtn = document.getElementById('loadMoreSiteComments');
    
    // بارگذاری دیدگاه‌ها
    function loadSiteComments() {
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        commentsList.innerHTML = '';
        
        // فقط نمایش دیدگاه‌های تأیید شده
        const approvedComments = comments.filter(c => c.status === 'approved');
        
        if (approvedComments.length === 0) {
            commentsList.innerHTML = '<p style="text-align: center; color: #666;">هنوز دیدگاهی ثبت نشده است. شما اولین نفر باشید!</p>';
            return;
        }
        
        approvedComments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            
            const date = new Date(comment.date).toLocaleDateString('fa-IR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            let replyHtml = '';
            if (comment.adminReply) {
                const replyDate = comment.replyDate ? new Date(comment.replyDate).toLocaleDateString('fa-IR') : 'امروز';
                replyHtml = `
                    <div class="comment-reply admin-reply">
                        <div class="reply-header">
                            <strong><i class="fa fa-check-circle"></i> پاسخ مدیر</strong>
                            <span class="reply-date">${replyDate}</span>
                        </div>
                        <div class="reply-body">
                            <p>${comment.adminReply}</p>
                        </div>
                    </div>
                `;
            }
            
            commentDiv.innerHTML = `
                <div class="comment-header">
                    <div class="comment-author">
                        <div class="author-avatar">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="author-info">
                            <strong>${comment.name}</strong>
                            <span class="comment-date">${date}</span>
                        </div>
                    </div>
                </div>
                <div class="comment-body">
                    <p>${comment.text}</p>
                </div>
                ${replyHtml}
            `;
            
            commentsList.appendChild(commentDiv);
        });
    }
    
    // ارسال دیدگاه
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('siteCommentName').value.trim();
        const email = document.getElementById('siteCommentEmail').value.trim();
        const text = document.getElementById('siteCommentText').value.trim();
        
        if (!name || !text) {
            alert('لطفاً نام و دیدگاه خود را وارد کنید.');
            return;
        }
        
        // ایجاد دیدگاه جدید
        const comment = {
            id: Date.now(),
            name,
            email: email || 'بدون ایمیل',
            text,
            date: new Date().toISOString(),
            status: 'pending', // در انتظار تأیید
            adminReply: null,
            replyDate: null
        };
        
        // ذخیره در localStorage
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        comments.unshift(comment);
        localStorage.setItem('siteComments', JSON.stringify(comments));
        
        // پاک کردن فرم
        commentForm.reset();
        
        // نمایش پیام موفقیت
        alert('دیدگاه شما با موفقیت ثبت شد و پس از تأیید مدیر نمایش داده می‌شود.');
        
        // بارگذاری مجدد دیدگاه‌ها
        loadSiteComments();
    });
    
    // بارگذاری دیدگاه‌های بیشتر
    loadMoreBtn.addEventListener('click', function() {
        const spinner = loadMoreBtn.querySelector('.fa-spinner');
        spinner.style.display = 'inline-block';
        
        // شبیه‌سازی بارگذاری بیشتر
        setTimeout(() => {
            spinner.style.display = 'none';
            loadMoreBtn.disabled = true;
            loadMoreBtn.innerHTML = '<i class="fa fa-check"></i> همه دیدگاه‌ها بارگذاری شد';
        }, 1000);
    });
    
    // بارگذاری اولیه
    loadSiteComments();
});

// مدیریت پنل مدیریت
document.addEventListener('DOMContentLoaded', function() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminPanel = document.getElementById('adminPanel');
    const closeAdminPanel = document.getElementById('closeAdminPanel');
    const adminTabs = document.querySelectorAll('.admin-tab');
    const adminSections = document.querySelectorAll('.admin-section');
    
    // بررسی رمز مدیر
    function checkAdminPassword() {
        const savedPassword = localStorage.getItem('adminPassword') || 'admin123'; // رمز پیش‌فرض
        const inputPassword = prompt('رمز مدیریت را وارد کنید:');
        
        if (inputPassword === savedPassword) {
            return true;
        } else {
            alert('رمز اشتباه است!');
            return false;
        }
    }
    
    // باز کردن پنل مدیریت
    adminLoginBtn.addEventListener('click', function() {
        if (checkAdminPassword()) {
            adminPanel.classList.add('active');
            loadAdminPanel();
        }
    });
    
    // بستن پنل مدیریت
    closeAdminPanel.addEventListener('click', function() {
        adminPanel.classList.remove('active');
    });
    
    // تغییر تب‌ها
    adminTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // حذف کلاس active از همه تب‌ها
            adminTabs.forEach(t => t.classList.remove('active'));
            adminSections.forEach(s => s.classList.remove('active'));
            
            // اضافه کردن کلاس active به تب و بخش انتخاب شده
            this.classList.add('active');
            document.getElementById(`${tabId}Section`).classList.add('active');
        });
    });
    
    // بارگذاری پنل مدیریت
    function loadAdminPanel() {
        loadPendingSiteComments();
        loadApprovedSiteComments();
    }
    
    // بارگذاری دیدگاه‌های در انتظار تأیید
    function loadPendingSiteComments() {
        const pendingCommentsDiv = document.getElementById('pendingComments');
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        const pendingComments = comments.filter(c => c.status === 'pending');
        
        pendingCommentsDiv.innerHTML = '';
        
        if (pendingComments.length === 0) {
            pendingCommentsDiv.innerHTML = '<p>هیچ دیدگاهی در انتظار تأیید نیست.</p>';
            return;
        }
        
        pendingComments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-manage-item';
            commentDiv.id = `site-comment-${comment.id}`;
            
            const date = new Date(comment.date).toLocaleDateString('fa-IR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            commentDiv.innerHTML = `
                <div class="comment-manage-header">
                    <div>
                        <strong>${comment.name}</strong> (${comment.email})
                        <br><small>${date}</small>
                    </div>
                    <div class="comment-actions-admin">
                        <button class="btn-approve" onclick="approveSiteComment(${comment.id})">تأیید</button>
                        <button class="btn-reject" onclick="rejectSiteComment(${comment.id})">رد</button>
                        <button class="btn-reply" onclick="showSiteReplyForm(${comment.id})">پاسخ</button>
                    </div>
                </div>
                <p>${comment.text}</p>
                <div class="reply-form" id="site-reply-form-${comment.id}">
                    <textarea id="site-reply-text-${comment.id}" rows="3" placeholder="پاسخ خود را بنویسید..."></textarea>
                    <button class="btn-approve" onclick="submitSiteReply(${comment.id})">ارسال پاسخ</button>
                </div>
            `;
            
            pendingCommentsDiv.appendChild(commentDiv);
        });
    }
    
    // بارگذاری دیدگاه‌های تأیید شده
    function loadApprovedSiteComments() {
        const approvedCommentsDiv = document.getElementById('approvedComments');
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        const approvedComments = comments.filter(c => c.status === 'approved');
        
        approvedCommentsDiv.innerHTML = '';
        
        if (approvedComments.length === 0) {
            approvedCommentsDiv.innerHTML = '<p>هیچ دیدگاه تأیید شده‌ای وجود ندارد.</p>';
            return;
        }
        
        approvedComments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-manage-item';
            commentDiv.id = `site-comment-approved-${comment.id}`;
            
            const date = new Date(comment.date).toLocaleDateString('fa-IR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            let replyInfo = '';
            if (comment.adminReply) {
                const replyDate = comment.replyDate ? new Date(comment.replyDate).toLocaleDateString('fa-IR') : 'امروز';
                replyInfo = `
                    <div style="background: #e8f5e9; padding: 10px; border-radius: 5px; margin-top: 10px;">
                        <strong>پاسخ مدیر:</strong>
                        <p>${comment.adminReply}</p>
                        <small>${replyDate}</small>
                    </div>
                `;
            }
            
            commentDiv.innerHTML = `
                <div class="comment-manage-header">
                    <div>
                        <strong>${comment.name}</strong> (${comment.email})
                        <br><small>${date}</small>
                    </div>
                    <div class="comment-actions-admin">
                        <button class="btn-reject" onclick="deleteSiteComment(${comment.id})">حذف</button>
                        ${!comment.adminReply ? `<button class="btn-reply" onclick="showSiteReplyForm(${comment.id})">پاسخ</button>` : ''}
                    </div>
                </div>
                <p>${comment.text}</p>
                ${replyInfo}
                <div class="reply-form" id="site-reply-form-approved-${comment.id}">
                    <textarea id="site-reply-text-approved-${comment.id}" rows="3" placeholder="پاسخ خود را بنویسید..."></textarea>
                    <button class="btn-approve" onclick="submitSiteReply(${comment.id})">ارسال پاسخ</button>
                </div>
            `;
            
            approvedCommentsDiv.appendChild(commentDiv);
        });
    }
    
    // تغییر رمز
    document.getElementById('changePassword').addEventListener('click', function() {
        const newPassword = document.getElementById('adminPassword').value;
        const confirmPassword = document.getElementById('adminPasswordConfirm').value;
        
        if (!newPassword) {
            alert('لطفاً رمز جدید را وارد کنید.');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('رمزها مطابقت ندارند!');
            return;
        }
        
        localStorage.setItem('adminPassword', newPassword);
        alert('رمز با موفقیت تغییر کرد!');
        
        // پاک کردن فیلدها
        document.getElementById('adminPassword').value = '';
        document.getElementById('adminPasswordConfirm').value = '';
    });
    
    // پاک کردن تمام داده‌ها
    document.getElementById('clearAllData').addEventListener('click', function() {
        if (confirm('آیا مطمئن هستید؟ تمامی دیدگاه‌ها، امتیازها و تنظیمات پاک خواهند شد.')) {
            localStorage.clear();
            alert('تمامی داده‌ها پاک شدند!');
            location.reload();
        }
    });
});

// تعریف توابع مدیریت دیدگاه‌ها در scope جهانی
window.approveSiteComment = function(commentId) {
    const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
    const commentIndex = comments.findIndex(c => c.id === commentId);
    
    if (commentIndex !== -1) {
        comments[commentIndex].status = 'approved';
        localStorage.setItem('siteComments', JSON.stringify(comments));
        
        // به‌روزرسانی نمایش
        if (document.getElementById('pendingComments') && document.getElementById('approvedComments')) {
            const adminPanelActive = document.getElementById('adminPanel')?.classList.contains('active');
            if (adminPanelActive) {
                // بارگذاری مجدد بخش‌های مدیریت
                const pendingComments = document.getElementById('pendingComments');
                const approvedComments = document.getElementById('approvedComments');
                if (pendingComments && approvedComments) {
                    // می‌توانید اینجا دوباره توابع loadPendingSiteComments و loadApprovedSiteComments را فراخوانی کنید
                    // اما به دلیل scope، بهتر است که صفحه را refresh کنیم یا توابع را global کنیم
                    location.reload(); // راه حل ساده
                }
            }
        }
        
        // به‌روزرسانی دیدگاه‌ها در صفحه اصلی
        const commentsList = document.getElementById('siteCommentsList');
        const approvedComments = comments.filter(c => c.status === 'approved');
        
        if (approvedComments.length === 0) {
            commentsList.innerHTML = '<p style="text-align: center; color: #666;">هنوز دیدگاهی ثبت نشده است. شما اولین نفر باشید!</p>';
        } else {
            // بارگذاری مجدد دیدگاه‌ها
            commentsList.innerHTML = '';
            approvedComments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment-item';
                
                const date = new Date(comment.date).toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                let replyHtml = '';
                if (comment.adminReply) {
                    const replyDate = comment.replyDate ? new Date(comment.replyDate).toLocaleDateString('fa-IR') : 'امروز';
                    replyHtml = `
                        <div class="comment-reply admin-reply">
                            <div class="reply-header">
                                <strong><i class="fa fa-check-circle"></i> پاسخ مدیر</strong>
                                <span class="reply-date">${replyDate}</span>
                            </div>
                            <div class="reply-body">
                                <p>${comment.adminReply}</p>
                            </div>
                        </div>
                    `;
                }
                
                commentDiv.innerHTML = `
                    <div class="comment-header">
                        <div class="comment-author">
                            <div class="author-avatar">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="author-info">
                                <strong>${comment.name}</strong>
                                <span class="comment-date">${date}</span>
                            </div>
                        </div>
                    </div>
                    <div class="comment-body">
                        <p>${comment.text}</p>
                    </div>
                    ${replyHtml}
                `;
                
                commentsList.appendChild(commentDiv);
            });
        }
        
        alert('دیدگاه تأیید شد!');
    }
};

window.rejectSiteComment = function(commentId) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این دیدگاه را رد کنید؟')) {
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        const filteredComments = comments.filter(c => c.id !== commentId);
        localStorage.setItem('siteComments', JSON.stringify(filteredComments));
        
        alert('دیدگاه رد شد!');
        location.reload(); // راه حل ساده برای به‌روزرسانی پنل مدیریت
    }
};

window.deleteSiteComment = function(commentId) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این دیدگاه را حذف کنید؟')) {
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        const filteredComments = comments.filter(c => c.id !== commentId);
        localStorage.setItem('siteComments', JSON.stringify(filteredComments));
        
        // به‌روزرسانی دیدگاه‌ها در صفحه اصلی
        const commentsList = document.getElementById('siteCommentsList');
        const approvedComments = filteredComments.filter(c => c.status === 'approved');
        
        if (approvedComments.length === 0) {
            commentsList.innerHTML = '<p style="text-align: center; color: #666;">هنوز دیدگاهی ثبت نشده است. شما اولین نفر باشید!</p>';
        } else {
            commentsList.innerHTML = '';
            approvedComments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment-item';
                
                const date = new Date(comment.date).toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                let replyHtml = '';
                if (comment.adminReply) {
                    const replyDate = comment.replyDate ? new Date(comment.replyDate).toLocaleDateString('fa-IR') : 'امروز';
                    replyHtml = `
                        <div class="comment-reply admin-reply">
                            <div class="reply-header">
                                <strong><i class="fa fa-check-circle"></i> پاسخ مدیر</strong>
                                <span class="reply-date">${replyDate}</span>
                            </div>
                            <div class="reply-body">
                                <p>${comment.adminReply}</p>
                            </div>
                        </div>
                    `;
                }
                
                commentDiv.innerHTML = `
                    <div class="comment-header">
                        <div class="comment-author">
                            <div class="author-avatar">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="author-info">
                                <strong>${comment.name}</strong>
                                <span class="comment-date">${date}</span>
                            </div>
                        </div>
                    </div>
                    <div class="comment-body">
                        <p>${comment.text}</p>
                    </div>
                    ${replyHtml}
                `;
                
                commentsList.appendChild(commentDiv);
            });
        }
        
        alert('دیدگاه حذف شد!');
        location.reload(); // راه حل ساده برای به‌روزرسانی پنل مدیریت
    }
};

window.showSiteReplyForm = function(commentId) {
    const replyForm = document.getElementById(`site-reply-form-${commentId}`) || 
                     document.getElementById(`site-reply-form-approved-${commentId}`);
    
    if (replyForm) {
        replyForm.style.display = replyForm.style.display === 'block' ? 'none' : 'block';
    }
};

window.submitSiteReply = function(commentId) {
    const replyTextArea = document.getElementById(`site-reply-text-${commentId}`) || 
                         document.getElementById(`site-reply-text-approved-${commentId}`);
    
    const replyText = replyTextArea.value.trim();
    
    if (!replyText) {
        alert('لطفاً متن پاسخ را وارد کنید.');
        return;
    }
    
    const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
    const commentIndex = comments.findIndex(c => c.id === commentId);
    
    if (commentIndex !== -1) {
        comments[commentIndex].adminReply = replyText;
        comments[commentIndex].replyDate = new Date().toISOString();
        localStorage.setItem('siteComments', JSON.stringify(comments));
        
        alert('پاسخ ارسال شد!');
        replyTextArea.value = '';
        
        const replyForm = document.getElementById(`site-reply-form-${commentId}`) || 
                         document.getElementById(`site-reply-form-approved-${commentId}`);
        if (replyForm) {
            replyForm.style.display = 'none';
        }
        
        location.reload(); // راه حل ساده برای به‌روزرسانی نمایش
    }
};

// کدهای موجود قبلی
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = document.getElementById('form-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'در حال ارسال...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 5000);
        });
    }
    
    const searchForm = document.getElementById('search');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'در حال ارسال...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 5000);
        });
    }
    
    if(window.location.search.includes('success=true')) {
        alert('پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.');
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    const preHeader = document.querySelector('.pre-header');
    const mainHeader = document.querySelector('.header-area');
    
    if (preHeader) {
        const preHeaderHeight = preHeader.offsetHeight;
        
        document.body.style.paddingTop = preHeaderHeight + 'px';
        
        window.addEventListener('resize', function() {
            const newHeight = preHeader.offsetHeight;
            document.body.style.paddingTop = newHeight + 'px';
        });
    }
    
    document.querySelectorAll('a.scroll-to-section').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = preHeader ? preHeader.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        if (preHeader) {
            if (window.scrollY > 50) {
                preHeader.style.background = 'rgba(255, 255, 255, 0.9)';
                preHeader.style.backdropFilter = 'blur(12px) saturate(180%)';
                preHeader.style.webkitBackdropFilter = 'blur(12px) saturate(180%)';
                preHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                preHeader.style.background = 'rgba(255, 255, 255, 0.95)';
                preHeader.style.backdropFilter = 'blur(15px) saturate(180%)';
                preHeader.style.webkitBackdropFilter = 'blur(15px) saturate(180%)';
                preHeader.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.1)';
            }
        }
    });
});

// انیمیشن مهارت‌ها
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                const progressBar = item.querySelector('.progress-bar');
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }, index * 200);
        });
    }
    
    // اجرای انیمیشن هنگام اسکرول به بخش
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
});