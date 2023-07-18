//for menu active

$('.nav_menu li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

//for rating system

$('.feedback_rating p').hover(function () {
    $(this).addClass('fa-star').prevAll().addClass('fa-star');
});


//for hamburger menu

$('.toggler').click(function () {
    $('.nav_menu').toggle();
})
