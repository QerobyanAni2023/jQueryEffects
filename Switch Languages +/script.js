$(document).ready(function() {
    // $(".arm").click(function() {
    //     $(".english").fadeOut();
    //     $(".armenian").fadeIn();
    // });
    // $(".eng").click(function() {
    //     $(".armenian").hide();
    //     $(".english").show();
    // });


    // <!-- ------------------------------------------ayl effektov----- -->



    // $("#arm").click(function() {
    //     $("#p1").text("բարև");
    // });

    // $("#arm").click(function() {
    //     $("#p2").text("ես ռոբոտ չեմ");
    // });

    // $("#eng").click(function() {
    //     $("#p1").text("hello");
    // });

    // $("#eng").click(function() {
    //     $("#p2").text("i am not a robot");
    // });



    // <!-- ---------------------menyu------ -->

    $("#arm").click(function() {
        $("#home").text("տուն");
        $("#about").text("մասին");
        $("#contact").text("կոնտակտ");
        $("#media").text("մեդիա");
    });

    $("#eng").click(function() {
        $("#home").text("home");
        $("#about").text("about");
        $("#contact").text("contact");
        $("#media").text("media");
    });

    $("#rus").click(function() {
        $("#home").text("дом");
        $("#about").text("о");
        $("#contact").text("контакт");
        $("#media").text("медиа");
    });








})