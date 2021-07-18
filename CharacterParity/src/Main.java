public class Main
{

    public static String characterParity(String value)
    {
        char[] itemsOfValue = value.toCharArray();

        for (char item : itemsOfValue)
        {
            if ((int)item < 48 || (int)item > 57)
                return "not a number";
        }

        return itemsOfValue[itemsOfValue.length - 1] % 2 == 0 ? "even" : "odd";
    }

    public static void main(String[] args)
    {
        System.out.println(characterParity("190a4"));
    }
}
