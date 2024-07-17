// app.js
require('dotenv').config();
const express = require('express');
const connectDb = require('./model/db');

const app = express();

connectDb().then(db => {
  // Sử dụng db để thực hiện các hoạt động trên MongoDB
  console.log("Database connected");
}).catch(err => {
  console.error('Failed to connect to database:', err);
});

// Các cấu hình khác của express...
