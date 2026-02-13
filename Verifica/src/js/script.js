function login(){
    let studente = document.getElementById('studenteInput'); //ottengo l'input dalla casella di testo 
    let password = document.getElementById('passwordInput'); //ottengo l'input dalla casella di testo
    if(studente.value === "" && password.value === ""){ //se sono vuoti dice di inserire qualcosa e esce dalla funzione
        alert("Inserisci id studente e password prima di accedere!");
        return;
    }
    if(studente.value === "studente" && password.value === "1234"){ //se sono giusti dice login corretto
        alert("Login Corretto!");
    } else { //se sono sbagliati da errore
        alert("Errore! Riprova");
    }
}

function calcolatrice(){
    let operazione = document.getElementById('sceltaOperazione'); //ottengo l'input dal menu a tendina
    let numero1Text = document.getElementById('numero1'); //ottengo l'input dalla casella di testo 
    let numero2Text = document.getElementById('numero2'); //ottengo l'input dalla casella di testo 
    let numero1 = parseFloat(numero1Text.value); //lo trasformo in numero per fare poi le operazioni
    let numero2 = parseFloat(numero2Text.value); //lo trasformo in numero per fare poi le operazioni
    let risultato = document.getElementById('risultatoCalc'); //ottengo la casella risultato per poi visualizzare a schermo il risultato
    switch(operazione.value){ //vedo la value dell'operazione
        case "+": 
            let somma = numero1 + numero2;
            risultato.value = "Il risultato e': " + somma;
            break;
        case "-":
            let sottrazione = numero1 - numero2;
            risultato.value = "Il risultato e': " + sottrazione;
            break;
        case "*":
            let molt = numero1 * numero2;
            risultato.value = "Il risultato e': " + molt;
            break;
        case "/":
            if(numero2 === 0){
                alert("Inserisci un divisore diverso da 0!");
                return;
            }
            let divisione = numero1 / numero2;
            risultato.value = "Il risultato e': " + divisione;
            break;
    }
}

function correggiQuiz(){ 
    let risposta1 = document.querySelector('input[name="quesito1"]:checked'); //utilizzo querySelector per selezionare la prima radioButton che è checked(selezionata)
    let risposta2 = document.querySelector('input[name="quesito2"]:checked'); //utilizzo querySelector per selezionare la prima radioButton che è checked(selezionata)
    let giusto = document.getElementById('feedbackVisivo'); //per poi scrivere se la prima risposta è giusta

    if(risposta1.value === "1000"){ //se la prima risposta è 1000 scrive che la risposta è giusta
        giusto.textContent = "1^ risposta giusta"; 
    }
    if(risposta2.value === "12"){ //se la seconda risposta è 12 cambia lo sfondo della pagina in rosso
        document.body.style.backgroundColor = "red";
    }
}

function consegna(){
    let checkbox = document.querySelectorAll('input[name="checkBox"]:checked'); //uso querySelectorAll per selezionare TUTTE le checkbox che sono checked

    if(!checkbox[0]){ //dato che querySelectorAll restituisce un array controllo la prima casella(che sarebbe la nostra checkbox)
        alert("Devi spuntare la casella!");
    } else{
        let conferma = confirm("Sei sicuro?");
        if(conferma){
            alert("Compito consegnato");
        }
    }
}