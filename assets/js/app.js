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
        if ($('.slider-theme_product:not(.init-single)').length) {
            $('.slider-theme_product:not(.init-single)').each(function () {
                let sliderProductID = $(this).attr('id');
                new Swiper(`#${sliderProductID} .swiper`, {
                    speed: 1500,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 10000,
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

    let [imagesThumb, imagesAvatar] = [];
    let initSliderImages = function () {
        imagesThumb = new Swiper('#sliderImagesThumb .swiper', {
            spaceBetween: 10,
            slidesPerView: 6,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            breakpoints: {
                320: {
                    slidesPerView: 3.25,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        });

        imagesAvatar = new Swiper('#sliderImagesAvatar .swiper', {
            thumbs: {
                swiper: imagesThumb,
            },
            slidesPerView: 1,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            navigation: {
                nextEl: '#sliderImagesAvatar .button-next',
                prevEl: '#sliderImagesAvatar .button-prev',
            },
        });
    }


    let [imagesThumbMB, imagesAvatarMB] = [];
    let initSliderImagesMB = function () {
        imagesThumbMB = new Swiper('#sliderImagesThumbMB .swiper', {
            spaceBetween: 10,
            slidesPerView: 6,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            breakpoints: {
                320: {
                    slidesPerView: 3.25,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        });

        imagesAvatarMB = new Swiper('#sliderImagesAvatarMB .swiper', {
            thumbs: {
                swiper: imagesThumbMB,
            },
            slidesPerView: 1,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            navigation: {
                nextEl: '#sliderImagesAvatarMB .button-next',
                prevEl: '#sliderImagesAvatarMB .button-prev',
            },
        });
    }

    let handlePaymentRadio = function () {
        $('.payment-ratio').click(function () {
            if ($(this).hasClass('is-checked')) {
                $(this).removeClass('is-checked');
            } else {
                $('.payment-ratio').removeClass('is-checked');
                $(this).addClass('is-checked');
            }
        })
    }
    let configTooltip = function () {

    }

    let handlePaymentTooltip = function () {
        let eventTooltip = 'click';
        if (windowWidth >= 992) {
            eventTooltip = 'mouseover';
        }
        $(document).on(eventTooltip, '.payment-tooltip', function (e) {
            console.log(1);
            e.preventDefault();
            let renderHTML = `<div style="color: #000000">
                                <span>
                                    <strong>- Thanh toán qua 3 kỳ</strong>
                                    ( thanh toán trước chỉ với ~33% )
                                    <br>
                                    <strong>- Miễn lãi, miễn phí, không chênh lệch giá trả thẳng.</strong>
                                    <br>
                                    <strong>- Duyệt nhanh trong 5s</strong>
                                    chỉ với 1 ảnh mặt trước CMND/CCCD, không cần tải App.
                                    <br>
                                    <strong>- Thanh toán các kỳ tiện lợi:&nbsp;</strong>
                                </span>
                                <span>Chuyển khoản, ATM, Visa, Mastercard.</span>
                                <br>
                                <span>
                                    -<strong>&nbsp;Áp dụng cho các sản phẩm từ 300.000đ - 10.000.000đ.</strong>
                                    <br>
                                    <br>
                                    <strong>ĐIỀU KIỆN </strong>
                                    <br>- Sim chính chủ ( Viettel, Mobifone, Vinaphone )
                                    <br>- CMND/CCCD gốc ( xác thực online )
                                    <br>- Công dân Việt Nam trên 18 tuổi
                                    <br>
                                    <br>
                                    <strong>KHUYẾN MÃI</strong>
                                </span>
                                <br>- Nhập mã <span style="color:#FF0000;"><strong>FUNDIIN50 </strong></span>giảm ngay
                                <span style="color:#FF0000;"><strong>50.000đ </strong></span>cho đơn hàng từ 300.000đ<br>- Mã giảm giá chỉ được sử
                                dụng 1 lần tại Điện Máy Xanh hoặc Thế Giới Di Động trong thời gian: <strong>20.05.2022 - 20.08.2022</strong>
                            </div>`;

            const tooltipElement = document.querySelector('#' + $(this).attr('id'));

            let tooltip = new bootstrap.Tooltip(tooltipElement, {
                html: true,
                placement: 'bottom',
                container: $(this).closest('.product-payments')[0],
                sanitize: false,
            });

            $(this).attr('data-bs-original-title', renderHTML);
            bootstrap.Tooltip.getInstance('#' + $(this).attr('id'));
            tooltip.show();
        });
    }

    let handleLoadPromoProduct = function () {
        $('.product-promo_load').click(function () {
            $(this).parent().prev('.product-promo_body').children('ul').children('li.d-none').removeClass('d-none');
            $(this).parent().remove();
        });
    }

    let initSliderRelated = function () {
        if ($('#sliderProductRelated').length) {
            new Swiper(`#sliderProductRelated .swiper`, {
                speed: 1500,
                spaceBetween: 0,
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: true,
                },
                lazy: {
                    loadOnTransitionStart: true
                },
                preloadImages: true,
                loop: false,
                direction: 'horizontal',
                navigation: {
                    nextEl: `#sliderProductRelated .button-next`,
                    prevEl: `#sliderProductRelated .button-prev`,
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
        }
    }

    let [popupImagesThumb, popupImagesAvatar] = [];
    let initSliderPopupImages = function () {
        popupImagesThumb = new Swiper('#sliderPopupImagesThumb .swiper', {
            spaceBetween: 10,
            slidesPerView: 6,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            breakpoints: {
                320: {
                    slidesPerView: 3.25,
                },
                1199: {
                    slidesPerView: 8,
                },
            },
        });

        popupImagesAvatar = new Swiper('#sliderPopupImagesAvatar .swiper', {
            thumbs: {
                swiper: popupImagesThumb,
            },
            slidesPerView: 1,
            lazy: {
                loadOnTransitionStart: true
            },
            preloadImages: true,
            navigation: {
                nextEl: '#sliderPopupImagesAvatar .button-next',
                prevEl: '#sliderPopupImagesAvatar .button-prev',
            },
        });
    }

    let handlePopupDetail = function () {
        $('#popupDetailProduct').on('show.bs.modal', function (e) {
            setTimeout(function () {
                $('.modal-backdrop').addClass('modal-backdrop--popupDetail');
            });
        });

        $('.product-handleTab').click(function () {
            let tabID = $(this).attr('data-popup-target');
            $('#popupDetailProduct .nav-tabs .nav-link[data-bs-target="' + tabID + '"]').tab("show");
        });
    }

    let handleLoadHTML = function () {
        $('.handleLoadHTML').click(function () {
            $(this).parents('.section-html').addClass('is-show');
            $(this).parent().remove();
        });
    }

    let handleDropdownItem = function () {
        $('.handleDropdownItem').click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('is-active');
            if ($('.handleDropdownItem.is-active').length) {
                // Gỡ bỏ disabled button xem kết quả
                // Chỗ này nữa em xử lý lại nha
                $(this).closest('.dropdown-menu_body').next('.dropdown-menu_footer').removeClass('d-none').addClass('d-flex');
                $(this).closest('.dropdown-menu_body').next('.dropdown-menu_footer').find('.button-result').removeClass('disabled').attr('disabled', false);
            } else {
                $(this).closest('.dropdown-menu_body').next('.dropdown-menu_footer').removeClass('d-flex').addClass('d-none');
                $(this).closest('.dropdown-menu_body').next('.dropdown-menu_footer').find('.button-result').addClass('disabled').attr('disabled', true);
            }
        });
    }

    let formatValue = wNumb({
        decimals: 0,
        thousand: '.',
        suffix: '',
    });

    let handlePriceFilterSlider = function () {
        let priceFilterSlider = $('#priceFilterSlider');
        if (priceFilterSlider.length) {
            noUiSlider.create(priceFilterSlider[0], {
                start: [3500, 35000],
                step: 1,
                range: {
                    'min': [3500],
                    'max': [35000]
                },
                format: formatValue,
                connect: true
            });

            priceFilterSlider[0].noUiSlider.on('update', function (values) {
                $('input[name=priceFilter-input_min]').val(values[0]);
                $('input[name=priceFilter-input_max]').val(values[1]);
            });
        }
    }

    let handlePriceSlider = function () {
        let priceSlider = $('#priceSlider');
        if (priceSlider.length) {
            noUiSlider.create(priceSlider[0], {
                start: [3500, 35000],
                step: 1,
                range: {
                    'min': [3500],
                    'max': [35000]
                },
                format: formatValue,
                connect: true
            });

            priceSlider[0].noUiSlider.on('update', function (values) {
                $('input[name=price-input_min]').val(values[0]);
                $('input[name=price-input_max]').val(values[1]);
            });
        }
    }

    let preventDefault = function () {
        $('.preventDefault').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
        })
    }

    let handleCollapsePromoCart = function () {
        $('#cart-list [data-bs-toggle=collapse]').on('shown.bs.collapse', function (e) {
            $(this).attr('data-text', $(this).html());
            $(this).html('Thu gọn <i class="fas fa-caret-up"></i>');
        }).on('hide.bs.collapse', function (e) {
            $(this).html($(this).attr('data-text'));
        })
    }

    $(document).ready(function () {
        configLazyLoad();
        preventDefault();
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

        // chi tiết sản phẩm
        initSliderImages();
        initSliderImagesMB();
        initSliderRelated();
        handlePaymentRadio();
        handlePaymentTooltip();
        handleLoadPromoProduct();

        initSliderPopupImages();
        handlePopupDetail();

        //  Danh mục sản phẩm
        handleLoadHTML();
        handleDropdownItem();
        handlePriceFilterSlider();
        handlePriceSlider();

        // Cart
        handleCollapsePromoCart();
    });

})
(jQuery);