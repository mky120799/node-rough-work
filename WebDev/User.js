const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    city: String,
    street: String,
    phone: Number,

})

exports.Address = mongoose.model("Address", addressSchema);




const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:{type:String,
        required:true
    },
    
        bestFriend: { type: mongoose.SchemaTypes.ObjectId },
        hobbies: [String],
        address: {
            street: String,
            city: String
        }
    },{
        timestamps: true
    })

module.exports = mongoose.model("User",userSchema)  