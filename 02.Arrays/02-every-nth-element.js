const solve = (arr, step) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(i % step === 0){
            result.push(arr[i]);
        }
    }

    return result;
};