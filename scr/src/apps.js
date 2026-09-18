const express = require('express');
const app = express();

app.use(express.json());

// مسارات التجارة الرقمية المبدئية
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;
