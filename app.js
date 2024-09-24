require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
// const bodyParser = require('body-parser');
const products_routes = require("./routes/products");
app.get('/', (req, res) => {
    res.send('Hello World!');
})



// middleware or to set router
app.use('/api/products', products_routes);

const start= async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();