const express = require('express');
const app = express();

const db = require('./db');
const Person = require('./models/person');
const Menu = require('./models/menu');

const menuItemRoutes = require('./routes/menuItemRoutes');

const bodyParser = require('body-parser');
// require('dotenv').config();

const passport = require('passport');
const localAuthMiddleware = require('./auth').localAuthMiddleware;
// Import the personRoutes files
const personRoutes = require('./routes/personRoutes');





app.use(passport.initialize());



app.get('/', localAuthMiddleware, (req, res) => {
    res.send('Welcome to the Hotel');
});

// Use the personRoutes
app.use(bodyParser.json()); // request body is parsed as json
app.use('/person', personRoutes); // all routes defined in personRoutes will have /person as a prefix
app.use('/menu',menuItemRoutes); // all routes defined in menuItemRoutes will have /menu as a prefix

const PORT = 3001; // Change the port number to 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});