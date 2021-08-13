public class Main
{
    public static boolean checkPolindrome(String targetString)
    {
        for(int i = 0; i < targetString.length() / 2; i++)
        {
            if(targetString.charAt(i) != targetString.charAt(targetString.length() - 1 - i))
            {
                return false;
            }
        }

        return true;

    }




    public static void main(String []args)
    {
        System.out.println(checkPolindrome("denned"));
    }
}
