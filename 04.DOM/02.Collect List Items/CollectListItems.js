function extractText() {
    const items = document.querySelectorAll('#items li');
    let result = '';
    for (const item of items) {
        result += `${item.textContent} \n`;
    }

    const resultOutput = document.getElementById('result');
    resultOutput.textContent = result; 
}