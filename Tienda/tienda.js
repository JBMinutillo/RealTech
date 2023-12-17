//Contenedor de productos

const ProductContainer = document.querySelector(".product_container");

//LLamar byn ver mas
const btnVerMas = document.querySelector(".btn_load");

//LLamar btn categorias
const categoriesContainer = document.querySelector(".categories");

//HTML colection de todas las categorias
const categoriesList = document.querySelectorAll(".category");

//Funcion para crear el html del producto
const createProductTemplate = (products) => {
  const { id, nombre, precio, stock, categoria, img} = products;

return `<div class="card">
  <img src="${img}" alt="" class="img_card" />
  <h2 class="producto_name">${nombre}</h2>
  <div class="btn_card">
    <a href="" class="link_vermas">Ver Más</a>
    <button class="btn_carrito" id="btn_sumaralcarrito">Sumar al carrito</button>
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
  })
}

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

//Funcion init
const init = () => {
  renderProducts(AppState.products[0]);
  btnVerMas.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
};

init();