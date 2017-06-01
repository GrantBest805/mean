let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
},{timestamps:true})

let User = mongoose.model('User', UserSchema);