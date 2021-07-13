import java.util.Arrays;

public class Main
{
    public static int[] arrayReplace(int[] arrayOfNums, int targetValue, int newValue)
    {
        int index = 0;
        for (int value : arrayOfNums)
        {
            if (value == targetValue)
                arrayOfNums[index] = newValue;
            index++;
        }

        return arrayOfNums;
    }


    public static void main(String[] args)
    {
        System.out.println(Arrays.toString(arrayReplace(new int[]{1, 3, 5, 2, 5, 6}, 2, 4)));
    }

}
