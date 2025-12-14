function somma(){
    const val1 = document.getElementById("numero1").value;
    const val2 = document.getElementById("numero2").value;

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    document.getElementById("risultato").value = num1 + num2;
}
function sott(){
    const val1 = document.getElementById("numero1").value;
    const val2 = document.getElementById("numero2").value;

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    document.getElementById("risultato").value = num1 - num2;
}
function mult(){
    const val1 = document.getElementById("numero1").value;
    const val2 = document.getElementById("numero2").value;

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    document.getElementById("risultato").value = num1 * num2;
}
function div(){
    const val1 = document.getElementById("numero1").value;
    const val2 = document.getElementById("numero2").value;

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    document.getElementById("risultato").value = num1 / num2;
}
