public class Main
{

    public static int arrayChange(int[] targetArray)
    {
        int counter = 0;
        for (int i = 0; i < targetArray.length - 1; i++)
        {
            if (targetArray[i] >= targetArray[i+1])
            {
                int distance = (targetArray[i] + 1) - targetArray[i+1];
                targetArray[i + 1] = targetArray[i] + 1;
                counter += distance;
            }
        }

        return counter;

    }


    public static void main(String[] args)
    {
        System.out.println(arrayChange(new int[]{3,1,2}));
    }
}
