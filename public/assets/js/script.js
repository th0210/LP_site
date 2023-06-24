$('.p-header-menu').on('click', function() {
    $('.p-drawer, .p-header-menu__head, .p-header-menu__bar1, .p-header-menu__bar2, .p-header-menu__bar3').toggleClass('is-open');
    $('body').toggleClass('u-no-scroll');
});