// ======== BoostFPS.js ========
// هذا السكريبت لتحسين الأداء ورفع معدل الإطارات (FPS) في الموقع

(function() {
    console.log("🚀 BoostFPS script running...");

    // تحسين التعامل مع الأحداث الثقيلة (scroll, resize, mousemove)
    let ticking = false;
    function optimizeFPS(callback) {
        if (!ticking) {
            requestAnimationFrame(function() {
                callback();
                ticking = false;
            });
            ticking = true;
        }
    }

    // تحسين السكروول
    window.addEventListener('scroll', function() {
        optimizeFPS(() => {
            // هنا ضع كودك إذا أردت تحديث أشياء أثناء السكروول
        });
    }, { passive: true });

    // تحسين الريسايز
    window.addEventListener('resize', function() {
        optimizeFPS(() => {
            // هنا ضع كودك إذا أردت تحديث أشياء أثناء تغيير حجم الشاشة
        });
    }, { passive: true });

    // إجبار المتصفح على استخدام الـGPU في العرض
    document.documentElement.style.transform = "translateZ(0)";
    document.documentElement.style.backfaceVisibility = "hidden";

    console.log("✅ BoostFPS initialized");
})();
