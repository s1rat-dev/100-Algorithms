public class Main
{

    public static int centuryFromYear(int num)
    {

        return num % 10 != 0 ? num / 100 + 1 : num / 100;

    }


    public static void main(String[] args)
    {
        System.out.println(centuryFromYear(1800));
    }
}
