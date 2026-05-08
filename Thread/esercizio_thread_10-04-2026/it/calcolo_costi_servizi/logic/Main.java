package it.calcolo_costi_servizi.logic;
import it.calcolo_costi_servizi.runnable.calcoloCosti;

public class Main {

    
    public static void main(String[] args) {
        //creazione dei runnable
        calcoloCosti calcoloVolo = new calcoloCosti("Volo");
        calcoloCosti calcoloHotel = new calcoloCosti("Hotel");
        calcoloCosti calcoloAssicurazione = new calcoloCosti("Assicurazione");
        //creazione dei thread
        Thread threadVolo = new Thread(calcoloVolo, "Volo");
        Thread threadHotel = new Thread(calcoloHotel, "Hotel");
        Thread threadAssicurazione = new Thread(calcoloAssicurazione, "Assicurazione");
        //avvio dei thread
        threadVolo.start();
        threadHotel.start();
        threadAssicurazione.start();
        try {
            //aspetta che finiscano tutti e tre
            threadVolo.join();
            threadHotel.join();
            threadAssicurazione.join();
            //calcolo del costo totale
            Double totale = calcoloVolo.getCosto() + calcoloHotel.getCosto() + calcoloAssicurazione.getCosto();
            System.out.println(String.format("Costo totale %.2f", totale));
        } catch (InterruptedException e) {
            System.out.println("<!>" + e.getMessage() + "<!>");
        }
    }
}
