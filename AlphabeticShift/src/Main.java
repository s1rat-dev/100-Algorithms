import java.util.HashMap;
import java.util.Map;

public class Main
{

    public static Character[] alphabet = {'a','b','c','ç',
            'd','e','f','g','ğ','h','ı',
            'i','j','k','l','m','n','o',
            'ö','p','r','s','ş','t','u',
            'ü','v','y','z'};

    public static Map<Character,Character> mappingAlphabet = new HashMap<>();



    public static String alphabeticShiftVersion(String targetString)
    {
        // Why we used StringBuilder
        // \/    \/    \/
        // https://stackoverflow.com/questions/7817951/string-concatenation-in-java-when-to-use-stringbuilder-and-concat
        StringBuilder tempString = new StringBuilder();

        for (char item : targetString.toCharArray())
        {
            tempString.append(mappingAlphabet.get(item));
        }

        return tempString.toString();
    }

    public static void main(String[] args)
    {

        for (int i = 0; i < alphabet.length; i++)
        {
           if (i == alphabet.length-1)
               mappingAlphabet.put(alphabet[i],alphabet[0]);
           else
               mappingAlphabet.put(alphabet[i],alphabet[i+1]);
        }

        System.out.println(alphabeticShiftVersion("abczd"));

    }
}
