require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes');

const path = require('path');

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

//deployment code start

__dirname = path.resolve();
if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,'/shopkart/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'shopkart', 'build', 'index.html'))
    })
}
else{
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

//deployment code end

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
