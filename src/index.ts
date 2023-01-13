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

function sortList(array : number[]): number[]{
        return array.sort(function(a, b){return a - b});
}


function getInputByUser() : void{
    
    const arr : number[] = [];
    document.getElementById("addNum")?.addEventListener("click",()=>{
        const input = document.getElementById("add") as HTMLInputElement | null;
        arr.push(Number(input?.value));
    })
    document.getElementById("submit")?.addEventListener("click",()=>{
        console.log(getAmountOfPositive(arr));
    });
}

getInputByUser();
