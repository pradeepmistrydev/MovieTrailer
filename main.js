//for menu active

$('.nav_menu li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

//for rating system

$('.feedback_rating p').hover(function () {
    $(this).addClass('fa-star').prevAll().addClass('fa-star');
});


//for hamburger menu
$('.close_icon').hide();
$('.toggler').click(function () {
    $('.nav_menu').show();
    $(this).hide();
    $('.close_icon').show();
})
$('.close_icon').click(function () {
    $('.nav_menu').hide();
    $(this).hide();
    $('.toggler').show();
})
