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

    let initMultiSliderBanner = function () {
        if ($('.slider-banner').length) {
            $('.slider-banner').each(function () {
                let sliderBannerID = $(this).attr('id');
                new Swiper(`#${sliderBannerID} .swiper`, {
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
                        nextEl: `#${sliderBannerID} .button-next`,
                        prevEl: `#${sliderBannerID} .button-prev`,
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
                        delay: 800000,
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

    let initSliderBrand = function () {
        if ($('#sliderBrand').length) {
            new Swiper(`#sliderBrand .swiper`, {
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
                    nextEl: `#sliderBrand .button-next`,
                    prevEl: `#sliderBrand .button-prev`,
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
                        slidesPerView: 4,
                    }
                }
            });
        }
    }

    let initSliderArticles = function () {
        if ($('#sliderArticles').length) {
            new Swiper(`#sliderArticles .swiper`, {
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
                    prevEl: '#sliderArticles .button-prev',
                    nextEl: '#sliderArticles .button-next',
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
                        slidesPerView: 4,
                    }
                }
            });
        }
    }

    let [mediaThumb, mediaAvatar] = [];
    let initSliderMedia = function () {
        mediaThumb = new Swiper('#sliderMediaThumb .swiper', {
            spaceBetween: 4,
            slidesPerView: 3,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            breakpoints: {
                320: {
                    slidesPerView: 2.75,
                },
                525: {
                    slidesPerView: 3.4,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });

        mediaAvatar = new Swiper('#sliderMediaAvatar .swiper', {
            thumbs: {
                swiper: mediaThumb,
            },
            slidesPerView: 1,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            navigation: {
                nextEl: '#sliderMedia .button-next',
                prevEl: '#sliderMedia .button-prev',
            },
        });

        handleZoomSliderMedia($('#sliderMedia [data-fancybox=slider-avaThumb]'), mediaAvatar, mediaThumb);
    }

    let handleZoomSliderMedia = function (elm, mediaAvatar, mediaThumb) {
        let i = 0;
        elm.click(function () {
            i = 0;
        });

        elm.fancybox({
            touch: true,
            loop: true,
            beforeShow: function (instance, current) {
                let index = $(`#sliderMedia [data-fancybox='slider-avaThumb'][href='${current.src}']`).attr('data-index');
                mediaAvatar.slideTo(index);
                mediaThumb.slideTo(index);
            },
        });
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
        initMultiSliderBanner();
        initMultiSliderProduct();
        initSliderBrand();
        initSliderArticles();
        initSliderMedia();
        handleLimitCategories();
    });

})(jQuery);