setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 2000, $(document).ready(function () {

    //icon menu
    $(".icon-menu button").on("click", function () {
        $(".nav-links ul").toggleClass("open");
        $(".nav-links .icon-menu i").toggleClass("fa-times-circle-o").toggleClass("fa-ellipsis-h");
        $("body").toggleClass('position-fixed');
    });
    /*scroll to top*/
    $(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
            $("#back-to-top").addClass('b-show_scrollBut');
        }else{
            $("#back-to-top").removeClass('b-show_scrollBut');
        }
    });
    $("#back-to-top").on("click", function(){
        $('body,html').animate({
            scrollTop: 0,
        }, 100);
    });
    //liste menu and mobile
    var $slide = $("#slide"),
        $ul = $(".nav-links ul"),
        $icon_menu = $(".nav-links .icon-menu i"),
        $btnRetourAccueil = $(".portfolio .retour-accueil button"),
        $mAccueil = $("#menu-accueil"),
        $mArticle = $("#menu-article");
    $(".presentation button").on("click", function () {
        $slide.addClass("in").removeClass("out");
        $(".portfolio section").show().css({display: "flex"});
    });
    $btnRetourAccueil.on("click", function () {
        $slide.removeClass("in").addClass("out");
        $(".portfolio section").fadeToggle(1000);
    });
    $(".nav-links #menu-article").on("click", function () {
        $slide.removeClass("in").addClass("out");
        $ul.toggleClass("open");
        //icon change
        $icon_menu.toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");
        //menu active
        $mArticle.addClass("active");
        $mAccueil.removeClass("active");

    });
    //animation accueil
    var $moi = $(".accueil .presentation .moi"),
        $h2 = $(".accueil .presentation h2");
    $moi.delay(2000).animate({opacity: 1, top: 0},1000, function () {
        $h2.css({position: "relative", top: 5}).animate({opacity: 1, top: 0 }, 1000);
    });
    /*box article*/
    $('.box').on('mouseenter', function () {
        $(this).parent().prev().children(".cercle").addClass("cercle-open");
    }).on('mouseleave', function () {
        $('.cercle').removeClass("cercle-open");
    });
    $('.ligne-y').each(function () {
        $(this).delay(1600).animate({height: 30}, 1200);
    })
}));
