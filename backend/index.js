const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Set up express
const app = express();
app.use(express.json());
app.use(cors());

// Set up server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`[Success]: Server running on port: ${PORT}`));


// Set up mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log('[Success]: MongoDB connection established');
});


// Set up routes
app.use('/users', require('./routes/userRouter'));
