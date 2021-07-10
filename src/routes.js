const routes = require('express').Router();
const { sync } = require('isexe');
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.get('/', (req, res) => {

    return res.status(200).send({
        version:'1.0.0',
        message:'Api operando..'
    })

});

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {

    const { originalname: name, size, key } = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url: ''
    })

    return res.json(post);
});

module.exports = routes;