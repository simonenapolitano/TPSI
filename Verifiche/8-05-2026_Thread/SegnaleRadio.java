public class SegnaleRadio implements Runnable {
    @Override
    public void run(){
        while(!Thread.interrupted()){
            System.out.println("Ping radio in corso...");
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.err.println("Trasmissione radio interrotta dal comando centrale");
                return;
            }
        }
    }
}