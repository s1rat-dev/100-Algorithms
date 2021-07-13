public class Main
{

    public static int arrayMaxConsecutiveSum(int[] arrayOfNumbers, int k)
    {
        int sum = 0;
        int max;

        for (int i=0; i < k; i++)
        {
            sum += arrayOfNumbers[i];
        }

        max = sum;

        for (int i = k; i < arrayOfNumbers.length; i++)
        {
            sum -= arrayOfNumbers[i-k];
            sum += arrayOfNumbers[i];

            max = Math.max(sum,max);
        }


        return max;
    }

    public static void main(String[] args)
    {
        int[] array = {3,5,7,2,5,9,1,4,8};
        int k = 3;
        System.out.println(arrayMaxConsecutiveSum(array,k));
    }
}
