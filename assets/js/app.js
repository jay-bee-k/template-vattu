;(function ($) {
    'use strict';
    let windowWidth = $(window).width();

    let handleTouchMoveNavigation = function (ev) {
        if (!$(ev.target).closest('#header-navigation').length) {
            ev.preventDefault();
        }
    }
    const handleHeaderMobile = () => {
        if (windowWidth < 992) {
            let elmBody = $('body'),
                elmHamburger = $('#header-hamburger'),
                elmNavigation = $('#header-navigation'),
                elmOverlay = $('#header-overlay');

            elmNavigation.find('li > .navigation-mega_sub > .navigation-mega_sub__item').map(function (index) {
                $(this).parent().prev('a').attr({
                    'data-bs-toggle': 'collapse',
                    'data-bs-target': "#header-sub_" + index,
                });
                $(this).parent().attr({
                    "id": "header-sub_" + index,
                    "class": "navigation-mega_sub collapse",
                    "data-bs-parent": "#header-navigation"
                });
            });

            elmHamburger.click(function () {
                if (elmBody.hasClass('is-show_navigation')) {
                    elmBody.attr({
                        'class': '',
                        'style': ''
                    });
                    document.removeEventListener('touchmove', handleTouchMoveNavigation);
                    elmNavigation.find('.collapse').collapse('hide');
                } else {
                    document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
                    elmBody.attr({
                        'class': 'is-show_navigation',
                        'style': 'overflow-y: hidden'
                    });
                }
            });

            elmOverlay.click(() => {
                elmHamburger.trigger('click')
            });
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
                    delay: 10000,
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
                    delay: 10000,
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
                    768: {
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
                        delay: 10000,
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
                        768: {
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
                        delay: 1000000000,
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
                            slidesPerView: 1.5,
                        },
                        375: {
                            slidesPerView: 2.25,
                        },
                        991: {
                            slidesPerView: 3.25,
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
                    delay: 10000,
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
                    delay: 10000,
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
    let i = 0, j = 0;
    let initSliderMedia = function () {
        mediaThumb = new Swiper('#sliderMediaThumb .swiper', {
            spaceBetween: 4,
            slidesPerView: 3,
            lazy: {
                loadOnTransitionStart: true
            },
            observer: true,
            observeParents: true,
            preloadImages: true,
            breakpoints: {
                320: {
                    slidesPerView: 3.25,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
            on: {
                observerUpdate: function (swiper) {
                    j = $('div#sliderMediaThumb').height();
                    $('#mediaVideo .media-video_list').css('maxHeight', j + 'px');
                },
            }
        });

        mediaAvatar = new Swiper('#sliderMediaAvatar .swiper', {
            thumbs: {
                swiper: mediaThumb,
            },
            slidesPerView: 1,
            lazy: {
                loadOnTransitionStart: true
            },
            observer: true,
            observeParents: true,
            preloadImages: true,
            navigation: {
                nextEl: '#sliderMedia .button-next',
                prevEl: '#sliderMedia .button-prev',
            },
            on: {
                observerUpdate: function (swiper) {
                    i = $('div#sliderMediaAvatar').height();
                    $('#mediaVideo .media-video_list').css('maxHeight', $('#mediaVideo .media-video_list').innerHeight() + i - 15 + 'px');
                },
            }
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

    let handleLoadProduct = function () {
        $('.load-product').click(function () {
            let id = $(this).attr('data-id');
            let renderHTML = '';
            for (let i = 0; i <= 9; i++) {
                renderHTML += `<div class="col">
                            <div class="product-card card bg-white rounded-3 border-0 h-100">
                                <div class="card-header border-0 p-0 bg-white">
                                    <div class="card-label">
                                        Trả góp 0%
                                    </div>
                                    <div class="card-sale">
                                        <span>
                                            Giảm 13%
                                        </span>
                                    </div>
                                    <div class="card-image position-relative overflow-hidden d-flex align-items-center">
                                        <img data-src="./assets/images/product/aqua-88-kg-aqw-fr88gtbk-300x300.jpg"
                                             class="lazy img-fluid" alt="">
                                    </div>
                                </div>
                                <div class="card-body px-0 pb-0">
                                    <div class="card-label card-label_giamgia">
                                        <img src="./assets/images/icon1-50x50.png" alt="">
                                        <span>Giảm sốc</span>
                                    </div>
                                    <div class="card-title">
                                        Aqua 8.8 Kg AQW-FR88GT.BK
                                    </div>
                                    <div class="card-text">
                                        Online giá rẻ
                                    </div>
                                    <div class="card-price">
                                        5.990.000₫
                                        <del>
                                            7.990.000₫
                                        </del>
                                    </div>
                                    <div class="card-desc">
                                        Giảm thêm 200.000₫ và Quà 1.300.000₫
                                    </div>
                                    <div class="card-rate">
                                        <b>4.4</b>
                                        <i class="fas fa-star"></i>
                                        (53)
                                    </div>
                                </div>
                                <a href="" class="stretched-link"></a>
                            </div>
                        </div>`;
            }

            $(`#${id}`).append(renderHTML);
            configLazyLoad();
        });
    }

    let handleLoadFooter = function () {
        $('.load-footer').click(function () {
            let listLi = $(this).closest('ul').find('li.is-hidden');
            if (listLi.hasClass('d-block')) {
                listLi.removeClass('d-block');
                $(this).html('Xem thêm&nbsp;<i class="fas fa-caret-down"></i>');
            } else {
                listLi.addClass('d-block');
                $(this).html('Thu gọn&nbsp;<i class="fas fa-caret-up"></i>');
            }
        });
    }

    let handleDropdownSearch = function () {
        $('.form-search').keyup(function () {
            let valueInput = $(this).val();
            if (valueInput.length >= 3) {
                $(this).closest('.header-search_wrapper').addClass('is-show');
            } else {
                $(this).closest('.header-search_wrapper').removeClass('is-show');
            }
        });

        $(document).on('mouseup', function (e) {
            let elm = $('.header-search_wrapper.is-show');

            if (!elm.is(e.target) && elm.has(e.target).length === 0) {
                elm.removeClass('is-show');
            }
        });
    }

    $(document).ready(function () {
        configLazyLoad();
        handleHeaderMobile();

        initSliderHeader();
        initSliderHero();
        initMultiSliderBanner();
        initMultiSliderProduct();
        initSliderBrand();
        initSliderArticles();
        initSliderMedia();

        handleLimitCategories();
        handleLoadProduct();
        handleLoadFooter();
        handleDropdownSearch();
    });

})(jQuery);