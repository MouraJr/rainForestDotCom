'use strict';

// require express and cors
const express = require('express');
const cors = require("cors");

// Import DB connection
require('dotenv/config');
require("./db_config/db");

//create express app
const app = express();

//define port to run express app
const port = process.env.PORT || 3000;

// use middleware express app for json and use cors
app.use(express.json());
app.use(cors());


// Import routes
var routes = require('./routes/productRoutes');
routes(app);


// Listen to the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});