const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY > 0)
    });

    //menu(hamburguesa)
const barsMenu = document.querySelector(".navbar_list");

//overlay
const overlay = document.querySelector(".overlay");

//btn para abrir y cerrar el menu
const menuBtn =  document.querySelector(".menu_label");

    const closeOverlayClick = () => {
        overlay.classList.remove("show_overlay");
    }

    const toggleMenu = () => {
        barsMenu.classList.toggle("open_menu");
      
      if(cartMenu.classList.contains("open_cart")){
        cartMenu.classList.remove("open_cart");
        return;
      };
      overlay.classList.toggle("show_overlay");
    };

    const init = () => {
        menuBtn.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", closeOverlayClick);
    };

    init();