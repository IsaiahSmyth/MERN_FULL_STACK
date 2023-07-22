const express = require('express')
const app = express()
const port = 8000


require('dotenv').config()
require('./config/mongoose.config')
const cors = require('cors')




app.use( express.json());
app.use( express.urlencoded({ extended: true }));
app.use(cors())


const routeAttacher = require('./routers/user.router')

routeAttacher(app)

app.listen( port, ()=>console.log(">>>SERVER ONLINE"))