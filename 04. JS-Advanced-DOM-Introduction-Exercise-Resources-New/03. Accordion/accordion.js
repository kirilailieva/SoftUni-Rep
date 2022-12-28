function toggle() {
    let buttonClick = document.getElementsByClassName("button")[0];
    let extraText = document.getElementById('extra');
    
    //if(extraText.style.display == )
    if (buttonClick.textContent == "More") {
        extraText.style.display = 'block';
        buttonClick.textContent = "Less";
    } else {
        extraText.style.display = 'none';
        buttonClick.textContent = "More";
    }
}