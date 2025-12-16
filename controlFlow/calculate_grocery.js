let grocery_1;
let grocery_2;
let grocery_3;

function groceryCalculator(){
    grocery_1=parseFloat(document.getElementById('grocery-1').value);
    grocery_2=parseFloat(document.getElementById('grocery-2').value);
    grocery_3=parseFloat(document.getElementById('grocery-3').value);

    let result = grocery_1 + grocery_2 + grocery_3;
    document.getElementById('result').innerText = `The total amount is: $${result}`;

}