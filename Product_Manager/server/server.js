require ('dotenv').config
require ('./config/mongoose.config')

const express = require("express")
const app = express()
const cors = require('cors')



app.use(express.json(), express.urlencoded({extended:true}), cors)

const routes = require('./routes/product.route')
routes(app)

app.listen(8000, ()=>console.log("Server Online!!!"))