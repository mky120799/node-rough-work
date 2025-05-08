// creating promise, chaining & error handling

const cart = ["biscuites", "chips", "coldDrink"];

const promise = createOrder(cart); // orderId
console.log(promise);

promise
    .then(function(orderId) {
        console.log(orderId);
        console.log(promise);
        return orderId;
    })
    .then(function(orderId) {   
        console.log(proceedToPayment(orderId));
        return proceedToPayment(orderId);
    })
    .then(function(bill) {
        console.log("Bill: ", bill);
        return "Payment done";
    })
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log("Error: ", error);
    });

////////////// producer

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        // Validate the cart
        if (!validateCart(cart)) {
            reject("Cart is empty");
        }

        // Logic for createOrder
        const orderId = "12345";
        if (orderId) {
            resolve(orderId);
        }
    });

    return pr; // Return the promise
}

function validateCart(cart) {
    if (cart.length === 0) {
        return false;
    }
    return true;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        const bill = 1000;
        console.log(`Proceeding to payment for order ID: ${orderId}`);
        resolve(JSON.stringify(bill)); // Resolve the promise with the bill
    });
}