function colorize() {
    let elements = document.querySelectorAll('table tr');
    let index = 1;
    for (const element of elements) {
        if(index % 2 === 0){
            element.style.background = 'Teal';
        }
        index++;
    }
}