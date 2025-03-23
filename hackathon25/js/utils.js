function hamburgerMenu(){
    document.addEventListener("DOMContentLoaded", function () {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector("#navbarSupportedContent");
        
        if (navbarToggler && navbarCollapse) {
            navbarToggler.addEventListener("click", function () {
                const isExpanded = navbarCollapse.classList.contains("show");
                if (isExpanded) {
                    navbarCollapse.classList.remove("show");
                    navbarToggler.setAttribute("aria-expanded", "false");
                } else {
                    navbarCollapse.classList.add("show");
                    navbarToggler.setAttribute("aria-expanded", "true");
                }
            });
        }
    });
}
    
export {hamburgerMenu}

function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

export {getYear}