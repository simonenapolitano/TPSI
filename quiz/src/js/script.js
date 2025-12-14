const ID_RADIO = ["q1A", "q1B", "q1C", "q2A", "q2B", "q2C", "q3A", "q3B", "q3C"];
const RISPOSTE_GIUSTE = ["Math.random()", "parentNode.appendChild()", "UguaglianzaStretta(valoreETipo)"];
const risultatoDiv = document.getElementById("risultato");
const bottoneConsegna = document.getElementById("bottoneConsegna");

function calcolaPunteggio() {
  let punteggio = 0;
  for (let i = 0; i < ID_RADIO.length; i++) {
    const radioCorrente = document.getElementById(ID_RADIO[i]);
    for (let j = 0; j < RISPOSTE_GIUSTE.length; j++) {
        if (radioCorrente.checked == true && radioCorrente.value == RISPOSTE_GIUSTE[j]) {
            punteggio++;
        }   
    }
  }
  risultatoDiv.innerHTML = "Punteggio effettuato nel test: " + punteggio + " punti." + " Hai preso: " + (punteggio/RISPOSTE_GIUSTE.length)*10;
  bottoneConsegna.disabled = true;
  bottoneConsegna.textContent = "Hai gia consegnato il test. Guarda sotto questo bottone per il punteggio."
  bottoneConsegna.style.opacity = "0.6";
  bottoneConsegna.style.cursor = "not-allowed";
}