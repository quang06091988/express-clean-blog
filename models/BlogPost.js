const mongoose = require('mongoose')

const BlogPost = new mongoose.model('BlogPost', new mongoose.Schema({
    title: String,
    body: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String
}))

module.exports = BlogPost