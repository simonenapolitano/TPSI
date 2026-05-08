public class CentraleOperativa {
    public static void main(String[] args) {
        int[] fondi = {1000, 2500, 3000, 1500};
        int[] mappaZone = {1, 2, 3, 4, 5, 6, 7, 8};
        SegnaleRadio segnaleRadio = new SegnaleRadio();
        CalcoloRisorse calcoloRisorse = new CalcoloRisorse(fondi);
        EvacuazioneArea evacuazioneArea = new EvacuazioneArea();
        RicercaDispersi ricercaDispersi = new RicercaDispersi(mappaZone);
        Thread tRadio = new Thread(segnaleRadio);
        Thread tCalcolo = new Thread(calcoloRisorse);
        Thread tEvacuazione = new Thread(evacuazioneArea);
        Thread tRicerca = new Thread(ricercaDispersi);
        tRadio.start();
        tCalcolo.start();
        tEvacuazione.start();
        tRicerca.start();
        System.out.println("ID tRicerca: " + tRicerca.getId());
        System.out.println("Stato tRicerca: " + tRicerca.getState());
        System.out.println("Priorità tRicerca: " + tRicerca.getPriority());
        System.out.println("tRicerca e' vivo? " + (tRicerca.isAlive()? "si" : "no"));
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.err.println("Thread interrotto inaspettatamente");
        }
        tRadio.interrupt();
        tRicerca.interrupt();
        try {
            tRadio.join();
            tCalcolo.join();
            tEvacuazione.join();
            tRicerca.join();   
        } catch (InterruptedException e) {
            System.err.println("Errore nella sincronizzazione dei thread");
        }
        System.out.println("Report finale: \n-Fondi di emergenza: " + calcoloRisorse.getTotaleFondi() + "\n-Numero di zone esplorate: " + ricercaDispersi.getZoneEsplorate());
        
    }
}
