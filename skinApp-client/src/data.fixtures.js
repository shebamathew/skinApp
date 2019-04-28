function makeStepsArray() {
    return [
        {
          id: '1',
          name: 'Cleanse',
          productIds: [0],
        },
        {
          id: '2',
          name: 'Moisturize',
          productIds: [1],
        },
        {
          id: '3',
          name: 'Sunscreen',
          productIds: [2],
        },
      ]
}

function makeProductsArray(){
    return [
        { id: 'a', name: 'Pibu Face Wash', link: '/', type: 'cleanser' },
        { id: 'b', name: 'Pibu Moisturizer', link: '/', type: 'moisturizer' },
        { id: 'c', name: 'Pibu Sunscreen', link: '/', type:'sunscreen'},
    ]
}

function makeProfileArray() {
    return [
        { skinType: 'Dehydrated', climate: 'Dry' }
    ]
}

module.exports = {
    makeProductsArray, makeProfileArray, makeStepsArray
}
