const { getAllProducts } = require('../Controller/ProductController');

const Router = require('express').Router();

Router.route('/products').get(getAllProducts)


module.exports = Router;