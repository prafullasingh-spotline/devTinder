const mongoose = require("mongoose")
const {schema} =  mongoose;

const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    emailId:String,
    age:Number,
    gender:String
})

const User = mongoose.model('User', userSchema);

module.exports = User;
