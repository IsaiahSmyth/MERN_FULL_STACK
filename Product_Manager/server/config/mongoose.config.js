const mongoose = require('mongoose')

const db = process.env.DB 
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD
const host = process.env.ATLAS_HOST





const dburl = `mongodb+srv://${username}:${password}@${host}.mongodb.net/${db}?retryWrites=true&w=majority`


mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log("Successfully established connection to "+host+"!")})
.catch(err=>{console.log("Database connection failed ", err)})