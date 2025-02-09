function outer(){
    let a=10;
    function inner(){
        let b=20;
        console.log(a+b);
          function innerInner(){
              let c=30;
              console.log(a+b+c);
              return c;
          }
            return innerInner;
    }
    return inner;
}

outer()()();  