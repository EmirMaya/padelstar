const products = [

]

const categories = [
    {id : 'zapatillas', description: 'Zapatillas'},
    {id : 'accesorios', description: 'Accesorios'},
    {id : 'paletas', description: 'Paletas'}
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