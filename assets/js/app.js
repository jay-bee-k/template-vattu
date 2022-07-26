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
            visibleOnly: true,
        });
    }

    $(document).ready(function () {
        configLazyLoad();
    });

})(jQuery);