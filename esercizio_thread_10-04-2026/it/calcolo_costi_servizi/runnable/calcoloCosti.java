package it.calcolo_costi_servizi.runnable;
import java.util.Random;

public class calcoloCosti implements Runnable{
    private String servizio;
    private Double costo;
    private Random random;


    public calcoloCosti(String servizio){
        this.servizio = servizio;
        random = new Random();
    }

    @Override
    public void run() { 
        try {
            System.out.println("Calcolo costi per il servizio: " + servizio);
            Thread.sleep(1000);
            this.costo = 50 + random.nextDouble(50);
        } catch (InterruptedException e) {
            System.out.println("<!>" + e.getMessage() + "<!>");
        }
    }

    public Double getCosto(){
        return costo;
    }
    
}