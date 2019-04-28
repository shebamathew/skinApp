export default {
    steps: [
      {
        id: '1',
        name: 'Cleanse',
        productIds: [ 'a'],
      },
      {
        id: '2',
        name: 'Moisturize',
        productIds: ['b'],
      },
      {
        id: '3',
        name: 'Sunscreen',
        productIds: [ 'c'],
      },
    ],
    products: [
        { id: 'a', name: 'Pibu Face Wash', link: '/', type: 'cleanser' },
        { id: 'b', name: 'Pibu Moisturizer', link: '/', type: 'moisturizer' },
        { id: 'c', name: 'Pibu Sunscreen', link: '/', type:'sunscreen'},
    ],
  }