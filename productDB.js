require('dotenv').config();
const connectDB=require('./db/connect');
const Product=require('./models/product');

const ProductJson= require('./products.json');

const start= async () => {
    try {
        await connectDB(process.env.MONGODB_URI);   //connect to database
        await Product.deleteMany();   //delete all products
        await Product.create(ProductJson);   //create product object
        console.log('Product saved successfully');
    } catch (error) {
        console.log(error);
    }
}

start();