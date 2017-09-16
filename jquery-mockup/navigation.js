$(function () {
    $("#header-placeholder").load("_header.html");
});

$(function () {
    $("#footer-placeholder").load("_footer.html");
});



// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});