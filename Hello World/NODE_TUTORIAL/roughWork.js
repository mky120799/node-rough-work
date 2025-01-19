const express = require('express');
const app = express();
const Person = require('./models/person');
const Menu = require('./models/menu');
const db = require('./db');
const bodyParser = require('body-parser');

//Import the personRoutes files
const personRoutes = require('./routes/personRoutes');



app.use(bodyParser.json());//request body is parsed as json
app.use('/person',personRoutes); //Use the personRoutes





app.get('/', (req, res) => {
    res.send('Welcome to the hotel... How can i help you?,we list of menu')});



//POST method to add a Menu item



// parameterized route to get the list of persons based on the work type
// The workType can be chef, waiter or manager
// Example: /person/chef
// Example: /person/waiter
// Example: /person/manager




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

