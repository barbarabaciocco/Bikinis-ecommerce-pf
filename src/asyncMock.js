const products = [
    {
        id: '1',
        name: 'Bikini Alaska',
        price: 10000,
        category: 'Bikinis',
        img:'',
        stock: 30,
        description: 'Bikini blanca, reversible con flores'
    },
    {
        id: '1',
        name: 'Bikini BW',
        price: 17000,
        category: 'Bikinis',
        img:'https://acdn.mitiendanube.com/stores/002/198/553/products/59e88215-90b5-4753-8428-a5102e04f2931-8aded5c8007582bacd16616361446706-1024-1024.webp',
        stock: 30,
        description: 'Bikini blanca y negra'
    },
    {
        id: '2',
        name: 'Bikini Sky',
        price: 15000,
        category: 'Bikinis',
        img:'https://acdn.mitiendanube.com/stores/002/198/553/products/d23c81eb-3941-49ab-9990-a0a5d2c895cb1-1231199a34553dd8cf16885076698919-1024-1024.webp',
        stock: 25,
        description: 'Bikini azul, reversible con flores'
    },
    {
        id: '3',
        name: 'Bikini Cetus',
        price: 13000,
        category: 'Bikinis',
        img:'https://acdn.mitiendanube.com/stores/002/198/553/products/n11881-3ca7b1d88d133e744716793431036096-1024-1024.webp',
        stock: 28,
        description: 'Bikini roja con flores'
    },
    {
        id: '4',
        name: 'Bikini Indus',
        price: 10000,
        category: 'Bikinis',
        img:'https://acdn.mitiendanube.com/stores/002/198/553/products/n131-0396876a53c628af2f16794972646864-1024-1024.webp',
        stock: 20,
        description: 'Bikini con flores de colores'
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