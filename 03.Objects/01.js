function solve(array){
    let products = {};
    for (let i = 0; i < array.length; i+=2) {
        let product = array[i];
        let calories = Number(array[i + 1]);

        if(!products[product]){
            products[product] = calories;
        }
    }
    
    return products;
}

console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));