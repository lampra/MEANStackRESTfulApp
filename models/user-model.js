const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    registerDate: Date,
    lastLogin: Date,
    currentlyLoggedIn: { type: Boolean, default: false },
}, { collection: 'users' })

const User = module.exports = mongoose.model('User-model', userSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}
module.exports.getUserByUsername = function (userName, callback) {
    const query = { userName: userName }
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}