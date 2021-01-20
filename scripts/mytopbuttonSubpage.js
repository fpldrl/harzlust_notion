$(document).ready(function(){

    // Top-Button-Script für Home ------------------------------------
    // Button ein- und ausblenden - bei Unterseite aufgrund des kleineren Headers bei 100px:
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('#backtop').fadeIn();
        }
        else {
            $('#backtop').fadeOut();
        }
	});
	
    // Geschmeidiges hochspringen (langsam hochscrollen)
    $('#backtop a').click(function(){
        $('html,body').animate({scrollTop:0},1000); // Was soll passieren, wie soll es passieren
        return false; // Ich unterbinde Return-Wert, sodass die Funktion für sich alleine funktioniert und nicht von der Scroll-Funktion beeinflusst wird
    });
});
