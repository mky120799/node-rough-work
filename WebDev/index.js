const mongoose = require('mongoose');
const { User, Address } = require('./User');

mongoose.connect("mongodb://localhost/testdb").then(()=>{
    console.log("connected with database");
}).catch(err => {
    console.log(err.message)
});

run();

async function run() {
    // Create and save the address first
    const address_1 = new Address({
        city: "Gurgoan",
        street: "chhoti mata mandir"
    });
    await address_1.save();

    // Reference the saved address in the user
    const user = await User.create({
        name: "Kyle",
        email: "mky120799@gmial.com",
        age: 26,
        hobbies: ["Wight Lifting", "Bowling"],
        address: address_1._id // Reference to Address document
    });

    console.log(user);
}

