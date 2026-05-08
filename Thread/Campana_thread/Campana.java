public class Campana{
    public Campana(String suono, int quante){
        System.out.println(suono + " " + quante + " volte");
    }
    public static void main(String[] args) {
        MioThread thread1Runnable = new MioThread();
        MioThread thread2Runnable = new MioThread();
        MioThread thread3Runnable = new MioThread();
        
        Thread thread1 = new Thread(thread1Runnable);
        thread1.start();
        Thread thread2 = new Thread(thread2Runnable);
        thread2.start();
        Thread thread3 = new Thread(thread3Runnable);
        thread3.start();
    }
}