"use strict";

// this in global space 

console.log(this); //globalObject -window, global

//// this inside a function

function x(){
    //ths value depends on strict/ non-stric mode 
    console.log(this);

}

x();