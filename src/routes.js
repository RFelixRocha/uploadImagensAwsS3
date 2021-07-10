const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get('/', (req, res) => {

    return res.status(200).send({
        version:'1.0.0',
        message:'Api operando..'
    })

});

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {

    console.log(req.file);

    return res.status(200).send({
        message:'Upload de images'
    })

});

module.exports = routes;