



$(function () {

    /**events-page-jQuery*/

    // scrollDown --by click on reply.
    $('.comments-box a, .comments-rep-box a').click(function (){
        $('html, body').animate({
            scrollTop: $('.reply-form').offset().top
        }, 1500);
        $('.reply-form').animate({"paddingTop": "65px"}, "slow"); //when used strings usege of "" mark is must.
    });

    // reply-box-open... on click on reply
    // $(".comments-container #reply-generate").click(function () {
    //     $("#show-reply").slideToggle();
    // });

     /** dropdowns.. onclik on add button*/
     var dropdownClick = false;
    $(".top-section .search-box a").click(function (){
        if (dropdownClick === false) {
            $(".top-section .search-box a").addClass("dropdown-onclick");
            $(".add-mosk-dropdown").animate({height: "toggle"}, 500);
            dropdownClick = true;
        } else if (dropdownClick === true) {
            $(this).removeClass("dropdown-onclick");
            $(".add-mosk-dropdown").animate({height: "toggle"}, 500);
            dropdownClick = false;
        }
    });

    /** dropdowns.. onclik on menu bar*/
    var menuClick = false;
    $(".top-section .search-box .menu-bars #top-menu-bar").click(function (){
        if (menuClick === false) {
            $(".top-section .search-box .menu-bars #top-menu-bar").addClass("dropdown-onclick");
            $(".menu-bars-dropdown").animate({height: "toggle"}, 500);
            menuClick = true;
        } else if (menuClick === true) {
            $(this).removeClass("dropdown-onclick");
            $(".menu-bars-dropdown").animate({height: "toggle"}, 500);
            menuClick = false;
        }
    });

    
    /**about-page-functions */
    $(".our-members .slider-nav li").each(function (membersIndex){
        var membersIndexAdded = membersIndex + 1;
        $(this).click(function (){
            $(".our-members .slider-nav li").removeClass("active");
            $(this).addClass("active");

            $(".members-detail").hide();
            $("#members-" + membersIndexAdded).fadeIn(3000);
        })
    });

    /**active on navigation bar */
    $(".nav-section ul li a").click(function (){
        $(".nav-section ul li a").removeClass("active");
        $(this).addClass("active");
    });




    /** when click on Enter key it show and hide the selected id ,class or tag etc.**/
    var menuTrigger = false;
    $(document).keypress(function (e) {
        if (e.which === 13) {//13 keypress for Enter key
            if (menuTrigger === false) {
                $(".top-section").fadeIn(500);
                menuTrigger = true;
            } else if (menuTrigger === true) {
                $(".top-section").fadeOut(500);
                menuTrigger = false;
            }
        }
    });


    /** function to fix the navigation with add and removing class fixed:- styled also in css file **/
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.nav-section').addClass('fixed'); //this class must be added and removed from navigation: the sticky div
            $('.slider, .page-slider').addClass('scroll-top-margin');//and this must be added and removed at lower the div from navigtion or from the sticky part.
        } else {
            $('.nav-section').removeClass('fixed');
            $('.slider, .page-slider').removeClass('scroll-top-margin');
        }
    });


    // $(window).bind('scroll', function (){
    //     if ($(window).scrollTop() > 150){
    //         $(".nav-section").css({
    //             "position": "fixed", 
    //             "top": "0", 
    //             "left": "0", 
    //             "width": "100%", 
    //             "z-index": "9999"});
    //     } else {
    //         $(".nav-section").css("position", "static");
    //     }
    // });


    /** slick-slider= by putting folder of slick in our project folder, then declared slick function accordingly to our requirement. **/
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });


    /** through each() function for all = mean how to functionalized all with looping. when click the current can change itself 
     * and show as active. **/
    $(".urgent-donation .slider-nav li").each(function (index) {
        var added = index + 1;
        $(this).click(function () {
            $(".urgent-donation .slider-nav li").removeClass("active");
            $(this).addClass("active");

            $(".help-to-build").hide();
            $("#donation-slide-" + added).fadeIn();
        });
    });

    /** through separate childs= when click it can chnage itself from hide to show. **/
    // $(".urgent-donation .slider-nav li:first-child").click(function () {
    //     $(".slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").hide();
    //     $(".help-to-build:first-of-type").fadeIn();

    // });

    // $(".urgent-donation .slider-nav li:nth-child(2)").click(function () {
    //     $(".slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").hide();
    //     $(".help-to-build:nth-of-type(2)").fadeIn();

    // });

    // $(".urgent-donation .slider-nav li:nth-child(3)").click(function () {
    //     $(".slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").hide();
    //     $(".help-to-build:nth-of-type(3)").fadeIn();

    // });

    // $(".urgent-donation .slider-nav li:nth-child(4)").click(function () {
    //     $(".slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").hide();
    //     $(".help-to-build:nth-of-type(4)").fadeIn();
    // });


    /** when click it change its state from hide to active (show) **/

    // $(".faqs-about-islam ul li").click(function () {
    //     $(".faqs-about-islam ul li").removeClass("active"); //for that we must uncommet the styling in our css file (p.active display:block) 
    //     $(this).addClass("active");
    // });

    //for slow like slideshow
    $(".faqs-about-islam ul li").click(function () {
        $(".faqs-about-islam ul li").removeClass("active");
        $(this).addClass("active");
        $(".faqs-about-islam ul li.active p").animate({ height: "toggle" }, 500);
        //for that we must commet the styling in our css file (p.active display:block) vice versa:
    });

    // $(".faqs-about-islam ul li").click(function () { // for this we have to uncomment our html and css as well as
    //     var height = $(".faqs-about-islam ul li .para .container").height()
    //     $(".faqs-about-islam ul li .para").animate({
    //         minHeight: 0,
    //         height: 0, 
    //         visibility: 'hidden',
    //         padding:'0',
    //       }, 300 );

    //     $(this).find('.para').animate({ 
    //         minHeight: '40px', 
    //         height: '100%', 
    //         visibility: 'visible', 
    //         padding:'12px 30px',
    //     }, 300 );

    // });


    /**Gallery- light box, closing-button, through escape key.
     * gallery-section-lightbox... onclick to show large image
     */
    $(".gallery-main-container .images a").click(function (e) {
        e.preventDefault();  // not to display the image after alerting the url of large image

        var popupURL = $(this).attr("href"); // to show the url which we want to display in large size

        //  alert(popupURL);
        $("#close-btn, #popup-div, #popuplrg, #popuplrg img").show();
        $("#popuplrg img").attr("src", popupURL);

    });

    //close by clicking close-btn
    $("#close-btn, #popup-div").click(function () {
        $("#popup-div, #popuplrg, #close-btn").hide();

    });

    //close by pressing esc key.
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $("#popup-div, #popuplrg, #close-btn").hide();
        }
    });


    /**our-partner-setion. when click it can change its state like slider.**/
    $(".our-partners .slider-nav li").each(function (partnerIndex) {
        var partnerIndexAdded = partnerIndex + 1;
        $(this).click(function () {
            $(".our-partners .slider-nav li").removeClass("active");
            $(this).addClass("active");

            $(".partner-description").hide();
            $("#partner-" + partnerIndexAdded).fadeIn(3000);

        });
    });


    /** partner-nav-slider ---selected through classes **/
    // $(".our-partners .slider-nav li:first-child").click(function () {
    //     $(".our-partners .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".partner-description").removeClass("active");
    //     $(".partner-description:first-of-type").addClass("active");
    // });

    // $(".our-partners .slider-nav li:nth-child(2)").click(function () {
    //     $(".our-partners .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".partner-description").removeClass("active");
    //     $(".partner-description:nth-of-type(2)").addClass("active");
    // });

    // $(".our-partners .slider-nav li:nth-child(3)").click(function () {
    //     $(".our-partners .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".partner-description").removeClass("active");
    //     $(".partner-description:nth-of-type(3)").addClass("active");
    // });

    /** partner-nav-slider ---selected through different id'z **/
    // $("#our-partner-nav li:nth-child(1)").click(function () {
    //     $("#our-partner-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".partner-description").removeClass("active");
    //     $("#partner-1").addClass("active");
    // });

    // $("#our-partner-nav li:nth-child(2)").click(function () {
    //     $("#our-partner-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".partner-description").removeClass("active");
    //     $("#partner-2").addClass("active");
    // });

    // $("#our-partner-nav li:nth-child(3)").click(function () {
    //     $("#our-partner-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".partner-description").removeClass("active");
    //     $("#partner-3").addClass("active");
    // });




    /** hadith-section= when click, slider work like looping on each element. **/

    $(".hadith .slider-nav li").each(function (hadithIndex) {
        var addedNext = hadithIndex + 1;
        $(this).click(function () {
            $(".hadith .slider-nav li").removeClass("active");
            $(this).addClass("active");

            $(".testimonial").hide();
            $("#slide-" + addedNext).fadeIn(2000);
        });
    });

    /** Through separate child selection**/
    // $(".hadith .slider-nav li:first-child").click(function (){
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").fadeOut(200);
    //     $(".testimonial:first-of-type").fadeIn(200);
    // });

    // $(".hadith .slider-nav li:nth-child(2)").click(function (){
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").fadeOut(200);
    //     $(".testimonial:nth-of-type(2)").fadeIn(200);
    // });

    // $(".hadith .slider-nav li:nth-child(3)").click(function (){
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").fadeOut(200);
    //     $(".testimonial:nth-of-type(3)").fadeIn(200);
    // });


    /** hadith-nav-slider---- selected through classes. **/
    // $(".hadith .slider-nav li:first-child").click(function () {
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").fadeOut(2000, function (){
    //         $(this).removeClass("active");
    //     })

    //     $(".testimonial:first-of-type").fadeIn(2000, function(){
    //         $(this).addClass("active");
    //     });
    // });


    /** on click to arrow: work like slider**/

    $("#hadith-section .nav-arrows a#next").click(function () {// next click
        console.log('next clicked');

        /* activate the slide*/
        // find out the current active slide
        var currentActiveIndex = $('#hadith-section .testimonial.active').index(); // index = 0

        // decide the next slide
        var nextSlideIndex;

        // check if the current slide is the LAST slide, - then next will be the first slide
        if (currentActiveIndex === $('#hadith-section .testimonial').length - 1) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = currentActiveIndex + 1;
        }

        // now de-activate the current active slide
        $('#hadith-section .slider-nav li').removeClass('active'); // 0 is not active any more
        $('#hadith-section .testimonial').removeClass('active'); // 0 is not active any more

        // grab the next slide and activate it
        $('#hadith-section .slider-nav li').eq(nextSlideIndex).addClass('active') // grabing the second element index#1 
        $('#hadith-section .testimonial').eq(nextSlideIndex).addClass('active') // grabing the second element index#1 

    });

    $(".nav-arrows a#prev").click(function () {//previous click

        console.log('prev clicked');

        /* activate the slide*/
        // find out the current active slide
        var currentActiveIndex = $('#hadith-section .testimonial.active').index(); // index = 5

        // decide the prev slide
        var prevSlideIndex;

        // check if the current slide is the FIRST slide, - then next will be the first slide
        if (currentActiveIndex === 0) {
            prevSlideIndex = $('#hadith-section .testimonial').length - 1;
        } else {
            prevSlideIndex = currentActiveIndex - 1;
        }

        // now de-activate the current active slide
        $('#hadith-section .slider-nav li.active').removeClass('active'); // 0 is not active any more
        $('#hadith-section .testimonial.active').removeClass('active'); // 0 is not active any more

        // grab the next slide and activate it
        $('#hadith-section .slider-nav li').eq(prevSlideIndex).addClass('active') // grabing the 4th element 
        $('#hadith-section .testimonial').eq(prevSlideIndex).addClass('active') // grabing the 4th element

    });

    // $(".hadith .slider-nav li:nth-child(2)").click(function () {
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").fadeOut(2000, function (){
    //         $(this).removeClass("active")
    //     });
    //     $(".testimonial:nth-of-type(2)").fadeIn(2000, function(){
    //         $(this).addClass("active");
    //     });
    // });

    // $(".hadith .slider-nav li:nth-child(3)").click(function () {
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $(".testimonial:nth-of-type(3)").addClass("active");
    // });


    // $(".hadith .slider-nav li:nth-child(4)").click(function () {
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $(".testimonial:nth-of-type(4)").addClass("active");
    // });


    // $(".hadith .slider-nav li:nth-child(5)").click(function () {
    //     $(".hadith .slider-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $(".testimonial:nth-of-type(5)").addClass("active");
    // });


    /** hadith-nav-slider ----  selected through different id'z **/
    // $("#hadith-nav li:nth-child(1)").click(function (){
    //     $("#hadith-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $("#slide-1").addClass("active");
    // });

    // $("#hadith-nav li:nth-child(2)").click(function (){
    //     $("#hadith-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $("#slide-2").addClass("active");
    // });

    // $("#hadith-nav li:nth-child(3)").click(function (){
    //     $("#hadith-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $("#slide-3").addClass("active");
    // });

    // $("#hadith-nav li:nth-child(4)").click(function (){
    //     $("#hadith-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $("#slide-4").addClass("active");
    // });

    // $("#hadith-nav li:nth-child(5)").click(function (){
    //     $("#hadith-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".testimonial").removeClass("active");
    //     $("#slide-5").addClass("active");
    // });




    //Selected through different id'z
    // $("#urgnt-dontn-nav li:nth-child(1)").click(function (){
    //     $("#urgnt-dontn-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").removeClass("active");
    //     $("#donation-slide-1").addClass("active");
    // });

    // $("#urgnt-dontn-nav li:nth-child(2)").click(function (){
    //     $("#urgnt-dontn-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").removeClass("active");
    //     $("#donation-slide-2").addClass("active");
    // });

    // $("#urgnt-dontn-nav li:nth-child(3)").click(function (){
    //     $("ul#urgnt-dontn-nav li").removeClass("active");
    //     $(this).addClass("active");

    //     $(".help-to-build").removeClass("active");
    //     $("#donation-slide-3").addClass("active");
    // });

    // $("#urgent-donation-section #urgnt-dontn-nav li").click(function (){
    //     $("#urgent-donation-section #urgnt-dontn-nav li").removeClass("active");
    //     $(this).addClass("active");                
    //     $("#urgent-donation-section .help-to-build").removeClass("active");
    //     $("#urgent-donation-section .help-to-build:first-child").addClass("active");   
    // });



    // $('ul#urgnt-dontn-nav li:nth-child(1)').click(function () {

    //     $('ul#urgnt-dontn-nav li').removeClass('active');
    //     $(this).addClass('active');

    //     $('.help-to-build').removeClass('active');
    //     $('#donation-slide-1').addClass('active');

    // })

    // $('ul#urgnt-dontn-nav li:nth-child(2)').click(function () {

    //     $('ul#urgnt-dontn-nav li').removeClass('active');
    //     $(this).addClass('active');

    //     $('.help-to-build').removeClass('active');
    //     $('#donation-slide-2').addClass('active');

    // })

    // $('ul#urgnt-dontn-nav li:nth-child(3)').click(function () {

    //     $('ul#urgnt-dontn-nav li').removeClass('active');
    //     $(this).addClass('active');

    //     $('.help-to-build').removeClass('active');
    //     $('#donation-slide-3').addClass('active');

    // })


    // $("#urgent-donation-section #urgnt-dontn-nav li").click(function (){
    //     // console.log("clicked")
    //     var currentActiveClass = $("#urgent-donation-section #urgnt-dontn-nav li.active, #urgent-donation-section .help-to-build.active").index();
    //     var nextSlideClass;


    //     if (currentActiveClass === $("#urgent-donation-section #urgnt-dontn-nav li, #urgent-donation-section .help-to-build").length - 1){
    //         nextSlideClass = 0;
    //     } else {
    //         nextSlideClass = currentActiveClass + 1;
    //     }
    //     console.log(currentActiveClass)

    //     $("#urgent-donation-section #urgnt-dontn-nav li.active").removeClass("active");
    //     $("#urgent-donation-section .help-to-build.active").removeClass("active");

    //     $("#urgent-donation-section #urgnt-dontn-nav li").eq(nextSlideClass).addClass("active");
    //     $("#urgent-donation-section .help-to-build").eq(nextSlideClass).addClass("active");
    // });



    // $("#urgnt-dontn-nav li").click(function (){
    //     // $(this).show();
    //     // console.log($('#urgnt-dontn-nav li'))
    //     $(this).addClass("active").removeClass("active");        
    //     $("#urgent-donation-section .help-to-build.active").show();
    //     $("#urgent-donation-section .help-to-build").hide();
    //     $("#urgent-donation-section .help-to-build.active").removeClass("active");
    //     $("#urgent-donation-section .help-to-build").addClass("active");


    // });

    // $("#urgnt-dontn-nav li").click(function (){
    //     var currentActiveClass = $("#urgnt-dontn-nav li.active, #urgent-donation-section .help-to-build.active");
    //     var unactiveClass = $("#urgnt-dontn-nav li, #urgent-donation-section .help-to-build");

    //     if (currentActiveClass === $("#urgnt-dontn-nav li.active, #urgent-donation-section .help-to-build.active")){
    //         currentActiveClass.show();
    //         currentActiveClass.removeClass("active");
    //     } else{
    //         unactiveClass.addClass("active");

    //     }


    // $("#urgnt-dontn-nav li.active, #urgent-donation-section .help-to-build.active").show();
    // $("#urgnt-dontn-nav li.active, #urgent-donation-section .help-to-build.active").removeClass("active");
    // $("#urgnt-dontn-nav li, #urgent-donation-section .help-to-build").addClass("active");
    // $("#urgnt-dontn-nav li.active, #urgent-donation-section .help-to-build.active").show();
    // $("#urgent-donation-section .help-to-build").hide();

    // })

    // $("#urgnt-dontn-nav li:first-child").click(function (){
    //     $("#urgnt-dontn-nav li:first-child.active, #urgent-donation-section .help-to-build:first-of-type.active").show();
    //     $("#urgnt-dontn-nav li:nth-child(2), #urgent-donation-section .help-to-build:first-of-type").removeClass("active");

    // });

    // $("#urgnt-dontn-nav li:nth-child(2)").click(function (){
    //     $("#urgnt-dontn-nav li:first-child.active, #urgent-donation-section .help-to-build:first-of-type.active").removeClass("active");
    //     $("#urgnt-dontn-nav li:first-child").show();
    //     $("#urgent-donation-section .help-to-build:first-of-type").hide();
    //     $("#urgnt-dontn-nav li:nth-child(2), #urgent-donation-section .help-to-build:nth-of-type(2)").addClass("active");
    // });

    // $("#urgnt-dontn-nav li:nth-child(3)").click(function (){
    //     $("#urgnt-dontn-nav li:nth-child(3), #urgent-donation-section .help-to-build:nth-of-type(3)").show();
    //     $("#urgnt-dontn-nav li:nth-child(3).active, #urgent-donation-section .help-to-build:nth-of-type(3).active").removeClass("active");
    // });

    // $("#urgnt-dontn-nav li").click(function () {
    //     var currentActiveIndex = $("#urgent-donation-section .help-to-build.active, #urgnt-dontn-nav li.active").index();
    //     var nextSlideIndex;

    //     if (currentActiveIndex === $("#urgent-donation-section .help-to-build, #urgnt-dontn-nav li").length -1){
    //         nextSlideIndex = 0;
    //     } else{
    //         nextSlideIndex = currentActiveIndex + 1;
    //     }

    //     $("#urgent-donation-section #urgnt-dontn-nav li.active").removeClass("active");
    //     $("#urgent-donation-section .help-to-build.active").removeClass("active");


    //     $("#urgent-donation-section #urgnt-dontn-nav li").eq(nextSlideIndex).addClass("active");
    //     $("#urgent-donation-section .help-to-build").eq(nextSlideIndex).addClass("active");

    //     });
    // });



    // $(".nav-arrows a#next").click(function (){
    //     setInterval(function (){
    //         $(".testimonial").hide();
    //         $(".testimonial#testtwo").show();
    //         $(".slider-nav li").removeClass("active");
    //         $(".slider-nav li:nth-child(2)").addClass("active");
    //     }, 1000)
    // })



});
