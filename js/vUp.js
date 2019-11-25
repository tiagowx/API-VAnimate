
$(document).ready(function(){
    function AnimateLogo () {
        //definir as partes de sua logo
        obj = document.getElementById('logo').contentDocument;
        logo = obj.getElementById('logo-vUp');
        bg = obj.getElementById('bg');
        gv = obj.getElementById('gV');
        ted = obj.getElementById('ted');
        vector = obj.getElementById('vector');

        $( "div" ).css({
            animation-name: fadeToLeft;
         });

        $(obj).mouseenter(function(){
            $(bg).addClass('vGrowLite');
            $(ted).addClass('vOrbit');
            $(vector).addClass('vFadeToLeft');
        });
        
        $(obj).mouseleave(function(){
            $(bg).removeClass('vGrowLite');
            $(ted).removeClass('vFadeToLeft');
        });
        return bg;
    }



    window.addEventListener("load", function() {
        
        console.log(AnimateLogo())
    }); 


});