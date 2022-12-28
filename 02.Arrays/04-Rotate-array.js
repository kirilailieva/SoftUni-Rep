function solve(arr, rotations){
    for (let i = 0; i < rotations; i++) {
        const element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
}

console.log(solve(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

));