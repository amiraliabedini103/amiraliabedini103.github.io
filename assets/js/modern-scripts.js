// اسکریپت برای افکت‌های کارت‌های مدرن
$(document).ready(function() {
    // افکت hover برای کارت‌های مدرن
    $('.modern-card, .about-card-modern, .skills-card-modern').hover(
      function() {
        $(this).css('transform', 'translateY(-10px)');
      },
      function() {
        $(this).css('transform', 'translateY(0)');
      }
    );
    
    // انیمیشن میله‌های مهارت‌ها
    $('.skill-modern-progress-bar').each(function() {
      const width = $(this).css('width');
      $(this).css('width', '0');
      
      setTimeout(() => {
        $(this).animate({
          width: width
        }, 1500);
      }, 300);
    });
    
    // افکت تایپینگ برای تیترهای اصلی
    const sectionTitles = $('.section-modern-title');
    sectionTitles.each(function(index) {
      const originalText = $(this).text();
      $(this).text('');
      
      let i = 0;
      function typeWriter(element, text, speed) {
        if (i < text.length) {
          element.append(text.charAt(i));
          i++;
          setTimeout(() => typeWriter(element, text, speed), speed);
        }
      }
      
      // فقط اگر عنصر در viewport باشد، انیمیشن را اجرا کن
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        setTimeout(() => typeWriter($(this), originalText, 50 + (index * 20)), 500 + (index * 300));
      }
    });
    
    // افکت موجی برای کارت‌های خدمات
    $('.wave-effect').on('mouseenter', function(e) {
      const card = $(this);
      const x = e.pageX - card.offset().left;
      const y = e.pageY - card.offset().top;
      
      card.find('::before').css({
        'top': y + 'px',
        'right': x + 'px'
      });
    });
    
    // اضافه کردن کلاس انیمیشن بعد از لود صفحه
    setTimeout(() => {
      $('.modern-card, .about-card-modern, .skills-card-modern').addClass('animated');
    }, 1000);
  });
  