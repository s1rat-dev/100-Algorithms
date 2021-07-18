public class Main
{

    public static int candies(int children, int candies)
    {
        int result = candies % children;
        return candies - result;
    }

    public static void main(String[] args)
    {
        System.out.println(candies(4,10));
    }
}
