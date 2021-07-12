public class Main
{

    public static boolean areSimilar(int[] arrayFirst, int[] arraySecond)
    {
        int counter = 0;

        if (arrayFirst.length == arraySecond.length)
        {
            for (int i = 0; i < arrayFirst.length; i++)
            {
                for (int j = 0; j < arraySecond.length; j++)
                {
                    if (arrayFirst[i] == arraySecond[j])
                    {
                        counter++;
                        break;
                    }
                }
            }
        }
        else
            return false;


        return counter == arrayFirst.length;
    }


    public static void main(String[] args)
    {
        int[] arrayFirst = {3,5,7,4,5};
        int[] arraySecond = {5,3,5,7,4};

        System.out.println(areSimilar(arrayFirst,arraySecond));
    }
}
