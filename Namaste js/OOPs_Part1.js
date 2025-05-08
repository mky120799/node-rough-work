

//   const person = {
//     name: "John",
//     greet: function() {
//       setTimeout(function() {
//         console.log(`Hello, my name is ${this.name}`);
//       }, 1000);
//     }
//   };
  
//   person.greet();  // ❌ Output: Hello, my name is undefined (or throws an error in strict mode)

  // const person = {
//     name: "John",
//     greet: function() {
//       setTimeout(() => {
//         console.log(`Hello, my name is ${this.name}`);
//       }, 1000);
//     }
//   };
  
//   person.greet();  // ✅ Output: Hello, my name is John


const obj1 ={
    name: "Sarthak",
    display: ()=>{    
        console.log(this, "is the calling site");
    }
}


obj1.display(); // Output: {} is the calling site