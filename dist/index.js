"use strict";
const array = [];
function getAvarage(array) {
    let sum = 0;
    let avg = 0;
    array.forEach(element => {
        sum += element;
    });
    avg = sum / array.length;
    return avg;
}
function getAmountOfPositive(array) {
    let amount = 0;
    array.forEach(element => {
        if (element > 0) {
            amount++;
        }
    });
    return amount;
}
console.log(getAmountOfPositive([70, 80, 100, -1, -5, 65, 80]));
