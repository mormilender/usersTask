
const authService = require('../services/auth');
const validation = require('../middlewares/validation');
const userService = require('../services/users');
const authClientRequest = require('../middlewares/authGaurd');


const init = (server) => {
    server.all('/*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        next();
    });
    
    server.post('/register', validation.validateBody(), authService.register);

    server.post('/login', validation.validateBody(), authService.login);

    server.get('/getusers', authClientRequest.authClientToken ,userService.getAllUsers);
    }



module.exports = {
    init: init
};