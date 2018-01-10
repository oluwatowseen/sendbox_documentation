$(document).ready(function(){
    $("#android").click(function(){
        $("#android_show").toggle();
    });
    $("#go").click(function(){
        $("#go_show").toggle();
    });
    $("#java").click(function(){
        $("#java_show").toggle();
    });
    $("#javasc").click(function(){
        $("#javasc_show").toggle();
    });
    $("#net").click(function(){
        $("#net_show").toggle();
    });
    $("#node").click(function(){
        $("#node_show").toggle();
    });
    $("#php").click(function(){
        $("#php_show").toggle();
    });
    $("#python").click(function(){
        $("#python_show").toggle();
    });
    $("#ruby").click(function(){
        $("#ruby_show").toggle();
    });
    $("#installation").click(function() {
            $('html, body').animate({
                scrollTop: $(".installation").offset().top
            }, 800);
        });
    $("#basic_config").click(function() {
            $('html, body').animate({
                scrollTop: $(".basic_config").offset().top
            }, 800);
        });
    $("#config_proguard").click(function() {
            $('html, body').animate({
                scrollTop: $(".config_proguard").offset().top
            }, 800);
        });
    $("#further_config").click(function() {
            $('html, body').animate({
                scrollTop: $(".further_config").offset().top
            }, 800);
        });
    $("#report_unhandled").click(function() {
            $('html, body').animate({
                scrollTop: $(".report_unhandled").offset().top
            }, 800);
        });
    $("#report_handled").click(function() {
            $('html, body').animate({
                scrollTop: $(".report_handled").offset().top
            }, 800);
        });
    $("#send_data").click(function() {
            $('html, body').animate({
                scrollTop: $(".send_data").offset().top
            }, 800);
        });
    $("#identify_user").click(function() {
            $('html, body').animate({
                scrollTop: $(".identify_user").offset().top
            }, 800);
        });
    $("#disable_report").click(function() {
            $('html, body').animate({
                scrollTop: $(".disable_report").offset().top
            }, 800);
        });
    $("#loggin_breadcrumbs").click(function() {
            $('html, body').animate({
                scrollTop: $(".loggin_breadcrumbs").offset().top
            }, 800);
        });
    $("#strictmode_violation").click(function() {
            $('html, body').animate({
                scrollTop: $(".strictmode_violation").offset().top
            }, 800);
        });
    $("#next_step").click(function() {
            $('html, body').animate({
                scrollTop: $(".next_step").offset().top
            }, 800);
        });
});