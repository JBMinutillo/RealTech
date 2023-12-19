//Contenedor de productos

const ProductContainer = document.querySelector(".product_container");

//LLamar byn ver mas
const btnVerMas = document.querySelector(".btn_load");

//LLamar btn categorias
const categoriesContainer = document.querySelector(".categories");

//HTML colection de todas las categorias
const categoriesList = document.querySelectorAll(".category");

//Carrito
const cartBtn = document.querySelector(".cart_label");

//btn para abrir y cerrar el menu
const menuBtn =  document.querySelector(".menu_label");

//carrito div
const cartMenu = document.querySelector(".cart");

//menu(hamburguesa)
const barsMenu = document.querySelector(".navbar_list");

//overlay
const overlay = document.querySelector(".overlay");

//Cart bubble
const cartBubble = document.querySelector(".cart_bubble");

//Total
const total = document.querySelector(".total");

//Btn Comprar
const buyBtn = document.querySelector(".btn_buy");

//Btn Borrar
const deleteBtn = document.querySelector(".btn_delete");

//Cart container
const productsCart = document.querySelector(".cart_container"); 

//Seteamos carrito
let cart = [];

//Funcion para crear el html del producto
const createProductTemplate = (products) => {
  const { id, nombre, precio, stock, categoria, img} = products; 

return `<div class="card">
  <img src="${img}" alt="" class="img_card" />
  <h2 class="producto_name">${nombre}</h2>
  <div class="btn_card">
    <a href="" class="link_vermas">Ver Más</a>
    <button class="btn_carrito btn_add" data-id='${id}'  data-name='${nombre}' data-bid='${precio}' data-img='${img}' >Sumar al carrito</button>
  </div>
  </div>`

}; 

//Funcion para renderizar productos 
const renderProducts = (productList) => {
  ProductContainer.innerHTML += productList.map(createProductTemplate).join("");
};

//Btn Ver Mas

const isLastIndexOf = () => {
  return AppState.currentProductIndex === AppState.productsLimit - 1;
};

const showMoreProducts = () => {
  AppState.currentProductIndex += 1;

  renderProducts(AppState.products[AppState.currentProductIndex]);

  if (isLastIndexOf()) {
  btnVerMas.classList.add("hidden");
  };
};

//funcion para ocultar el btn ver mas su hat categoria seleccionada
const setShowMoreVisibility = () => {
  if(!AppState.activeFilter){
    btnVerMas.classList.remove("hidden");
  }
  btnVerMas.classList.add("hidden");
}

//Filtros

//funcion para cambiar el estado de los botnoes de las categorias
const changeBtnState = (selectedCategory) =>{
  const categories = [...categoriesList];

  categories.forEach((categoryBtn) => {
    if(categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove('active');
      return;
    }
    categoryBtn.classList.add('active')
  });
};

//funcion para cambiar el estado del filtro activo

const changeFilterState = (btn) => {
  AppState.activeFilter = btn.dataset.category;
  changeBtnState(AppState.activeFilter);
};

//funcion apra filtrar lso prodcutos
const renderFilterProducts = () => {
  const filteredProducts = productos.filter((product) => product.category === AppState.activeFilter);

  //console.log(filteredProducts);
  renderProducts(filteredProducts);
}

//funcion para aplicar filtro
const applyFilter = ({target}) => {
  if (!isInactiveFilterBtn(target)) return;
    changeFilterState(target);
    ProductContainer.innerHTML = "";
    if(AppState.activeFilter){
      renderFilterProducts();
      AppState.currentProductIndex = 0;
      return
    };
    renderProducts(AppState.products[0]);
  
};

//funcion para saber si el boton es inactivo
const isInactiveFilterBtn = (element) =>{
  return (element.classList.contains("category") && 
  !element.classList.contains("active")
  );
};

//Carrito y Mneu BTN

const toggleCart = () => {
  cartMenu.classList.toggle("open_cart");

   if(barsMenu.classList.contains("open_menu")) {
    barsMenu.classList.remove("open_menu");
    return;
   }

  overlay.classList.toggle("show_overlay");
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open_menu");

if(cartMenu.classList.contains("open_cart")){
  cartMenu.classList.remove("open_cart");
  return;
}

  overlay.classList.toggle("show_overlay");
};

const closeOverlayClick = () => {
  barsMenu.classList.remove("open_menu");
  cartMenu.classList.remove("open_cart");
  overlay.classList.remove("show_overlay");
};

//Cart
const renderCart = () => {
  if(!cart.length){
  productsCart.innerHTML = '<p class="empty_msg">Agrega un producto</p>'
  return;
}
}


const addProduct = (e) => {
  if(!e.target.classList.contains("btn_add")) return;
  const product = e.target.dataset;

  if(isExistingCartProduct(product)){
    addUnitToProduct(product);
  } else {
    createCartProduct(product);
  }

  renderCart();
  console.log(cart);
};

//funct para aagregar una unidad al producto
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => 
    cartProduct.id === product.id
    ? {...cartProduct, quantity: cartProduct.quantity + 1 }
    : cartProduct
    );
}

//funct para saber si un prodcuto ya estea ne el cart
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

//funcion praa crear un objeto con la info del product que qeuremos agregar al cart
const createCartProduct = (product) => {
  cart = [...cart, {...product, quantity: 1}];
}

//Funcion init
const init = () => {
  renderProducts(AppState.products[0]);
  btnVerMas.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", closeOverlayClick);

  ProductContainer.addEventListener("click", addProduct);
  document.addEventListener("DOMContentLoaded", renderCart);
};

init();