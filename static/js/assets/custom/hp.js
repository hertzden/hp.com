(function ($) {
    'use strict';

        /** Back to top **/
        (function () {
            var backTopVisible = false;
            var backTopEvent = false;
            var $backTop = $('#back-top');
            $backTop.on('click', function () {
                $backTop.velocity({ bottom: "-=20px", opacity: 0 }, { visibility: "hidden" });
                $("body").velocity("scroll", { duration: 1000,
                    begin: function() { backTopEvent = true },
                    complete: function() { backTopEvent = false; backTopVisible = false }
                });
                return false;
            });

            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = window.pageYOffset;
                    if (scrollTop > scrollTrigger && !backTopVisible) {
                        backTopVisible = true;
                        $backTop.velocity({ bottom: '+=20px', opacity: 1 }, { visibility: 'visible', duration: 600 });
                    } else if (scrollTop <= scrollTrigger && backTopVisible && !backTopEvent) {
                        backTopVisible = false;
                        $backTop.velocity({ bottom: "-=20px", opacity: 0 }, { visibility: "hidden", duration: 600 });
                    }
                };
            backToTop();
            $(window).on('scroll', backToTop);
        })();

})(jQuery);









