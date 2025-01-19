const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['spicy','sweet','sour','bitter','salty'],
        required:true
    },
    is_drink:{
        type:Boolean,
        required:false,

    },
    ingredients:{
        type:[String],
        default:0,
    },
    num_sales:{
        type:Number,
        default:0,
    }
});



//create menu model

const Menu = mongoose.model('Menu', menuItemSchema);

module.exports = Menu;