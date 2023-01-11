const array: number[] = [];


function getAvarage(array : number[]) : number{

    let sum = 0;
    let avg = 0;
    array.forEach(element => {
        sum += element;
    });
    avg = sum / array.length;
    return avg; 
}

function getAmountOfPositive(array : number[]) : number{

    let amount = 0;
    array.forEach(element => {
            
        if (element > 0){
            amount ++;
        }
    });
    return amount;
}

console.log(getAmountOfPositive([70, 80,100, -1, -5, 65, 80]));