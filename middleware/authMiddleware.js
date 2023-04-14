const User = require('../models/User')
module.exports = (req, res, next) => {
    User.findById(req.session.userId)
    .then(user => {
        if (user) {
            return next()
        } else {
            return res.redirect('/auth/login')
        }
    })
}