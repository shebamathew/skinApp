const express = require('express')
const ProductsService = require('./products-service')
const path = require('path')

const productsRouter = express.Router()
const jsonParser = express.json()
// const logger = require('./logger')

const serializeProduct = product => ({
  id: product.id,
  product_name: product.product_name,
  product_link: product.product_link, 
  product_type: product.product_type
})

productsRouter
  .route('/')
  .get((req, res, next) => {
    console.log(req.query)
    ProductsService.getAllProducts(req.app.get('db'))
      .then(products => {
        res.json(products)
      })
      .catch(next)
})

productsRouter
  .route('/:product_id')
  .all((req, res, next) => {
    ProductsService.getById(req.app.get('db'), req.params.product_id)
    .then(product => {
      if(!product) {
        return res.status(404).json({
          error: { message: `Product doesn't exist` }
        })
      }
    res.product = product
    next()
  })
    .catch(next)
  })
  .get((req, res) => {
    res.json(serializeProduct(res.product))
  })
  .delete((req, res, next) => {
    ProductsService.deleteProduct(req.app.get('db'), req.params.product_id)
      .then(rowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const { product_name, product_link, product_type } = req.body
    const productToUpdate = { product_name, product_link, product_type }
    ProductsService.updateProduct(
      req.app.get('db'), 
      req.params.product_id,
      productToUpdate
    )
    .then(rowsAffected => {
      res.status(204).end()
    })
    .catch(next)
  })

productsRouter 
  .route('/')
  .post(jsonParser, (req, res) => {
    const { product_name, product_link, product_type } = req.body
    console.log('*****testing return*****', req.body)
    let requiredFields = ['product_name', 'product_link', 'product_type']

    requiredFields.forEach(field=> {
      if(!req.body.hasOwnProperty(field)){
        res.status(400).send(`Missing ${field} in req.body`);
      }
    })
    const newProduct = { product_name, product_link, product_type }
    ProductsService.insertProduct(
      req.app.get('db'), 
      newProduct
    )
    .then(product => {
      res.status(201)
      .location(path.posix.join(req.originalUrl, `/${product.id}`))
      .json(product)
    })
  })

async function checkProductExists(req, res, next) {
  try {
    const product = await ProductsService.getById(
      req.app.get('db'),
      req.params.product_id
    )

    if (!product)
      return res.status(404).json({
        error: `Product doesn't exist`
      })

    res.product = product
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = productsRouter