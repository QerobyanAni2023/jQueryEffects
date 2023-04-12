$(document).ready(function() {

    $({ counter: 0 }).animate({ counter: 3000 }, {
        duration: 2500,
        easing: "linear",
        step: function() {
            $(".num1").text(Math.ceil(this.counter)), Infinity
        }
    });


    $({ counter: 25 }).animate({ counter: 1000 }, {
        duration: 2000,
        easing: "linear",
        step: function() {
            $(".num2").text(Math.ceil(this.counter)), Infinity
        }
    });

    $({ counter: 120 }).animate({ counter: 25000 }, {
        duration: 3000,
        easing: "linear",
        step: function() {
            $(".num3").text(Math.ceil(this.counter)), Infinity
        }
    });




    $(window).scroll(function() {
        $(".section-opacity").each(function() {
            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() / 2;


            if (x >= y) {
                $(this).addClass("active");
            };
        });

    })



    $(function() {

        var rollingBorder = $("#border-ani-table").rollingBorder({

        });
        $(window).scroll(function() {

            rollingBorder = $("#border-ani-demo").rollingBorder();

        });
    });








})