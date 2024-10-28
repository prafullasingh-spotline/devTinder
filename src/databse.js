const mongoose= require("mongoose");

const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://prafull:prafull@devtinder.qb2dk.mongodb.net/",
       
    );
}
connectDB()
    
module.exports = connectDB;