const routes = require('express').Router();

routes.get('/', (req, res) => {

    return res.status(200).send({
        message:'Api operando..'
    })
    
});

module.exports = routes;