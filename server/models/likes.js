let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LikeSchema = new mongoose.Schema({
   like:{type:String,required:false}
},{timestamps:true})

let Like = mongoose.model('Like', LikeSchema);