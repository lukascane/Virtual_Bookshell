const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username: {type:String, required:true},
    firstname: String,
    lastname: String,
    email: {type:String, required:true},
    password: {type:String, required:true},
    createdOn:{type:Date, default:Date.now()},
   /*  profile_img:{type:String} */
});

const User =model('user', UserSchema);
module.exports = User;