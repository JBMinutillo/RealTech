const productos = [
    {
        id : 1,
        nombre : "Teclado gamer mecanico T-DAGGER BORA T-TGK315/TGK313",
        precio : 20.5,
        stock : 20,
        category: "teclados",
        img : "https://dcdn.mitiendanube.com/stores/001/231/930/products/bora-rgb-bloque-1-teclado-tkl1-6abda3a30cb178132616924530912328-640-0.webp",
    },
    {
        id: 2,
        nombre: "Mouse Gamer Redragon Impact M908 Rgb 18 Botones",
        precio: 34.9,
        stock: 20,
        category: "mouse",
        img: "https://acdn.mitiendanube.com/stores/896/208/products/m908-11-681a293f1aedee974b16121587396678-640-0.png",
    },
    {
        id: 3,
        nombre: "Auriculares gaming MH4V2",
        precio: 78.6,
        stock: 20,
        category: "auriculares",
        img: "https://es.marsgaming.eu/uploads/_thumnails/mh4v2_960x960.png",
    },
    {
        id: 4,
        nombre: "Parlante con Luz – Modelo SK-501",
        precio: 100,
        stock: 20,
        category: "bocinas",
        img: "https://xtrike-me.com.ar/media/2022/07/SK-501-3-1.png",
    },
    {
        id: 5,
        nombre: "Tira luces led dinax 5050 RGB 5MTS. con control y fuente",
        precio: 80,
        stock: 20,
        category: "otros",
        img: "https://fenixhogar.com.ar/wp-content/uploads/2023/02/5050m.png",
    },
    {
        id: 6,
        nombre: "Mouse Gaming – Modelo GM-216",
        precio: 37.2,
        stock: 20,
        category: "mouse",
        img: "https://xtrike-me.com.ar/media/2022/07/GM-216-1-768x768.png",
    },
    {
        id: 7,
        nombre: "GS-01 Parlantes GAMER",
        precio: 15.9,
        stock: 20,
        category: "bocinas",
        img: "https://unitecusashop.com/cdn/shop/products/prod.13816.1_1.png?v=1679345432",
    }
];

const DivideProductsInParts = (size) => {
    let productList = [];

    for(let i = 0; i < productos.length; i += size){
        productList.push(productos.slice(i, i + size));
    }
    return productList;
};

//Appstate
const AppState = {
    products: DivideProductsInParts(6),
    currentProductIndex: 0,
    productsLimit: DivideProductsInParts(6).length,
    activeFilter: null,
};