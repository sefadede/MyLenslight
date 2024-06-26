import mongoose from "mongoose";

const conn =()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName:"lenslight",
        useNewUrlParser:true,
    }).then(()=>{
        console.log("Connected to the DB succesfully")
    }).catch((err)=>{
        console.log(`DB Connection err:, ${err}`)
    })
};

export default conn;