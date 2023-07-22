const Movie = require('../models/movie.model')


module.exports = {

    test : (req, res) => {
        res.json({msg: "Everythng works"})
    },

    create : (req, res) => {
        Movie.create(req.body)
        .then(movie=>res.json(movie))
        .catch(err=>res.status(400).json(err))
    },

    all : (req, res) =>{
        Movie.find()
        .then(movie=>res.json(movie))
        .catch(err=>res.json(err))
    },

    one : (req, res) =>{
        Movie.findOne({ _id: req.params.id})
        .then(movie=>res.json(movie))
        .catch(err=>res.json(err))
    },

    update : (req, res) =>{
        Movie.findOneAndUpdate({ _id: req.params.id}, req.body, {runValidators: true, new: true})
        .then(movie=>res.json(movie))
        .catch(err=>res.json(err))
    },

    delete : (req, res) =>{
        Movie.findOneAndDelete({ _id: req.params.id})
        .then(movie=>res.json(res))
        .catch(err=>res.json(err))
    }
}