const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        first_name: {
            type: String,
            required: 'Enter a first name'
        },
        last_name: {
            type: String,
            required: 'Enter a last name'
        },
        username: {
            type: String,
            required: 'Enter a user name',
            min: 6
        },
        email: {
            type: String,
            required: 'Enter a valid email',
            min: 6,
            max: 255
        },
        password: {
            type: String,
            required: 'Enter a valid password',
            min: 6,
            max: 255
        },
        age: {
            type: Number,
            required: 'Enter a number'
        },
        role: {
            type: String,
            default: 'student'
        },
        created_date: {
            type: Date,
            default: Date.now,
        }
})

module.exports = mongoose.model('User', userSchema)