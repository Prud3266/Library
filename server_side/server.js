require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db');
const enrollRoute = require('./routes/enroll');
const verifyRoute = require('./routes/verify');
const exitRoute = require('./routes/exit');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/enroll', enrollRoute);
app.use('/verify', verifyRoute);
app.use('/exit', exitRoute);

// Connect to the database and then start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB 😢', err);
});