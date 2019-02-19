
        AOS.init();
    
    let navUl =   document.querySelector(".main-nav-ul");

    function dropdown() {
    
        if (navUl.style.display === "table") {
            navUl.style.display = "none";
        } 
        else {
            navUl.style.display = "table";
        }
    }