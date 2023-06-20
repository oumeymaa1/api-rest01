// 1 require mongoose
const mongoose = require ('mongoose');

// 2 create DB
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected ..')
    }catch(error){
        console.log(error)
    }
};

// 3 export
module.exports = connectDB;