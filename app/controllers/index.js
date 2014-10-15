function doClick(e) {
    alert($.label.text);
}

function showMenu(e) {
    var menu = $.menu;

    if (menu.toggle == true) {
        //anima la ventana para que en 400ms se mueva 150 px a la izquierda con el EASE IN OUT
        menu.animate({
            right : '-70%',
            duration : 400,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        hideDark(e);
        menu.toggle = false;
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
    var menu = $.menu;

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
    var dark = $.dark;
    dark.visible = true;
    
    dark.animate({
       opacity: 0.5,
       duration: 400,
       curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
    
}

function hideDark(e) {
    var dark = $.dark;
    
    dark.animate({
       opacity: 0,
       duration: 400,
       curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
}

$.index.open();
