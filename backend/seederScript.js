require('dotenv').config();

const productDB = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany();

        await Product.insertMany(productDB);

        console.log("success data import");

        process.exit();

    } catch (error) {
        console.error("error import data");
        process.exit(1);
    }
};

importData();