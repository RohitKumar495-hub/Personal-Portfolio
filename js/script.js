
    $(function(){
        $('#menu').slicknav({
            label:"",
            brand:"Rohit Kumar"
        });
    });


    $(document).ready(function() {
        $(".skitter-large").skitter({
            dots:false,
            navigation:true,
            theme: "clean"
        });
      });

      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:100,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:true
                }
            }
        });
      });


$(document).ready(function()
{
    $(".progress_bar_html").animate({"width":"90%"},1000,function(){
        $(".progress_bar_css2").animate({"width":"80%"},1000,function(){
            $(".progress_bar_css3").animate({"width":"85%"},1000,function(){
                $(".progress_bar_javascript").animate({"width":"70%"},1000,function(){
                    $(".progress_bar_jquery").animate({"width":"60%"},1000,function(){
                        $(".progress_bar_bootstrap").animate({"width":"75%"},1000);
                    });
                });
            });
        });
    });

});