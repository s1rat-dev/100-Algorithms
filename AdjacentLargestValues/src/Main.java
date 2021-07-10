public class Main
{

    public static int findAdjacentLargetsValue(int[] arrayOfValue)
    {
        int firstValue = arrayOfValue[0] * arrayOfValue[1];

        for (int i = 1; i < arrayOfValue.length - 1; i++)
        {
            int tempValue = arrayOfValue[i] * arrayOfValue[i+1];
            // Math.max = (firstValue < tempValue) ? tempValue : firstValue
            firstValue = Math.max(firstValue, tempValue);
        }

        return firstValue;

    }

    public static void main(String[] args)
    {
        int[] array = {2,11,-3,4,5,7};
        System.out.println(findAdjacentLargetsValue(array));
    }

}
