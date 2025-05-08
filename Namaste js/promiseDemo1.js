// creating promise, chaining & error handling

const cart = [];

const promise = createOrder(cart); // orderId

promise.then(function(orderId){
    proceedToPayment(orderId);
})

////////////// producer

function createOrder(cart){

    const pr = new Promise(function(resolve, reject){
        ///createOrder
        /// validateCart
        //orderId
        if(!validateCart(cart)){
        
            reject("Cart is empty");
        }

        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    });

    return pr; // Return the promise
}

function validateCart(cart){
    if(cart.length === 0){
        return false;
    }
    return true;
}

function proceedToPayment(orderId){
    console.log(`Proceeding to payment for order ID: ${orderId}`);
}