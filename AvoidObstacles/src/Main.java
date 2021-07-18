import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Main
{

    public static int avoidObstacles(int[] listOfNums)
    {
        Arrays.sort(listOfNums);
        System.out.println(Arrays.toString(listOfNums));
        int largestValue = listOfNums[listOfNums.length - 1];
        int tempValue = 0;
        boolean checkValue = false;

        for (int i = 1; i < largestValue + 1; i++)
        {
            for (int item : listOfNums)
            {
                if (item % i == 0)
                {
                    checkValue = false;
                    break;
                }

                checkValue = true;
            }

            if (checkValue)
            {
                tempValue = i;
                break;
            }

        }

        return tempValue;
    }



    public static void main(String[] args)
    {
        System.out.println(avoidObstacles(new int[]{5,3,6,7,9}));
    }

}
