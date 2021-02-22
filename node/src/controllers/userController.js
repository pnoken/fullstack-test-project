const mongoose = require('mongoose');
const User = require('../models/User');

//const User = mongoose.model('Contact', UserSchema);

module.export= addNewUser = (req, res) => {
    let newUser = new User(req.body);
    
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user)
    })
}

module.exports = getUsers = (req, res) => {
    
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user)
    })
}

module.exports = authRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role){
            res.status(401)
            return res.send("Not Allowed")
        }
        next()
    }
}