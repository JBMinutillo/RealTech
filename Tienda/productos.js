const productos = [
    {
        id : 1,
        nombre : "tal",
        precio : 20.5,
        stock : 20,
        category: "teclados",
        img : "#",
    },
    {
        id: 2,
        nombre: "taltal",
        precio: 34.9,
        stock: 20,
        category: "mouse",
        img: "#",
    },
    {
        id: 3,
        nombre: "taltaltal",
        precio: 78.6,
        stock: 20,
        category: "auriculares",
        img: "#",
    },
    {
        id: 4,
        nombre: "taltaltaltal",
        precio: 100,
        stock: 20,
        category: "bocinas",
        img: "#",
    },
    {
        id: 5,
        nombre: "tal*5",
        precio: 80,
        stock: 20,
        category: "otros",
        img: "#",
    },
    {
        id: 6,
        nombre: "tal*6",
        precio: 37.2,
        stock: 20,
        category: "mouse",
        img: "#",
    },
    {
        id: 7,
        nombre: "tal*7",
        precio: 15.9,
        stock: 20,
        category: "bocinas",
        img: "#",
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