const bcrypt = require('bcryptjs')

function makeUsersArray() {
    return [
        {
            id: 1,
            email: 'tu1@pibulab.com',
            username: 'test-user-1',
            pass: 'password'
        },
        {
            id: 2,
            email: 'tu2@pibulab.com',
            username: 'test-user-2',
            pass: 'password'
        },
        {
            id: 3,
            email: 'tu3@pibulab.com',
            username: 'test-user-3',
            pass: 'password'
        }
    ]
}

function makeProductsArray(user) {
    return [
        {
            id: 1,
            product_name: 'Ursa Major Face Wash',
            product_link: 'https://www.amazon.com/Ursa-Major-Natural-Cruelty-Free-Cleanser/dp/B00652Y6MK/ref=sr_1_10?keywords=face+wash&qid=1556846016&refinements=p_72%3A2661618011&rnid=2661617011&s=gateway&sr=8-10',
            product_type: 'Cleanser',
        },
        {
            id: 2,
            product_name: 'Mizon All-In-One Snail Cream',
            product_link: 'https://www.peachandlily.com/products/all-in-one-snail-repair-cream',
            product_type: 'Moisturizer',
        },
        {
            id: 3,
            product_name: 'Shiseido Urban Environment UV Protector SPF 42',
            product_link: 'https://www.sephora.com/product/urban-environment-oil-free-uv-protector-broad-spectrum-spf-42-for-face-P307405?om_mmc=ppc-GG_1533944608_60212794284_pla-296569923319_1452002_291191670138_9001999_c&country_switch=us&lang=en&ds_rl=1261471&gclid=CjwKCAjwqqrmBRAAEiwAdpDXtJly1nLZGNugKcjL4hk67GlNJQMpYFI2a8uCn967fK9rILk9RlLq5xoCBgMQAvD_BwE&gclsrc=aw.ds',
            product_type: 'Sunscreen',
        },
    ]
}

function makeProductsFixtures() {
    const testUsers = makeUsersArray()
    const testProducts = makeProductsArray(testUsers)
    return { testUsers, testProducts }
}

function cleanTables(db) {
    return db.raw(
      `TRUNCATE
        skinapp_products, 
        skinapp_users, 
        skinapp_skinprofiles
        RESTART IDENTITY CASCADE`
    )
}

function seedUsers(db, users) {
    const preppedUsers = users.map(user => ({
      ...user, 
      pass: bcrypt.hashSync(user.pass, 1)
    }))
    return db.into('skinapp_users').insert(preppedUsers)
      .then(() => 
        db.raw(
          `SELECT setval ('skinapp_users_id_seq', ?)`, 
          [users[users.length-1].id], 
        )
      )
  }

module.exports = {
    makeUsersArray,
    makeProductsArray,
    makeProductsFixtures, 
    cleanTables, 
    seedUsers
}