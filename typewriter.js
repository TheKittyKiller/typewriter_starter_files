"use strict";

const typeElement = document.querySelector("#typewriter");
let str =  typeElement.textContent;
typeElement.textContent = "";
let iterator = 0;
console.log(str)



initLoop()

function initLoop() {

    console.log("initLoop")


    loop()

}





function loop() {
    console.log("iterator", iterator)
    console.log("letter", str[iterator])

   

    if (iterator < str.length) {
        typeElement.textContent += str[iterator];

        setTimeout(loop, 400)

    }
 iterator++

}