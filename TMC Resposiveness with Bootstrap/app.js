
$(function () {
    $('.faqs-about-islam .faqs-card-header').click(function () {
        $('.faqs-about-islam .faqs-card-header').removeClass('active');
        $(this).addClass('active');
    });

    // gallery image opener 
    // $('.image-opener').on('click', function(event) {

    //     // read the src attribute from clicked anchor image
    //     var src = $(this).children('img').attr('src');

    //     // write the src attribute to the image-viewer modal image
    //     $('#image-viewer').find('img').attr('src', src);
    // });



    // gallery image opener 
    $('.gallery-main-container .images a').on('click', function(event) {
        event.preventDefault();
        
        // read the src attribute from clicked anchor image
        var src = $(this).attr('href');
    
        // write the src attribute to the image-viewer modal image
        $('#image-viewer img').attr('src', src);
    });
});