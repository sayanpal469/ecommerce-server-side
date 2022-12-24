const express = require('express')
const app = express()
const ProductRoutes = require('./Routes/ProductRoutes')


app.use(express.json())
app.use('/api/v1', ProductRoutes)


module.exports = app;