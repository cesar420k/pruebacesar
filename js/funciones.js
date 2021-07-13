$(document).ready(listo);


function listo()
{
    $(".hamb").click(function(e){
        e.preventDefault();
        $("header .container nav ").toggleClass("open");
        $(".hamb i").toggleClass("fa-times");
    });
    $("header .container nav a").click(function(){
        $("header .container nav ").removeClass("open");
        $(".hamb i").removeClass("fa-times");
        var k47 = $(this).attr("href");
        $("html,body").animate({
        "scrollTop": $(k47).offset().top - 76
        })
        
    })
        

}

