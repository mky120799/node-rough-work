class Car {
  // Instance property
  wheels = 4;

  // Static property
  static category = "Vehicle";

  constructor(brand) {
    this.brand = brand;
  }

  showDetails() {
    console.log("Brand:", this.brand);          // ✅ OK (instance)
    console.log("Wheels (this.wheels):", this.wheels);  // ✅ OK (instance)
    // console.log(wheels); // ❌ ReferenceError: wheels is not defined
  }

  static showCategory() {
    console.log("Static Category:", Car.category); // ✅ OK
    // console.log(this.wheels); // ❌ undefined — `this` here refers to the class
  }
}

const myCar = new Car("Tesla");
const yourCar = new Car("Toyota");

// Access instance methods
myCar.showDetails();  // ✅ Works
yourCar.showDetails(); // ✅ Works

// Access static method
Car.showCategory();   // ✅ Works

// Direct access tests
console.log(myCar.wheels);        // ✅ 4 (instance)
console.log(Car.category);        // ✅ "Vehicle" (static)
console.log(myCar.category);      // ❌ undefined (static not available on instance)
console.log(Car.wheels);          // ❌ undefined (wheels is not static)