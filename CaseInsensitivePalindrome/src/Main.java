public class Main
{

    public static boolean isCaseInsensitivePolindrome(String targetString)
    {
        StringBuilder tempString = new StringBuilder(targetString.toLowerCase());
        return tempString.reverse().toString().equals(targetString.toLowerCase());
    }

    public static boolean isCaseInsensitivePolindromePrimitive(String targetString)
    {
        boolean checkString = true;

        for (int i = 0; i < targetString.length() / 2; i++)
        {
            if (targetString.toLowerCase().charAt(i) != targetString.toLowerCase().charAt((targetString.length() - 1) - i))
            {
                checkString = false;
                break;
            }

        }

        return checkString;
    }

    public static void main(String[] args)
    {
        System.out.println(isCaseInsensitivePolindrome("abBacabBA"));
    }
}
