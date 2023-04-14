const path = require('path')
const BlogPost = require('../models/BlogPost')
module.exports = (req, res) => {
    let image = req.files.image
    image.mv(path.resolve(__dirname, '..', 'public/upload', image.name))
    .then(() => {
        BlogPost.create({
            ...req.body,
            image: '/upload/' + image.name
        })
        .then(() => {
            res.redirect('/')
        })
    })
}