const products = [
    {
        id: '1',
        name: 'Paleta Adidas',
        price: 60000,
        category: 'adidas',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/adipower-soft-201-79c960a7e0adb2295715911132659645-480-0.jpg',
        stock: 15,
        description: 'La adidas adipower, paleta oficial del n°1 Alejandro Galán, es perfecta para las personas que quieren empezar a tomarse más en serio el padel y meterse de lleno en la competición. Ideal para jugadores agresivos y ofensivos.'
    },
    {
        id: '2',
        name: 'Paleta Bullpadel',
        price: 80000,
        category: 'bullpadel',
        img: 'https://www.streetpadel.com/images/products/HACK-2017-500X600-compressor.jpg',
        stock: 15,
        description: 'La paleta BullPadel Hack 03 es perfecta para los jugadores que quieren una mezcla entre control y ataque.'
    }
]

const categories = [
    {id : 'adidas', description: 'Adidas'},
    {id : 'bullpadel', description: 'Bullpadel'}
]

export const getCategories = () => {
    return new Promise (resolve => {
       setTimeout(() => {
          resolve(categories)
       },500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        },3000)
    })
}


export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },3000)
    })
}