class Product {
    discount = 10;
    constructor(n,p){
        // constructor function
        // when we create an ovject
        this.name = n;
        this.price = p;
    }
    //member function
    displayProduct(){
      
    }

    buyProcduct(){
    }
}

let iphone = new Product("Iphone 11", 50000);
let macbook = new Product("Macbook air", 10000);