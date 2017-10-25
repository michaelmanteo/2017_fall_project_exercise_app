import * as $ from 'jquery';
declare const navProperties: any;

$(function(){
    $("#header-placeholder").load("_header.html", function () {
        $("#nav-placeholder").load("_nav.html" );       
    } );

    $("#footer-placeholder").load("_footer.html");
    
    
});


