function solve(arr){
    let result =  arr
    .slice(0)
    .sort((a,b) => a.localeCompare(b)).map((name,index) =>{
        let print = `${index+1}.${name}\n` 
       return print;
    })

    return result.join(' ');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]))