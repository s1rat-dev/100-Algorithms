public class Main
{

    public static int arrayMaximalAdjacentDifference(int[] arrayOfNums)
    {
        int maxDifference = Math.abs(arrayOfNums[0] - arrayOfNums[1]);
        int sum;

        for (int i = 0; i < arrayOfNums.length-1; i++)
        {
            sum = Math.abs(arrayOfNums[i] - arrayOfNums[i+1]);
            maxDifference = Math.max(sum,maxDifference);
        }

        return maxDifference;
    }

    public static void main(String[] args)
    {
        int[] exampleArray = {3, 4, 1, 0, 2, 3};

        System.out.println(arrayMaximalAdjacentDifference(exampleArray));

    }

}
