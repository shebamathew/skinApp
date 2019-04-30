function makeSteps() {
    return [
        {
          id: '1',
          name: 'Cleanse',
          productIds: ['a'],
        },
        {
          id: '2',
          name: 'Moisturize',
          productIds: ['b'],
        },
        {
          id: '3',
          name: 'Sunscreen',
          productIds: ['c'],
        },
      ]
}

function makeProducts(){
    return {'a': {name: 'Pibu Face Wash', link: '/', type: 'cleanser' }, 
           'b': {name: 'Pibu Moisturizer', link: '/', type: 'moisturizer'}, 
           'c': {name: 'Pibu Sunscreen', link: '/', type:'sunscreen'} 
    }
}


function makeProfile() {
    return [
        { skinType: 'Dehydrated', climate: 'Dry', skinConcern: 'Acne' }
    ]
}

module.exports = {
    makeProducts, makeProfile, makeSteps
}
