let sum =0;
let isSame= true;
function solve(number){
    let numbers = number.toString().split('');
    for (let i = 0; i < numbers.length; i++) {
        if(!isSame){
            return;
        }
        if(numbers[0] == numbers[i])
        {
            isSame = true;
        } else {
            isSame = false;
            
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }

    console.log(isSame);
    console.log(sum);
}

solve(898999)
