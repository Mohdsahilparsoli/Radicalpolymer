/*!
 * Radical Polymers - main script
 * Requires: jQuery 3.6, Waypoints 4.0.1, Numinate, Swiper 7.3.3
 */
(function ($) {
    "use strict";

    var $window = $(window);

    /* -----------------------------------------
     * 1. Counter animation (Numinate + Waypoints)
     * ----------------------------------------- */
    $("[data-appear-animation]").each(function () {
        var $counter = $(this);

        if ($window.width() <= 959) {
            $counter.html($counter.data("to"));
            return;
        }

        $counter.html("0");
        $counter.waypoint(function () {
            if ($counter.hasClass("completed")) {
                return;
            }
            $counter.numinate({
                format: "%counter%",
                from: $counter.data("from"),
                to: $counter.data("to"),
                runningInterval: 2000,
                stepUnit: $counter.data("interval"),
                onComplete: function () {
                    $counter.addClass("completed");
                }
            });
        }, { offset: "85%" });
    });

    /* -----------------------------------------
     * 2. Sticky header
     * ----------------------------------------- */
    var $menu = $(".site-header-menu");

    if ($(".site-header-menu-wrapper").length === 0) {
        $menu.wrap('<div class="site-header-menu-wrapper"></div>');
    }
    var $menuWrapper = $(".site-header-menu-wrapper");

    function setMenuWrapperHeight() {
        if ($window.width() < 1200) {
            $menuWrapper.css({ height: "", "margin-bottom": "" });
        } else {
            $menuWrapper
                .height($menuWrapper.height())
                .css("margin-bottom", $menu.css("margin-bottom"));
        }
    }
    setMenuWrapperHeight();
    $window.on("resize", setMenuWrapperHeight);

    $window.on("scroll", function () {
        $menu.toggleClass("sticky-header", $window.scrollTop() >= 150);
    });

    /* -----------------------------------------
     * 3. Swiper sliders
     * ----------------------------------------- */
    var responsiveColumns = {
        1: [1, 1, 1, 1, 1],
        2: [2, 2, 2, 2, 1],
        3: [3, 2, 2, 2, 1],
        4: [4, 4, 3, 2, 1],
        5: [5, 4, 3, 2, 1],
        6: [6, 4, 3, 2, 1]
    };

    $(".swiper-slider").each(function (index) {
        var $slider = $(this);
        var id = index + 1;
        var columns = $slider.data("columns");
        var items = responsiveColumns[columns] || [3, 3, 3, 2, 1];
        var showDots = $slider.data("dots") === true;
        var showArrows = $slider.data("arrows") === true;
        var margin = $slider.data("margin");

        $slider.addClass("pbmit-element-viewtype-carousel-" + id);

        if (showDots) {
            $slider.append('<div class="swiper-pagination"></div>');
        }

        if (showArrows) {
            var arrowTarget = $slider.data("arrows-class");
            var $arrows = arrowTarget ? $("." + arrowTarget) : $slider;
            $arrows.append(
                '<div class="swiper-buttons">' +
                    '<div class="swiper-button-prev swiper-button-prev-' + id + '"></div>' +
                    '<div class="swiper-button-next swiper-button-next-' + id + '"></div>' +
                "</div>"
            );
        }

        new Swiper(".pbmit-element-viewtype-carousel-" + id, {
            loop: $slider.data("loop"),
            autoplay: $slider.data("autoplay"),
            effect: $slider.data("effect") || "slide",
            speed: 1200,
            slidesPerView: columns,
            spaceBetween: margin === undefined || margin === "" ? 30 : margin,
            centeredSlides: $slider.data("center"),
            grabCursor: false,
            pagination: showDots ? { el: ".swiper-pagination", clickable: true } : false,
            navigation: showArrows
                ? { nextEl: ".swiper-button-next-" + id, prevEl: ".swiper-button-prev-" + id }
                : false,
            breakpoints: {
                1199: { slidesPerView: items[0] },
                991: { slidesPerView: items[1] },
                767: { slidesPerView: items[2] },
                575: { slidesPerView: items[3] },
                0: { slidesPerView: items[4] }
            }
        });
    });

    /* -----------------------------------------
     * 4. Scroll to top button
     * ----------------------------------------- */
    var $toTop = $('<a href="#" class="scroll-to-top" aria-label="Scroll to top"><i class="pbmit-base-icon-arrow-right"></i></a>');
    $("body").append($toTop);

    $window.on("scroll", function () {
        $toTop.toggleClass("show", $window.scrollTop() > 300);
    });

    $toTop.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    /* -----------------------------------------
     * 5. Main menu (dropdown toggles + mobile panel)
     * ----------------------------------------- */
    $(".main-menu ul.navigation li.dropdown").append(
        '<span class="righticon"><i class="ti-angle-down"></i></span>'
    );

    $(".main-menu ul.navigation li.dropdown .righticon").on("click", function () {
        $(this).siblings().toggleClass("open");
        $(this).find("i").toggleClass("ti-angle-down ti-angle-up");
        return false;
    });

    $(".navbar-toggler, .closepanel").on("click", function () {
        $("header").toggleClass("active");
    });

})(jQuery);
