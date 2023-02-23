// Slider Slick
$(document).ready(function () {
    $('.sliders').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        easing: 'linear',
        centerMode: false,
        variableWidth: true,
        infinite: true,
        draggable: false,
        adaptiveHeight: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    centerMode: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    centerMode: true,
                    draggable: false,
                    swipe: false
                }
            },
            {
                breakpoint: 468,
                settings: {
                    swipe: true,
                    arrows: false,
                    centerMode: true
                }
            }
        ],
    });
});

// Spoiler block

jQuery(document).ready(function($) {
    $('.footer_menu_title').click(function() {
       $(this).parents('.footer_menu').find('.spoiler_content').toggleClass('open');
           $(this).parents('.footer_menu').find('.spoiler_arrow').toggleClass('open');
    });
  });


// Burger hundler

var menu = document.querySelector(".bottom_menu_list"),
toggle = document.querySelector(".menu-toggle");
    
function toggleToggle() {
toggle.classList.toggle("menu-open");
};
        
function toggleMenu() {
menu.classList.toggle("active");
};
        
toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);
