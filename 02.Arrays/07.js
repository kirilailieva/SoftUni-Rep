function solve(arr){
    let rowSums = [];
    let colSums = [];

    for(let i=0; i < arr.length; i++){
        let row = arr[i];
        let sum = row.reduce((result,curr)=> (result+curr),0);
        rowSums.push(sum);
    }

    for(let i=0; i < arr.length; i++){
        let row = arr[i];
        let newRow = [];
        for(let y = 0; y< arr.length; y++){
            newRow.push(row[arr.length - 1 - y]);
        }
    }

    return rowSums;
}

console.log(solve(
 [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))