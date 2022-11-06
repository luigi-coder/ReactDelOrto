// Primera opcion de importacion
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
]; 


const owners = ['DC', 'Marvel'];

//export default heroes;

// otra opcion de exportacion para una normal 
// y para otra por defecto
export {
    heroes as default,
    owners
}

// Segunda opcion de importacion
/* export default [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];




/* 
// Arreglo de productos 
const zapatillas = [
    {
        id: 1,
        name: 'Nike',
        price: 100
    },
    {
        id: 2,
        name: 'Adidas',
        price: 200
    },
    {
        id: 3,
        name: 'Puma',
        price: 300
    }
]

const relojes = [
    {
        id: 1,
        name: 'Rolex',
        price: 1000
    },
    {
        id: 2,
        name: 'Casio',
        price: 2000
    },
    {
        id: 3,
        name: 'Tissot',
        price: 3000
    }
]

export {
    zapatillas as default,
    relojes
}

 */