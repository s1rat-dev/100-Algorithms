public class Main {

    public static int absoluteValuesSumMinization(int[] sayilar)
    {
        boolean isEven = sayilar.length % 2 == 0;
        return isEven ? sayilar[sayilar.length / 2 - 1 ] : sayilar[(int)Math.floor(sayilar.length / 2)];
    }


    public static void main(String[] args) {

        System.out.println(absoluteValuesSumMinization(new int[]{3,5,7}));
        System.out.println(absoluteValuesSumMinization(new int[]{3,4,5,8}));


    }




}
