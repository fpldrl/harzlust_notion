$(document).ready(function(){

	// Slick-Karoussel-Script ------------------------------
	// Quelle: https://kenwheeler.github.io/slick/#go-get-it
    $('.one-time').slick({
		autoplay:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });

	// Cookie-Banner-Script --------------------------------
	// Quelle: cookiedingsbums/497webNuernberg.html
	var r = 0;
	a = document.cookie;
	while(a != ''){
		while(a.substr(0,1) == ' '){
			a = a.substr(1,a.length);
		}
		cn = a.substring(0,a.indexOf('='));
		if(a.indexOf(';') != -1){
			cw = a.substring(a.indexOf('=')+1,a.indexOf(';'));
		}
		else{
			cw = a.substr(a.indexOf('=')+1,a.length);
		}
		if(cn == 'mbmcookie'){
			r = cw;
		}
		i = a.indexOf(';')+1;
		if(i == 0){
			i = a.length
		}
		a = a.substring(i,a.length);
	}
	if(r == '1') document.getElementById('mbmcookie').style.display = 'none';

    // Number Counter Animation
    // Quelle: https://codepen.io/shivasurya/pen/FatiB
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
	});
	
	// Einschweben der Bannerbilder bei Scrollaktivität ----------------------------
	// Quelle: 411einschweben-scroll-animation-ud.html
    //Aufruf der Funktionen, damit auch ohne scroll was angezeigt wird 
	WhatAnimation("fadescroll");

	 // Funktionsaufruf bei scrollerei 
	 $(window).scroll(function() {
		WhatAnimation("fadescroll");
	});

	// durchläuft Inhalt in Schleife um fadescroll zu finden und function AddClass aufzurufen
	function WhatAnimation(name) {
		$("." + name).each(function() {
			AddClass(this, "go");
		});
	}

	// Klassen zuweisen / entziehen -------------
	function AddClass(object, name) {
		if (IsVisible(object)) { //wenn das fadescroll/moveleft sichtbar ist ....
			$(object).addClass(name);
		} 
		/* else { //else-zweig weg, wenn nur beim ersten mal ausführen!!!!!!!!!!
			$(object).removeClass(name);
		}  */
	}

	// wann ist fadescroll/moveleft sichtbar => return für function AddClass
	function IsVisible(object) {
		var viewport = $(window).scrollTop() + $(window).height(); //akt.scrollpos + fensterhöhe
		var rand = $(object).offset(); //Position top/left von fadescroll/moveleft
		rand.bottom = rand.top + $(object).outerHeight();
				 console.log ($(window).scrollTop() + ' / ' + viewport   + ' / ' +   rand.top);
	   return !(
			viewport < rand.top + 100 || $(window).scrollTop() > rand.bottom - 100
		); //wenn (akt.scrollpos < fadescroll/moveleft-pos.top) oder (akt.scrollpos > fadescroll/moveleft-pos.bottom) => false
		//also: wenn außerhalb des Fensters

	}
});