const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
// const adminRoutes = require('./routes/adminRoutes');
// const productRoutes = require('./routes/productRoutes');
// const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/products', adminRoutes);

sequelize
    .sync()
    .then(() => {
        console.log('Database synced!');
    })
    .catch((err) => console.log(err));

module.exports = app;
