function makeTypesArray() {
    return [
        'Cleanser', 'Moisturizer', 'Sunscreen'
    ]
}

function makeProductsArray() {
    return [
        { productName:'Pibu Face Wash', productLink: "/", productType: ['Cleanser'] }, 
        { productName: 'Pibu Moisturizer with SPF', productLink: "/", productType: ['Moisturizer','Sunscreen']}, 
        { productName: 'Pibu Sunscreen SPF 50+', productLink: "/", productType: ['Sunscreen']}
    ]
}

function makeProfileArray() {
    return [
        { skinType: 'Dehydrated', climate: 'Dry' }
    ]
}

module.exports = {
    makeProductsArray, makeTypesArray, makeProfileArray
}
