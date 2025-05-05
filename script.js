"use strict";

var input = document.getElementById("input"),
    buttons = document.querySelectorAll(".buttons button"),
    resultButton = document.getElementById("result"),
    clearButton = document.getElementById("clear");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        var buttonValue = e.target.innerHTML;
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (buttonValue === "C") {
            input.innerHTML = "";
            return;
        }

        if (buttonValue === "=") {
            var formattedString = currentString.replace(/×/g, "*").replace(/÷/g, "/");
            input.innerHTML = eval(formattedString);
            return;
        }

        if (["+", "-", "×", "÷"].includes(buttonValue) && ["+", "-", "×", "÷"].includes(lastChar)) {
            input.innerHTML = currentString.slice(0, -1) + buttonValue;
            return;
        }

        input.innerHTML += buttonValue;
    });
});
