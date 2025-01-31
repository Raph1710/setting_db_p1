const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3010;

app.use(express.static('static'));

const mongoURI = 'mongodb+srv://Raphael:12345@cluster0.wmcoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅Database connection successful"))
  .catch((err) => console.error("❌Database connection error:", err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
