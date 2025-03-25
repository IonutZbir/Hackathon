function hamburgerMenu(){
    var h_menu_button = $('.h-menu');

    h_menu_button.on('click', function() {
        $(this).toggleClass('active not-active');
        $('.navbar-collapse').toggleClass('show');
    });
}
   
export {hamburgerMenu}

function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

export {getYear}