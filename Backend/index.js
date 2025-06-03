require('dotenv').config;

const express = require('express');
const authRoutes = require('./routes/auth-route');

const app = express();
const port=process.env.port;

// middleware
app.use(express.json());

// auth routes
app.use('/api/auth', authRoutes);

app.listen(port, ()=> {
    console.log(`Server is Listerning on port ${port}`);
});