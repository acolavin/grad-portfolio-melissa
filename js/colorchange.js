$(function() {
//    $("a").mousover(function() {
//        alert('test');
//        $( ".mainimage" ).animate({
//            backgroundColor: "#aa0000",
//            color: "#fff",
//            width: 500
//        }, 1000 );
//    });

    $(".button").hover(function() {
        $ (".mainimage").stop(true, false).animate({
            backgroundColor: $(this).css('color')
        },200)}, function() {
        $ (".mainimage").animate({
            backgroundColor: "#ffffff"
        },500);
    });

});
