const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {type:String, unique:true, require:true},
    password: {type:String, unique:true, require:true},
    createAt: Date,
    updateAt: Date
},{
    timeShape: true
});

module.exports = mongoose.model('User', UserSchema);