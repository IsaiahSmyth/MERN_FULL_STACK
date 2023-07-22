const users = require('../models/user.model');
const userController = require('../controllers/user.controller');


module.exports = app =>{
    app.get('/api', userController.hello)

    app.get('/api/users', userController.allUser);

    app.get('/api/users/:id', userController.oneUser);

    app.post('/api/users', userController.newUser);

    app.put('/api/users/:id', userController.updateUser);

    app.delete('/api/users/:id', userController.deleteUser)
}