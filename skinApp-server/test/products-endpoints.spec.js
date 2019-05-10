const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Products Endpoints', function() {
    let db

    const {
        testUsers,
        testProducts,
    } = helpers.makeProductsFixtures()

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe(`GET /products`, () => {
        context(`Given no products`, () => {
            it(`responds with 200 and an empty list`, () => {
                return supertest(app)
                    .get('/products')
                    .expect(200, [])
            })
        })
        context('Given there are products in the database', () => {
            beforeEach('insert products', () => {
                return db
                    .into('skinapp_products')
                    .insert(testProducts)
            })
            it('GET /products responds with 200 and all the products', () => {
                return supertest(app)
                    .get('/products')
                    .expect(200, testProducts)
            })
        })
    })
    describe(`GET /products/:product_id`, () => {
        context(`Given product doesn't exist`, () => {
            it(`responds with 404`, () => {
                const testId = 12345
                return supertest(app)
                    .get(`/products/${testId}`)
                    .expect(404, {
                        error: {
                            message: `Product doesn't exist`
                        }
                    })
            })
        })
        context('Given there are products in the database', () => {
            beforeEach('insert products', () => {
                return db
                    .into('skinapp_products')
                    .insert(testProducts)
            })
            it('responds with 200 and the specified product', () => {
                const prodId = 2
                const expectedProd = testProducts[prodId - 1]
                return supertest(app)
                    .get(`/products/${prodId}`)
                    .expect(200, expectedProd)
            })
        })
    })
    describe.only(`POST /products`, () => {
        it(`adds a product, responding with 201 and the added product`, function () {
            const newProduct = {
                product_name: 'Test product name',
                product_link: 'http://www.google.com',
                product_type: 'Test product type'
            }
            return supertest(app)
                .post('/products')
                .send(newProduct)
                .expect(201)
                .expect(res => {
                    expect(res.body.product_name).to.eql(newProduct.product_name),
                        expect(res.body.prodcut_link).to.eql(newProduct.product_link),
                        expect(res.body.product_type).to.eql(newProduct.product_type),
                        expect(res.body).to.have.property('id')
                })
                .then(res =>
                    supertest(app)
                        .get(`/products/${res.body.id}`)
                        .expect(res.body)
                )
        })
        const requiredFields = ['title', 'style', 'content']

        requiredFields.forEach(field => {
            const newProduct = {
                product_name: 'Test product name',
                product_link: 'http://www.google.com',
                product_type: 'Test product type'
            }

            it(`responds with 400 and an error message when the '${field}' is missing`, () => {
                delete newProduct[field]

                return supertest(app)
                    .post('/products')
                    .send(newProduct)
                    .expect(400, {
                        error: { message: `Missing '${field}' in request body` }
                    })
            })
        })
    })
    describe(`DELETE /products/:product_id`, () => {
        context(`Given product doesn't exist`, () => {
            it(`responds with 404`, () => {
                const prodId = 12345
                return supertest(app)
                    .delete(`/products/${prodId}`)
                    .expect(404, {
                        error: {
                            message: `Product doesn't exist`
                        }
                    })
            })
        })

        context('Given there are products in the database', () => {
            beforeEach('insert products', () => {
                return db
                    .into('skinapp_products')
                    .insert(testProducts)
            })

            it('responds with 204 and removes the specified product', () => {
                const idToRemove = 2
                const expectedProducts = testProducts.filter(prod => prod.id !== idToRemove)
                return supertest(app)
                    .delete(`/products/${idToRemove}`)
                    .expect(204)
                    .then(() => 
                        supertest(app)
                        .get(`/products`)
                        .expect(expectedProducts)
                    )
            })
        })
    })
})