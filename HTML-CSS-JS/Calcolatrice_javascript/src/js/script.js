//cattura i numeri qua
{
    function num0(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "0"; 
    }
    function num1(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "1"; 
    }
    function num2(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "2"; 
    }
    function num3(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "3"; 
    }
    function num4(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "4"; 
    }
    function num5(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "5"; 
    }
    function num6(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "6"; 
    }
    function num7(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "7";
    }
    function num8(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "8"; 
    }
    function num9(){
        document.getElementById("risultatocalc").value = document.getElementById("risultatocalc").value + "9"; 
    }
}
//funzioni delle operazioni
function somma(){
    document.getElementById("primonumero").value = document.getElementById("risultatocalc").value;
    document.getElementById("operazione").value = "+";
    document.getElementById("risultatocalc").value = "";
}
function sott(){
    document.getElementById("primonumero").value = document.getElementById("risultatocalc").value;
    document.getElementById("operazione").value = "-";
    document.getElementById("risultatocalc").value = "";
}
function mult(){
    document.getElementById("primonumero").value = document.getElementById("risultatocalc").value;
    document.getElementById("operazione").value = "X";
    document.getElementById("risultatocalc").value = "";
}
function div(){
    document.getElementById("primonumero").value = document.getElementById("risultatocalc").value;
    document.getElementById("operazione").value = "/";
    document.getElementById("risultatocalc").value = "";
}
function uguale(){
    switch(document.getElementById("operazione").value){
        case "+":
            document.getElementById("risultatocalc").value  = parseInt(document.getElementById("primonumero").value) + parseInt(document.getElementById("risultatocalc").value);
            break;
        case "-":
            document.getElementById("risultatocalc").value = parseInt(document.getElementById("primonumero").value) - parseInt(document.getElementById("risultatocalc").value);
            break;
        case "X":
            document.getElementById("risultatocalc").value = parseInt(document.getElementById("primonumero").value) * parseInt(document.getElementById("risultatocalc").value);
            break;
        case "/":
            document.getElementById("risultatocalc").value = parseInt(document.getElementById("primonumero").value) / parseInt(document.getElementById("risultatocalc").value);
            break;
    }
}
function del(){
    const testo = document.getElementById("risultatocalc").value;
    if(testo.lenght == 1){
        ac();
    }
    const nuovotesto = testo.slice(0, -1);
    document.getElementById("risultatocalc").value = nuovotesto;
}
function ac(){
    document.getElementById("primonumero").value = "";
    document.getElementById("operazione").value = "";
    document.getElementById("risultatocalc").value = "";
}
function nondisp(){
    alert("Funzione non disponibile");
}

