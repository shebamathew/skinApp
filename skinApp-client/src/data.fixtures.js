function makeTypesArray() {
    return [
        'Cleanser', 'Moisturizer', 'Sunscreen'
    ]
}

function makeProductsArray() {
    return [
        { name:'Pibu Face Wash', link: "/", type: ['Cleanser'] }, 
        { name: 'Pibu Moisturizer with SPF', link: "/", type: ['Moisturizer','Sunscreen']}, 
        { name: 'Pibu Sunscreen SPF 50+', link: "/", type: ['Sunscreen']}
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
