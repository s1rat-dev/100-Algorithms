import java.util.ArrayList;
import java.util.List;

public class Main
{

    public static boolean alphabetSubsequence(String targetString)
    {
        List<Integer> asciiCharList = new ArrayList<Integer>();

        // To split every char in String.
        for (String item : targetString.split("(?!^)"))
        {
            // Convert to ASCII value.
            asciiCharList.add((int)item.charAt(0));
        }

        for (int i = 0; i < asciiCharList.size() - 1; i++)
        {
            if (asciiCharList.get(i) >= asciiCharList.get(i+1))
                return false;
        }


        return true;
    }


    public static void main(String[] args)
    {
        System.out.println(alphabetSubsequence("abcde"));
    }

}
