const products = [
    {
        id: 1,
        name: 'Paleta Adidas',
        price: 60000,
        category: 'paletas',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/adipower-soft-201-79c960a7e0adb2295715911132659645-480-0.jpg',
        stock: 15,
        description: 'Descripcion de Paleda Adidas'
    },
    {
        id: 2,
        name: 'Paleta Bullpadel',
        price: 80000,
        category: 'paletas',
        img: 'https://www.streetpadel.com/images/products/HACK-2017-500X600-compressor.jpg',
        stock: 15,
        description: 'Descripcion de Paleda Adidas'
    }
]

export const getProducts = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        },3000)
    })
}