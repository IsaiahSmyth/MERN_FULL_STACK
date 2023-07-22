const Product = require('../models/movie.model')


module.exports = {

    test : (req, res) => {
        res.json({msg: "Everythng works"})
    },

    create : (req, res) => {
        Product.create(req.body)
        .then(product=>res.json(product))
        .catch(err=>res.status(400).json(err))
    },

    all : (req, res) =>{
        Product.find()
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
    },

    one : (req, res) =>{
        Product.findOne({ _id: req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
    },

    update : (req, res) =>{
        Product.findOneAndUpdate({ _id: req.params.id}, req.body, {runValidators: true, new: true})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
    },

    delete : (req, res) =>{
        Product.findOneAndDelete({ _id: req.params.id})
        .then(product=>res.json(res))
        .catch(err=>res.json(err))
    }
}