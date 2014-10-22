function doClick(e) {
    alert($.label.text);
}

function showMenu(e) {
    // var menu = $.menu;
    var menu = $.menu.getView('menu');
    Ti.API.info(menu.toggle);
    if (menu.toggle == true) {
        //anima la ventana para que en 400ms se mueva 150 px a la izquierda con el EASE IN OUT
        // menu.animate({
            // right : '-70%',
            // duration : 400,
            // curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        // });
        var matrix2d = Ti.UI.create2DMatrix();
		matrix2d = matrix2d.rotate(20); // in degrees
		matrix2d = matrix2d.scale(1.5); // scale to 1.5 times original size
		var a = Ti.UI.createAnimation({
			transform: matrix2d,
			duration: 300,
			autoreverse: true,
			repeat: 2
		});
		menu.animate(a);
        hideDark(e);
        menu.toggle = false;
        hideDark(e);
    }
    //Si esta cerrado
    else {
        //anima la ventana para que en 400ms se mueva 150 px a la izquiera con el EASE IN OUT
        menu.animate({
            right : 0,
            duration : 400,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        showDark(null);
        menu.toggle = true;
    }

}

function swipeMenu(e) {
    var menu = $.menu.getView('menu');
    ;

    Ti.API.info(e.direction);
    if (menu.toggle == true && e.direction == 'right') {
        menu.animate({
            right : '-70%',
            duration : 400,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });

        hideDark(e);
        menu.toggle = false;
    }

    if (menu.toggle == false && e.direction == 'left') {
        menu.animate({
            right : 0,
            duration : 400,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });

        showDark(null);
        menu.toggle = true;
    }
}

function showDark(e) {
    var dark = $.dark.getView('dark');
    Ti.API.info(dark.visible);
    dark.visible = true;

    dark.animate({
    	curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
        opacity : 0.5,
        duration : 50
    });

}

function hideDark(e) {
    var dark = $.dark.getView('dark');

    dark.animate({
    	curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
        opacity : 0,
        duration : 50
    });
}

// $.index.navBarHidden = false;
$.index.orientationModes = [Ti.UI.PORTRAIT];
Ti.API.info($.index.navBarHidden);


$.index.open();
