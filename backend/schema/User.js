const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
    user_name: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "cannot be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'User'
});

module.exports = mongoose.model('User', User);