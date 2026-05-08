public class CalcoloRisorse implements Runnable {
    int[] fondiDiEmergenza;
    int somma = 0;
    public CalcoloRisorse(int[] fondiDiEmergenza){
        this.fondiDiEmergenza = fondiDiEmergenza;
    }

    public int getTotaleFondi(){
        return somma;
    }

    @Override
    public void run(){
        for (int i = 0; i < fondiDiEmergenza.length; i++) {
            somma += fondiDiEmergenza[i];
            try {
                Thread.sleep(150);
            } catch (InterruptedException e) {
                System.err.println("Calcolo risorse interrotto dal comando centrale");
                return;
            }
        }
        System.out.println("Calcolo risorse completato");
    }
}
