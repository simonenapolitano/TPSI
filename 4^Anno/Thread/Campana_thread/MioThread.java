import java.util.Random;

public class MioThread implements Runnable {
    public void run(){
        Random random = new Random();
        Campana campana = new Campana("dong", random.nextInt(4) + 1);
    }
}
