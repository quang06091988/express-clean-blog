const BlogPost = require('../models/BlogPost')
module.exports = (req, res) => {
    BlogPost.find({})
    .then((posts) => {
        res.render('index', {
            blogposts: posts
        })
    })
}