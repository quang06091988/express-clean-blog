const BlogPost = require('../models/BlogPost')
module.exports = (req, res) => {
    BlogPost.findById(req.params.id)
    .then(detailPost => {
        res.render('post', {
            detailPost
        })
    })
}