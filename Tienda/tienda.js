//Contenedor de productos

const ProductContainer = document.querySelector(".product_container");

//Funcion para crear el html del producto
const createProductTemplate = (productos) => {
  const { id, nombre, precio, stock, categoria, img} = productos;

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

//Funcion init
const init = () => {
  renderProducts(AppState.products[0])
};

init();