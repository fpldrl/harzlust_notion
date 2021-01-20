$(document).ready(function(){

    // Top-Button-Script für Home ------------------------------------
    // Button ein- und ausblenden - bei Startseite aufgrund des größeren Headers bei 200px:
    $(window).scroll(function(){
        if($(window).scrollTop() > 200) {
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
