let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PollSchema = new mongoose.Schema({
    _user:{type:Schema.Types.ObjectId, ref:'User'},
    question:{type:String, required:true},
    options:[{type:String ,required:true}],
    _like:[{type:Schema.Types.ObjectId, ref:'Like'}],
},{timestamps:true})

let Poll = mongoose.model('Poll', PollSchema);