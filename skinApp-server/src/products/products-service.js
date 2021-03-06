const xss = require('xss')
const knex = require('knex')

const ProductsService = {
  getAllProducts(knex) {
    return knex
      .from('skinapp_products')
      .select('*')
  },
  getById(knex, id) {
    return knex.from('skinapp_products').select('*').where('id', id).first()
  },
  insertProduct(knex, newProduct){
    console.log(newProduct)
    return knex
      .insert(newProduct)
      .into('skinapp_products')
      .returning('*')
  }, 
  deleteProduct(knex, id){
    return knex('skinapp_products')
      .where({ id })
      .delete()
  }, 
  updateProduct(knex, id, newProductFields) {
    return knex('skinapp_products')
      .where({ id })
      .update(newProductFields)
  }
}

module.exports = ProductsService
