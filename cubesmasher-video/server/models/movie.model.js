const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please provide a title!"]
    },

    year: {
        type: Number,
        required: [true, "Please provide a release years!"]
    },

    genre: {
        type: String,
        required: [true, "Please provide a genre!"]
    },

    description: {
        type: String,
        required: [true, "Please provide a description!"],
        maxlength:[255, "Please keep you description under 256 charactors!"]
    },

    poster: {
        type: String,
    },



}, {timestamps: true})



const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie