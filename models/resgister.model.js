const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    userName: {type: String, unique:true, require:true},
    hash: {type: String, require:true},
    firstName: {type:String, require:true},
    lastName: {type:String, require:true},
    createDate: {type:Date, default:Date.now}
});

RegisterSchema.set('toJSON', {virtual:true});
module.exports = mongoose.model('User', RegisterSchema);