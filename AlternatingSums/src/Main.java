import java.util.Arrays;

public class Main
{

    public static int[] alternatingSum(int[] arrayOfValues)
    {
        int evenSum = 0;
        int oddSum = 0;

        for (int i = 0; i < arrayOfValues.length; i++)
        {
            if (i % 2 == 0)
                evenSum += arrayOfValues[i];
            else
                oddSum += arrayOfValues[i];
        }

        return new int[]{evenSum,oddSum};

    }


    public static void main(String[] args)
    {
        int[] resultArray = alternatingSum(new int[]{100,20,40,50,60,95});
        System.out.println(Arrays.toString(resultArray));
    }
}
