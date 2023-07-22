const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        first:{
            type: String,
            required : [true, "Please include a first name!"],
            minlength : [2, "First name must be atleast 2 chars"],
        },
        last:{
            type:String,
        },
    }
)