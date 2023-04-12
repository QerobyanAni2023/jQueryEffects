$(document).ready(function() {


    $list = $("ul");
    $forma = $("#form");

    $forma.on("submit", function(e) {
        e.preventDefault();
        var text = $("input:text").val();
        $list.append('<li>' + text + '</li>');
        $("input:text").val('');

    })



    $list.on("click", "li ", function() {
        var ani = $(this);
        $(ani).remove()
    })



})