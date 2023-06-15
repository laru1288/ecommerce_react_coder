const products = [
    {
        id:'1', 
        name:'Cafe colombiano 1k', 
        price:1500, 
        category:'cafe', 
        stock:4, 
        img:'./src/assets/cafecolombiano.webp', 
        description:'Cafe colombiano de primera calidad. Presentación 1 kilo.'
    },
    {
        id:'2', 
        name:'Cafe colombiano 1/2k', 
        price:800, 
        category:'cafe', 
        stock:2, 
        img:'./src/assets/cafecolombiano.webp', 
        description:'Cafe colombiano de primera calidad. Presentación 1/2 kilo.'
    },
    {
        id:'3', 
        name:'Cafe italiano 1k', 
        price:1600, 
        category:'cafe', 
        stock:2, 
        img:'./src/assets/cafeitaliano.webp', 
        description:'Cafe italiano de primera calidad. Presentación 1 kilo.'
    },
    {
        id:'4', 
        name:'Cafe italiano 1/2k', 
        price:900, 
        category:'cafe', 
        stock:3, 
        img:'./src/assets/cafeitaliano.webp', 
        description:'Cafe italiano de primera calidad. Presentación 1/2 kilo.'
    },
    {
        id:'5', 
        name:'Blend cafe 1k', 
        price:2000, 
        category:'cafe', 
        stock:1, 
        img:'./src/assets/cafeblend.webp', 
        description:'El mas exquisito blend de cafe. Presentacion 1 kilo'
    },
    {
        id:'6', 
        name:'Blend cafe 1/2k', 
        price:1200, 
        category:'cafe', 
        stock:3, 
        img:'./src/assets/cafeblend.webp', 
        description:'El mas exquisito blend de cafe. Presentacion 1/2 kilo'
    },
    {
        id:'7', 
        name:'Taza especial', 
        price:2500, 
        category:'accesorios', 
        stock:1, 
        img:'./src/assets/taza.webp', 
        description:'Taza especial, la taza mas linda que vas a ver en tu vida, capacidad: 300ml.'
    },
    {
        id:'8', 
        name:'Azucar en cubos', 
        price:500, 
        category:'extras', 
        stock:2, 
        img:'./src/assets/azucar.webp', 
        description:'Cubos de azucar, presentacion ideal para usar la medida justa y ademas son re instagrameables! Presentacion de 1/2 kilo.'
    },
    {
        id:'9', 
        name:'Cuchara fancy', 
        price:600, 
        category:'accesorios', 
        stock:2, 
        img:'./src/assets/cuchara.webp', 
        description:'Ningun cafe esta completo sin esta cuchara.'
    },
    {
        id:'10',
        name:'Amarettis', 
        price:400, 
        category:'extras', 
        stock:3, 
        img:'./src/assets/amaretti.webp', 
        description:'Mini galletitas de almendra, las mas ricas para acompañar tu cafe. Presentacion de 250gm.'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}