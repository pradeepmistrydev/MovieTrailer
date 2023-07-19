//for menu active

$('.nav_menu li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

//for rating system

$('.feedback_rating p').click(function () {
    $(this).addClass('fa-star').prevAll().addClass('fa-star').removeClass('fa-star-o');
});

$('.feedback_rating p').dblclick(function () {
    $(this).removeClass('fa-star').addClass('fa-star-o').nextAll().removeClass('fa-star').addClass('fa-star-o');
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


function scrollToTop() {
    $(window).scrollTop(0);
}