$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
    
    /*
        Background slideshow
    */
	$('.top-content').backstretch("src/img");
    $('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.section-6-container').backstretch("assets/img/backgrounds/3.jpg");
	$('.section-3-container').backstretch("assets/img/backgrounds/4.jpg");
    
                /*
                    Wow
                */
                new WOW().init()



});


var btn = document 
            .getElementsByClassName("collapse1"); 
  
        btn[0].addEventListener("click", function () { 
            this.classList.toggle("active"); 
            var content = this.nextElementSibling; 
            if (content.style.display === "block") { 
                content.style.display = "none"; 
            } else { 
                content.style.display = "block"; 
            } 
        }); 




    





