const productos = [
    {
        id : 1,
        nombre : "tal",
        precio : 20.5,
        stock : 20,
        categoria : ["teclados"],
        img : "#",
    },
    {
        id: 2,
        nombre: "taltal",
        precio: 34.9,
        stock: 20,
        categoria: ["mouse"],
        img: "#",
    },
    {
        id: 3,
        nombre: "taltaltal",
        precio: 78.6,
        stock: 20,
        categoria: ["auriculares"],
        img: "#",
    },
    {
        id: 4,
        nombre: "taltaltaltal",
        precio: 100,
        stock: 20,
        categoria: ["bocinas"],
        img: "#",
    },
    {
        id: 5,
        nombre: "tal*5",
        precio: 80,
        stock: 20,
        categoria: ["otros"],
        img: "#",
    },
    {
        id: 6,
        nombre: "tal*6",
        precio: 37.2,
        stock: 20,
        categoria: ["mouse"],
        img: "#",
    },
    {
        id: 7,
        nombre: "tal*7",
        precio: 15.9,
        stock: 20,
        categoria: ["bocinas"],
        img: "#"
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
};