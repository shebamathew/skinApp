const express = require('express')
const ProductsService = require('./products-service')
const path = require('path')

const productsRouter = express.Router()
const jsonParser = express.json()
// const logger = require('./logger')

const serializeProduct = product => ({
  id: bookmark.id,
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

productsRouter 
  .route('/')
  .post(jsonParser, (req, res) => {
    const { product_name, product_link, product_type } = req.body
    const newProduct = { product_name, product_link, product_type }
    console.log('*****testing return*****', req.body)
      for (const [key, value] of Object.entries(newProduct)) 
        if (value === null)
          return res.status(400).json({
            error: { message: 'Missing ${key} in request body'}
          })
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