import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    first_name: {
        type: String,
        required: 'Enter a first name'
    },
    first_name: {
        type: String,
        required: 'Enter a last name'
    },
    username: {
        type: String,
        required: 'Enter a first name'
    },
    password: {
        type: Mixed,
        required: 'Enter a first name'
    },
    age: {
        type: Number,
        required: 'Enter a valid age'
    },
    role: {
        type: Boolean,
        required: 'Enter a first name'
    },
    created_date: {
        type: Date,
        default: Date.now,
    }
})