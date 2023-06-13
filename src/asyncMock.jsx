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