const mongoose = require("mongoose")

const mongooseURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1';

 
mongoose.set('strictQuery', true);
const connectToMongo = () => {
    mongoose.connect(mongooseURL, () => {
        console.log("Connected to DB")
    })  
}  

module.exports = connectToMongo;