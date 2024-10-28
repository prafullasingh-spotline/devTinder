// DAY 1
// ---------------------------------------------------------------------------------------------------
// const express = require("express");
// const app = express();


// app.get("/help",(req,res)=>{
//     res.send("This is Prafull here You will get the help from GET request");
// })

// app.post("/helpPost",(req,res)=>{

//     res.send("This is Prafull here You will get the help from POST request")
// })

// app.patch("/helpPost",(req,res)=>{
    
//     res.send("This is Prafull here You will get the help from PATCH request")
// })

// app.delete("/helpPost",(req,res)=>{
    
//     res.send("This is Prafull here You will get the help from DELETE request")
// })


// app.use("/hello",(req,res)=>{
//     res.send("Hello Prafull, Help is needed");
// });
// app.get("/",(req,res)=>{
//     res.send("Hello Prafull Server is started");
// });

// app.listen(3000,()=>{
//     console.log("server is started");
// });







// / DAY 2
// ---------------------------------------------------------------------------------------------------
// const express = require("express");
// const app = express();



// app.use("/",(req,res)=>{
//     res.send("Hey MAN This is home page");
// });

// app.use("/user",(req,res,next)=>{
//     console.log("/user");
//     // next();
//     res.send("Hey MAN This is user1");
    
// },
// (req,res)=>{
//     console.log("/user2");
//     res.send("Hey MAN This is user2");
// }
// );


// app.listen(3000,()=>{
//     console.log("server Started");
// });


// ------------------------------------------------------------------------------------------

// day 3
// Mongodb
const express = require("express");
const app= express();
const mongoose = require("mongoose");
const connectDB = require("./databse.js");
const User =require("./models/user.js")
app.use(express.json())

// connectDB()
// const connectDb = async()=>
//     {
//        await  mongoose.connect("mongodb+srv://prafull:prafull@devtinder.qb2dk.mongodb.net/?retryWrites=true&w=majority&appName=devTinder")
//     }

    connectDB().then(()=>{
        app.listen(3000,()=>{
            console.log("Server is started Prafull Sir");
        })

        console.log("databse connection Established");
    })
    .catch((err)=>{
        console.error("db can not connected");
    })

    app.post("/signUp",async (req,res)=>{
        // const user =new User({
            // fName: "Kasak",
            // lName: "Singh",
            // emailId:"kasaksingh@gmail.com",
            // age:24,
            // gender:"Female"
        // })
        const user = req.body;
        console.log(user);
        try{
            // await user.save();
            // await user.save();
            await User.create(user)
            res.send("User Added Successfully")
        }
        catch(err){
            res.status(404).send("Error in creating the User " + err.message)
        }
        
    })
    app.get("/user",async(req,res)=>{
        try {
            const users= await User.find({});
            res.send (users);
        } catch (error) {
            res.status(404).send("Error in creating the User " + err.message)
        }
    })

    app.delete("/user", async(req,res)=>{
        try {
            console.log("step1");
            const userId = req.body.id;
            console.log(userId);
            await User.findByIdAndDelete({_id: userId });
            console.log("deleted");
            res.send("user is deleted");
        } catch (error) {
            res.status(404).send("Error in deleting the User ")
        }
    })

    app.patch("/updateUser",async(req,res)=>{
        try {
            const userId =req.body.id;
            const data = req.body;
            await User.findOneAndUpdate({_id:userId},data);
            res.send("Updated Profile");
        } catch (error) {
            res.status(404).send("Something went wrong");
        }
    })

    app.use("/",(req, res)=>{
        res.send("Hello Sir How are you This is Home page");
    })

