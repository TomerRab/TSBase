"use strict";
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
function sortList(array) {
    return array.sort(function (a, b) { return a - b; });
}
function getInputByUser() {
    var _a, _b;
    const arr = [];
    (_a = document.getElementById("addNum")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const input = document.getElementById("add");
        arr.push(Number(input === null || input === void 0 ? void 0 : input.value));
    });
    (_b = document.getElementById("submit")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        console.log(getAvarage(arr));
    });
}
getInputByUser();
