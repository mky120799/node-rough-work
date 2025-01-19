const express = require('express');
const Menu = require('./../models/menu')
const router = express.Router();

// Define your routes here
router.post('/', async(req, res) => {
    try{
        // Assuming that the request body is an object having the properties of the menu model
        const data = req.body;
        //Create a new menu document using the Mongoose model
        const newMenu = new Menu(data);
        response = await newMenu.save()//here it can throw errors as well, so to handle that we have catch block below
        console.log('data saved');
        res.status(200).send(response);//send the saved menu document as a response
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Error'});
        }
});

router.get('/items',async(req, res) => {
    try{const data = await Menu.find();     //fetch all the menu items from the database
        console.log('data fetched');
    res.status(200).send(data);
}
catch(err){
   const data = await Menu.find();
   res.status(500).json({error:'Internal Server Error'});
}
});

router.get('/:taste', async(req, res) => {
    try{
        const tastType = req.params.taste;// we are extracting the taste from the request parameters
        if(tastType === 'sweet' || tastType === 'sour' ||  tastType === 'spicy'|| tastType === 'bitter'|| tastType === 'salty'){
            const response = await Menu.find({taste: tastType});
            res.status(200).send(response);
        } else {
            res.status(400).json({error: 'Invalid taste type'});
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = router;