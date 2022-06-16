// Import of node embedded modules
const path = require('path');

// Import of installed modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const dotenv = require('dotenv').config();


const sequelize = require('./utils/database');
const User = require('./models/user');
const logReq = require('./utils/logger');
const errorHandling = require('./middlewares/errorHandling');

const PORT = process.env.PORT || 3000;

const app = express();


// Secure Express apps by setting various HTTP headers
app.use(helmet());

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
app.use(cors()); // Kada se bude pustala aplikacija treba definisati CORS 

// Node.js compression middleware.
app.use(compression());

// HTTP request logger middleware for node.js
app.use(morgan('combined'));
// express-winston logger makes sense BEFORE the router
app.use(logReq.logger);


// Setting templateing engine and view folder
app.set('view engine', 'ejs');
app.set('views', 'views');



// Importing routes
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const peopleRoutes = require('./routes/people');



// Parsing and decoding middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());



// Using routes middleware
app.use(homeRoutes);
app.use(authRoutes);
app.use(peopleRoutes);


// express-winston errorLogger makes sense AFTER the router.
app.use(logReq.errorLogger);


// Error handling middlewares
app.use(errorHandling.notFound);
app.use(errorHandling.errorHandler);

const dbSync = require('./utils/dbSync');
dbSync.dbSync()


// Creating server
app.listen(PORT, () => console.log(`... Server is running on port ${PORT} ...`))