$(function() {
    $('.all').hide()
    $(".chotka p").hide()
    setTimeout(function() {
        $(".chotka p").show()
        $(".chotka p").animate({fontSize : "*=2", letterSpacing : '7px'}, 800)
    }, 1000)
    setTimeout(function() {
        $(".chotka").hide()
        $(".all").show()
    }, 3000)
    setTimeout(function() {
        $("h1").animate({right : "28%", opacity : 1}, 700)
        $("h4").animate({left : "27%", opacity : 1}, 700)
        return false
    }, 3200)
    $(window).resize(function() {
        if($(window).width() < 1000){
            $("nav").css({display : "none"})
            $(".menu").css({display : "flex"})
        }
        else {
            $("nav").css({display : "flex"})
            $(".menu").css({display : "none"})
        }
    })
    var ok = 0
    var count = 0
    $(".menuButton").click(function() {
        count++
        if (count % 2 != 0) {
            $("nav").css({display : "flex",  flexDirection : "column", alignItems: 'center', position : "fixed", backgroundColor : "black",  width: "100%", height : "88vh", top: "12vh"})
            $("nav div").css({width : "30%", fontSize : "1.5em"})
            ok = 1
        } 
        else {
            $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
            $("nav div").css({width : "16%", fontSize : "1em"})
            ok = 0
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.buttonUp').fadeIn();
        } else {
            $('.buttonUp').fadeOut();
        }
        //1
        if($(window).height() <= 700) {
            if ($(this).scrollTop() < 330 && $(this).scrollTop() > 0) {
                $('#first').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#first').css({backgroundColor : "black", color: "white"})
            }
            //2
            if ($(this).scrollTop() < 990 && $(this).scrollTop() > 330) {
                $('#second').css({backgroundColor : "white", color : "black"})
                $(".textPage2").animate({left : "5%"}, 700)
                $(".photoPage2").animate({right : "5%"}, 700)
            }
            else {
                $('#second').css({backgroundColor : "black", color: "white"})
            }
            //3
            if ($(this).scrollTop() < 1650 && $(this).scrollTop() > 990) {
                $('#third').css({backgroundColor : "white", color : "black"})
                $(".examplesPage3").animate({top : "30%"}, 1000)
            }
            else {
                $('#third').css({backgroundColor : "black", color: "white"})
            }
            //4
            if ($(this).scrollTop() < 4500 && $(this).scrollTop() > 1650) {
                $('#fourth').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#fourth').css({backgroundColor : "black", color: "white"})
            }
            //5
            if ($(this).scrollTop() < 5160 && $(this).scrollTop() > 4500) {
                $('#fifth').css({backgroundColor : "white", color : "black"})
                $(".asan").animate({left : "7%"}, 1200)
                $(".usen").animate({right : "7%"}, 1200)
            }
            else {
                $('#fifth').css({backgroundColor : "black", color: "white"})
            }
            //6
            if ($(this).scrollTop() > 5160) {
                $('#six').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#six').css({backgroundColor : "black", color: "white"})
            }
        }
        else if($(window).height() <= 800) {
            if ($(this).scrollTop() < 330 && $(this).scrollTop() > 0) {
                $('#first').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#first').css({backgroundColor : "black", color: "white"})
            }
            //2
            if ($(this).scrollTop() < 1130 && $(this).scrollTop() > 330) {
                $('#second').css({backgroundColor : "white", color : "black"})
                $(".textPage2").animate({left : "5%"}, 700)
                $(".photoPage2").animate({right : "5%"}, 700)
            }
            else {
                $('#second').css({backgroundColor : "black", color: "white"})
            }
            //3
            if ($(this).scrollTop() < 1930 && $(this).scrollTop() > 1130) {
                $('#third').css({backgroundColor : "white", color : "black"})
                $(".examplesPage3").animate({top : "30%"}, 1000)
            }
            else {
                $('#third').css({backgroundColor : "black", color: "white"})
            }
            //4
            if ($(this).scrollTop() < 4780 && $(this).scrollTop() > 1930) {
                $('#fourth').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#fourth').css({backgroundColor : "black", color: "white"})
            }
            //5
            if ($(this).scrollTop() < 5580 && $(this).scrollTop() > 4780) {
                $('#fifth').css({backgroundColor : "white", color : "black"})
                $(".asan").animate({left : "7%"}, 1200)
                $(".usen").animate({right : "7%"}, 1200)
            }
            else {
                $('#fifth').css({backgroundColor : "black", color: "white"})
            }
            //6
            if ($(this).scrollTop() > 5580) {
                $('#six').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#six').css({backgroundColor : "black", color: "white"})
            }
        }
        else if($(window).height() <= 1000) {
            if ($(this).scrollTop() < 330 && $(this).scrollTop() > 0) {
                $('#first').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#first').css({backgroundColor : "black", color: "white"})
            }
            //2
            if ($(this).scrollTop() < 1330 && $(this).scrollTop() > 330) {
                $('#second').css({backgroundColor : "white", color : "black"})
                $(".textPage2").animate({left : "5%"}, 700)
                $(".photoPage2").animate({right : "5%"}, 700)
            }
            else {
                $('#second').css({backgroundColor : "black", color: "white"})
            }
            //3
            if ($(this).scrollTop() < 2330 && $(this).scrollTop() > 1330) {
                $('#third').css({backgroundColor : "white", color : "black"})
                $(".examplesPage3").animate({top : "30%"}, 1000)
            }
            else {
                $('#third').css({backgroundColor : "black", color: "white"})
            }
            //4
            if ($(this).scrollTop() < 5180 && $(this).scrollTop() > 2330) {
                $('#fourth').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#fourth').css({backgroundColor : "black", color: "white"})
            }
            //5
            if ($(this).scrollTop() < 6180 && $(this).scrollTop() > 5180) {
                $('#fifth').css({backgroundColor : "white", color : "black"})
                $(".asan").animate({left : "7%"}, 1200)
                $(".usen").animate({right : "7%"}, 1200)
            }
            else {
                $('#fifth').css({backgroundColor : "black", color: "white"})
            }
            //6
            if ($(this).scrollTop() > 6180) {
                $('#six').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#six').css({backgroundColor : "black", color: "white"})
            }
        }
        else if($(window).height() <= 1200) {
            if ($(this).scrollTop() < 330 && $(this).scrollTop() > 0) {
                $('#first').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#first').css({backgroundColor : "black", color: "white"})
            }
            //2
            if ($(this).scrollTop() < 1330 && $(this).scrollTop() > 330) {
                $('#second').css({backgroundColor : "white", color : "black"})
                $(".textPage2").animate({left : "5%"}, 700)
                $(".photoPage2").animate({right : "5%"}, 700)
            }
            else {
                $('#second').css({backgroundColor : "black", color: "white"})
            }
            //3
            if ($(this).scrollTop() < 2530 && $(this).scrollTop() > 1530) {
                $('#third').css({backgroundColor : "white", color : "black"})
                $(".examplesPage3").animate({top : "30%"}, 1000)
            }
            else {
                $('#third').css({backgroundColor : "black", color: "white"})
            }
            //4
            if ($(this).scrollTop() < 7450 && $(this).scrollTop() > 2530) {
                $('#fourth').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#fourth').css({backgroundColor : "black", color: "white"})
            }
            //5
            if ($(this).scrollTop() < 8500 && $(this).scrollTop() > 7450) {
                $('#fifth').css({backgroundColor : "white", color : "black"})
                $(".asan").animate({left : "7%"}, 1200)
                $(".usen").animate({right : "7%"}, 1200)
            }
            else {
                $('#fifth').css({backgroundColor : "black", color: "white"})
            }
            //6
            if ($(this).scrollTop() > 8600) {
                $('#six').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#six').css({backgroundColor : "black", color: "white"})
            }
        }
        else if($(window).height() <= 1400) {
            if ($(this).scrollTop() < 330 && $(this).scrollTop() > 0) {
                $('#first').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#first').css({backgroundColor : "black", color: "white"})
            }
            //2
            if ($(this).scrollTop() < 1730 && $(this).scrollTop() > 330) {
                $('#second').css({backgroundColor : "white", color : "black"})
                $(".textPage2").animate({left : "5%"}, 700)
                $(".photoPage2").animate({right : "5%"}, 700)
            }
            else {
                $('#second').css({backgroundColor : "black", color: "white"})
            }
            //3
            if ($(this).scrollTop() < 3160 && $(this).scrollTop() > 1730) {
                $('#third').css({backgroundColor : "white", color : "black"})
                $(".examplesPage3").animate({top : "30%"}, 1000)
            }
            else {
                $('#third').css({backgroundColor : "black", color: "white"})
            }
            //4
            if ($(this).scrollTop() < 9500 && $(this).scrollTop() > 3160) {
                $('#fourth').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#fourth').css({backgroundColor : "black", color: "white"})
            }
            //5
            if ($(this).scrollTop() < 12000 && $(this).scrollTop() > 9500) {
                $('#fifth').css({backgroundColor : "white", color : "black"})
                $(".asan").animate({left : "7%"}, 1200)
                $(".usen").animate({right : "7%"}, 1200)
            }
            else {
                $('#fifth').css({backgroundColor : "black", color: "white"})
            }
            //6
            if ($(this).scrollTop() > 12000) {
                $('#six').css({backgroundColor : "white", color : "black"})
            }
            else {
                $('#six').css({backgroundColor : "black", color: "white"})
            }
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.buttonUp').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        $('#first').css({backgroundColor : "white", color : "black"})
        return false;
    });
    $('.butPage2').click(function () {
        $('body,html').animate({
            scrollTop: 1900
        }, 500);
        return false;
    });
    $('#first').click(function() {
        if($(window).height() <= 700) {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            $('#first').css({backgroundColor : "white", color : "black"})
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 800) {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            $('#first').css({backgroundColor : "white", color : "black"})
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1000) {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            $('#first').css({backgroundColor : "white", color : "black"})
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1200) {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            $('#first').css({backgroundColor : "white", color : "black"})
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1400) {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            $('#first').css({backgroundColor : "white", color : "black"})
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
    })
    $('#second').click(function() {
        if($(window).height() <= 700) {
            $('body,html').animate({
                scrollTop: 620
            }, 500);
            $(".textPage2").animate({left : "5%"}, 700)
            $(".photoPage2").animate({right : "5%"}, 700)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 800) {
            $('body,html').animate({
                scrollTop: 720
            }, 500);
            $(".textPage2").animate({left : "5%"}, 700)
            $(".photoPage2").animate({right : "5%"}, 700)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1000) {
            $('body,html').animate({
                scrollTop: 750
            }, 500);
            $(".textPage2").animate({left : "5%"}, 700)
            $(".photoPage2").animate({right : "5%"}, 700)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1200) {
            $('body,html').animate({
                scrollTop: 1020
            }, 500);
            $(".textPage2").animate({left : "5%"}, 700)
            $(".photoPage2").animate({right : "5%"}, 700)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1400) {
            $('body,html').animate({
                scrollTop: 1350
            }, 500);
            $(".textPage2").animate({left : "5%"}, 700)
            $(".photoPage2").animate({right : "5%"}, 700)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        
    })
    $('#third').click(function() {
        if($(window).height() <= 700) {
            $('body,html').animate({
                scrollTop: 1280
            }, 500);
            $(".examplesPage3").animate({top : "30%"}, 1500)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 800) {
            $('body,html').animate({
                scrollTop: 1420
            }, 500);
            $(".examplesPage3").animate({top : "30%"}, 1500)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1000) {
            $('body,html').animate({
                scrollTop: 1600
            }, 500);
            $(".examplesPage3").animate({top : "30%"}, 1500)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1200) {
            $('body,html').animate({
                scrollTop: 2000
            }, 500);
            $(".examplesPage3").animate({top : "30%"}, 1500)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1400) {
            $('body,html').animate({
                scrollTop: 2760
            }, 500);
            $(".examplesPage3").animate({top : "30%"}, 1500)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
    })
    $('#fourth').click(function() {
        if($(window).height() <= 700) {
            $('body,html').animate({
                scrollTop: 1900
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 800) {
            $('body,html').animate({
                scrollTop: 2150
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1000) {
            $('body,html').animate({
                scrollTop: 2380
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1200) {
            $('body,html').animate({
                scrollTop: 3000
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1400) {
            $('body,html').animate({
                scrollTop: 4000
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
    })
    $('#fifth').click(function() {
        if($(window).height() <= 700) {
            $('body,html').animate({
                scrollTop: 4850
            }, 500);
            $(".asan").animate({left : "7%"}, 1200)
            $(".usen").animate({right : "7%"}, 1200)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 800) {
            $('body,html').animate({
                scrollTop: 5250
            }, 500);
            $(".asan").animate({left : "7%"}, 1200)
            $(".usen").animate({right : "7%"}, 1200)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1000) {
            $('body,html').animate({
                scrollTop: 5950
            }, 500);
            $(".asan").animate({left : "5%"}, 1200)
            $(".usen").animate({right : "5%"}, 1200)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1200) {
            $('body,html').animate({
                scrollTop: 7450
            }, 500);
            $(".asan").animate({left : "7%"}, 1200)
            $(".usen").animate({right : "7%"}, 1200)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1400) {
            $('body,html').animate({
                scrollTop: 10000
            }, 500);
            $(".asan").animate({left : "7%"}, 1200)
            $(".usen").animate({right : "7%"}, 1200)
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        
    })
    $('#six').click(function() {
        if($(window).height() <= 700) {
            $('body,html').animate({
                scrollTop: 5500
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 800) {
            $('body,html').animate({
                scrollTop: 5700
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1000) {
            $('body,html').animate({
                scrollTop: 6820
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1200) {
            $('body,html').animate({
                scrollTop: 8600
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
        else if($(window).height() <= 1400) {
            $('body,html').animate({
                scrollTop: 11500
            }, 500);
            if (ok == 1 && $(window).width() < 1000) {
                $("nav").css({display : "none", flexDirection : "row", alignItems: 'center', position : "relative", backgroundColor : "black",  width: "50%", height : "100%", top: "0"})
                $("nav div").css({width : "16%", fontSize : "1em"})
            }
            return false;
        }
    })
    
})