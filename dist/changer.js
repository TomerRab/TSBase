"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const currency_1 = require("./currency");
function mainFunc() {
    const arr = CurrencyList();
    let currency;
    let option = prompt("choose option : 1 , 2 , 3");
    switch (Number(option)) {
        case (1):
            returnCurrency(arr);
            break;
        case (2):
            break;
        case (3):
            break;
        default:
            break;
    }
}
;
function returnCurrency(arr) {
    let currency = prompt("enter currency", "");
    arr.forEach(element => {
        if (element.currencyName == currency) {
            alert(element.currencyValue);
        }
    });
}
function CurrencyList() {
    const array = [];
    const lines = fs.readFileSync('../currency.txt', 'utf-8').split('\n').filter(Boolean);
    lines.forEach((element) => {
        const temp = element.split(",");
        const add = new currency_1.Currency(temp[0], temp[1]);
    });
    return array;
}
