// Export mongoose
const mongoose = require('mongoose');

//import dotenv to mask connection string
require('dotenv/config');

//assign the MongoDB connection string to a constant
var uri = process.env.DB_CONNECTION //|| "mongodb+srv://rainforest:ADMIN@rainforest.tuqge.mongodb.net/rainForest?retryWrites=true&w=majority";

//declare and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connect to MongoDB Atlas using the mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established");
},
err => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});