public class RicercaDispersi implements Runnable {
    int[] zone;
    int numeroZoneEsplorate = 0;
    public RicercaDispersi(int[] zone){
        this.zone = zone;
    }
    public int getZoneEsplorate() {
        return numeroZoneEsplorate;
    }
    @Override
    public void run(){
        for (int i = 0; i < zone.length; i++) {
            numeroZoneEsplorate++;
            try {
                Thread.sleep(400);
            } catch (InterruptedException e) {
                System.err.println("Ricerca interrotta dal comando centrale.");
                break;
            }
        }
        System.out.println("Ricerca terminata. Zone controllate: " + numeroZoneEsplorate);
    }

}
