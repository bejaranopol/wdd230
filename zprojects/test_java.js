function display() {

    let givenName=document.getElementById('givenName').value;
    let familyName=document.getElementById('familyName').value;
    output = familyName+", "+givenName;
    document.getElementById('output').innerHTML = output;

}

function summatory(){
    let number1=parseFloat(document.getElementById('number1').value);
    let number2=parseFloat(document.getElementById('number2').value);
    let z = number1 + number2;
    document.getElementById('result').innerHTML=z;

}