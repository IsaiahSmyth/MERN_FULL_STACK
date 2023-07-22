const ProductController = require('../controllers/product.controller')



module.exports = app => {
    app.get('/api', ProductController.test)


    app.get('./api/product', ProductController.create)

    app.get('./api/product', ProductController.all)

    app.get('./api/product/: id', ProductController.one)

    app.put('./api/product/: id', ProductController.update)

    app.delete('./api/product/: id', ProductController.delete)
}