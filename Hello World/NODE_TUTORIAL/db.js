const mongoose = require('mongoose');
require('dotenv').config();
// Define the MongoDB connection URL
const MONGODB_URL = process.env.MONGODB_URL;
// Set up MongoDB connection with updated options
local_mongodb_url='mongodb://localhost:27017/hotels';
// console.log(MONGODB_URL);
// mongoose.connect(MONGODB_URL);

mongoose.connect(local_mongodb_url);

// Get the default connection```
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongodb Connection established');
});

db.on('error', (err) => {
    console.error('Mongodb Connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongodb Connection disconnected');
});