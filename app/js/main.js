$(function(){
    $('.header__menu-item').on('click', function () {
        $('.header__menu-item').toggleClass('header__menu-item--active');
        $('.header__menu-burger-wrapper').toggleClass('header__menu-burger-wrapper--active');
    });
    $('.header__menu-item').on('click', function () {
        $('.header__menu-burger-item').toggleClass('header__menu-burger-item--active');
    });
})