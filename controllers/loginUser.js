const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
    User.findOne({
        username: req.body.username
    })
    .then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, same) => {
                if (same) {
                    req.session.userId = user._id
                    res.redirect('/')
                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            res.redirect('/auth/login')
        }
    })
}