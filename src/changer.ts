import * as fs from "fs";
import { join } from "path";
import { Currency } from "./currency";

function mainFunc() : void {
    
    const arr = CurrencyList();
    let currency : string | null;
    let option = prompt("choose option : 1 , 2 , 3")
    switch (Number(option)){

        case(1):

            returnCurrency(arr);
            break;
        
        case(2):

            break;
        
        case(3):

            break;
        
        default:

            break;
    }    
        

} ;
    

function returnCurrency(arr : Currency[]) : void{


    let currency = prompt("enter currency" , "");
    arr.forEach(element => {
        if (element.currencyName == currency){
            alert(element.currencyValue);
        }
    });

}



function CurrencyList() : Currency[] {
    
    const array : Currency[] = [];
    const lines = fs.readFileSync('../currency.txt', 'utf-8') .split('\n').filter(Boolean);
    lines.forEach((element: string)=> {
        const temp  = element.split(",");
        const add : Currency = new Currency(temp[0] , temp[1]);
    });
    return array;

}

