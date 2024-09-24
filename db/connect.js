
const mongoose = require('mongoose');
const { use } = require('../routes/products');
//const uri = "mongodb+srv://ashish421990:LMxsmSe5U6bvxwdI@cluster0.fbvys6n.mongodb.net/Cluster0?retryWrites=true&w=majority";
//const uri="mongodb+srv://ashish421990:LMxsmSe5U6bvxwdI@cluster0.fbvys6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = (uri) => {
    console.log('connect database');
    mongoose.connect(uri);
};

module.exports = connectDB;
