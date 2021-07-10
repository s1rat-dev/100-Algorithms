import java.util.ArrayList;

public class Main
{

    public static ArrayList<String> findLargestString(String[] arrayOfString)
    {
        ArrayList<String> largestWords = new ArrayList<>();
        int tempLength = arrayOfString[0].length();

        for (int i = 1; i < arrayOfString.length ; i++)
        {
            tempLength = Math.max(arrayOfString[i].length(),tempLength);
        }

        for (String item : arrayOfString)
        {
            if (item.length() == tempLength)
            {
                largestWords.add(item);
            }
        }

        return largestWords;
    }


    public static void main(String[] args)
    {
        System.out.println(findLargestString(new String[]{"aba","ab","bab","dac","d","sa"}));
    }

}
