document.addEventListener("DOMContentLoaded", function() {

    
    const botaoMenu = document.querySelector(".iconeMenu");
    const menuLateral = document.querySelector(".side-menu");
    const botaoFecharMenu = document.querySelector(".close-menu");

    
    const botaoSobre = document.querySelector(".sobre-btn");
    const menuSobre = document.querySelector("#sobre-menu");
    const botaoFecharSobre = document.querySelector(".close-sobre");

    
    function abrirMenuLateral() {
        if (menuLateral) {
            menuLateral.classList.add("open");
        }
    }

   
    function fecharMenuLateral() {
        if (menuLateral) {
            menuLateral.classList.remove("open");
    
        }
    }


    
    function abrirMenuSobre(event) {
        event.preventDefault();
        if (menuSobre) {
            menuSobre.style.display = "block";
        }
    }

   
    function fecharMenuSobre() {
        if (menuSobre) {
            menuSobre.style.display = "none";
        }
    }


    
    if (botaoMenu) {
        botaoMenu.addEventListener("click", abrirMenuLateral);
    }

    if (botaoFecharMenu) {
        botaoFecharMenu.addEventListener("click", fecharMenuLateral);
    }

    if (botaoSobre) {
        botaoSobre.addEventListener("click", abrirMenuSobre);
    }

    if (botaoFecharSobre) {
        botaoFecharSobre.addEventListener("click", fecharMenuSobre);
    }

    
});
