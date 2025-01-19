// creating promise, chaining & error handling

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

promise.then(function(){
    proceeedToPayment(orderId);
})

/// producer

function createOrder(cart){

    const pr = new Promise(function(resolve, reject){
        ///createOrder
        /// validateCart
        //orderId
        if(!validateCart(cart)){
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";
        if(orderId){resolve(orderId);}
    });
}