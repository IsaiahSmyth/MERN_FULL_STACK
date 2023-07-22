const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        reuired: [true, "Please provide a title!"]
    },

    price: {
        type: Number,
        reuired: [true, "Please provide a price!"]
    },

    description: {
        type: String,
        reuired: [true, "Please provide a description!"],
        maxlength:[255, "Please keep your description under 256 characters!"]
    }
})