function solve() {
  let input = document.getElementById('text').value;
  let caseType = document.getElementById('naming-convention').value;

  let result = '';

  let textSplit = input.split(' ');

  if(caseType == 'Camel Case'){
    textSplit.forEach((e,i) => {
      if(i === 0){
        return result += e.toLowerCase();
      }
      return result += e[0].toUpperCase() + e.substring(1).toLowerCase();
    });
  } else if(caseType == 'Pascal Case') {
    textSplit.forEach(e =>{
      return result += e[0].toUpperCase() + e.substring(1).toLowerCase();
    });
  } else {
    result += 'Error!';
  }

  document.getElementById('result').textContent = result;
}