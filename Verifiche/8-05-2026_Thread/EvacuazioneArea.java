import java.util.concurrent.TimeUnit;
public class EvacuazioneArea implements Runnable {
    
    @Override
    public void run(){
        for (int i = 5; i > 0; i--) {
            System.out.println("-T meno " + i + " secondi all'evacuazione");
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                System.err.println("Procedura di evacuazione compromessa");
                return;
            }
        }
        System.out.println("EVACUAZIONE COMPLETATA");
    }
}
