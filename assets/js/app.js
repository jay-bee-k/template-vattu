;(function ($) {
    'use strict';
    let windowWidth = $(window).width();

    let handleTouchMoveNavigation = function (ev) {
        if (!$(ev.target).closest('#header-navigation').length) {
            ev.preventDefault();
        }
    }

    let configLazyLoad = function () {
        $('.lazy').Lazy({
            effect: 'fadeIn',
        });
    }

    let initSliderHeader = function () {
        if ($('#sliderHeader .swiper').length) {
            new Swiper('#sliderHeader .swiper', {
                speed: 500,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                effect: "fade",
                loop: true,
                navigation: {
                    nextEl: '#sliderHeader .button-next',
                    prevEl: '#sliderHeader .button-prev',
                },
            });
        }
    }

    let initSliderHero = function () {
        if ($('#sliderHero .swiper').length) {
            new Swiper('#sliderHero .swiper', {
                speed: 1500,
                spaceBetween: 10,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                lazy: {
                    loadOnTransitionStart: true
                },
                preloadImages: true,
                loop: true,
                navigation: {
                    nextEl: '#sliderHero .button-next',
                    prevEl: '#sliderHero .button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1.5,
                    },
                    991: {
                        slidesPerView: 2,
                    }
                }
            });
        }
    }

    let initSliderPromotion = function () {
        if ($('#sliderPromotion .swiper').length) {
            new Swiper('#sliderPromotion .swiper', {
                speed: 1500,
                spaceBetween: 10,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                lazy: {
                    loadOnTransitionStart: true
                },
                preloadImages: true,
                loop: true,
                navigation: {
                    nextEl: '#sliderPromotion .button-next',
                    prevEl: '#sliderPromotion .button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1.5,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 3,
                    }
                }
            });
        }
    }

    let initMultiSliderProduct = function () {
        if ($('.slider-theme_product').length) {
            $('.slider-theme_product').each(function () {
                let sliderProductID = $(this).attr('id');
                new Swiper(`#${sliderProductID} .swiper`, {
                    speed: 1500,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 8000,
                        disableOnInteraction: false,
                    },
                    lazy: {
                        loadOnTransitionStart: true
                    },
                    preloadImages: true,
                    loop: true,
                    navigation: {
                        nextEl: `#${sliderProductID} .button-next`,
                        prevEl: `#${sliderProductID} .button-prev`,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        375: {
                            slidesPerView: 1.5,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        1199: {
                            slidesPerView: 5,
                        }
                    }
                });
            });
        }
    }

    let handleLimitCategories = function () {
        $('#more-categories').click(function () {
            if ($(this).closest('.categories-wrap').hasClass('no-limit')) {
                $(this).closest('.categories-wrap').removeClass('no-limit');
                $(this).find('.categories-title').text('Xem thêm');
            } else {
                $(this).closest('.categories-wrap').addClass('no-limit');
                $(this).find('.categories-title').text('Thu gọn');
            }
        });
    }

    $(document).ready(function () {
        configLazyLoad();

        initSliderHeader();
        initSliderHero();
        initSliderPromotion();
        initMultiSliderProduct();

        handleLimitCategories();
    });

})(jQuery);