var args = arguments[0] || {};



$.menuButton.addEventListener('click', function(e) { 
    $.trigger('click', e); 
}); 

// function showMenu(e) {
    // // var menu = $.menu;
    // var menu = Alloy.createController('menu');
//     
//     
    // Ti.API.Info(menu.menu);
// 
    // if (menu.toggle == true) {
        // //anima la ventana para que en 400ms se mueva 150 px a la izquierda con el EASE IN OUT
        // menu.animate({
            // right : '-70%',
            // duration : 400,
            // curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        // });
        // hideDark(e);
        // menu.toggle = false;
    // }
    // //Si esta cerrado
    // else {
        // //anima la ventana para que en 400ms se mueva 150 px a la izquiera con el EASE IN OUT
        // menu.animate({
            // right : 0,
            // duration : 400,
            // curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        // });
        // showDark(null);
        // menu.toggle = true;
    // }
// 
// }