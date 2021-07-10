public class Main
{

    public static int addTwoDigits(int n)
    {
        int sum = 0;
        while(n / 10 != 0)
        {
            sum += n % 10;
            n = n / 10;
        }

        return sum + n;

    }


    public static void main(String[] args)
    {
        System.out.println(addTwoDigits(19));
    }
}
