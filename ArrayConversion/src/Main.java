import java.util.ArrayList;
import java.util.List;

public class Main
{

    public static int arrayConversion(int[] arrayValues)
    {
        // Default parameter in function.
        return arrayConversion(arrayValues,1);
    }


    public static int arrayConversion(int[] arrayValues, int evenOrOdd)
    {

        if (arrayValues.length > 2)
        {
            List<Integer> tempList = new ArrayList<Integer>();
            for (int i = 0; i < arrayValues.length ; i = i + 2)
            {

                if (evenOrOdd % 2 == 0)
                    tempList.add(arrayValues[i] * arrayValues[i + 1]);
                else
                    tempList.add(arrayValues[i] + arrayValues[i + 1]);

            }

            // Convert to List to Array for primitive types. (int & char)
            int[] tempArray = new int[tempList.size()];
            for(int i = 0; i < tempList.size(); i++) tempArray[i] = tempList.get(i);

            return arrayConversion(tempArray,evenOrOdd + 1);
        }
        else
        {
            if (evenOrOdd % 2 == 0)
                return arrayValues[0] * arrayValues[1];
            else
                return arrayValues[0] + arrayValues[1];
        }
    }


    public static void main(String[] args)
    {
        System.out.println(arrayConversion(new int[]{10,30,40,60}));
    }

}

