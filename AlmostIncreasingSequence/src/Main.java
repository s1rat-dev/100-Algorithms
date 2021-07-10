import java.util.ArrayList;


public class Main
{
    public static boolean isAlmostIncreasingSequence(ArrayList<Integer> arrayOfValues)
    {
        int lengthOfArray = arrayOfValues.size();
        boolean check = true;

        for (int i = 0; i < lengthOfArray ; i++)
        {
            check = true;
            ArrayList<Integer> cloneArray = new ArrayList<Integer>(arrayOfValues);
            cloneArray.remove(i);

            for (int k = 0; k < lengthOfArray - 2; k++)
            {
                if (cloneArray.get(k) > cloneArray.get(k+1))
                {
                    check = false;
                    break;
                }
            }

            if (check)
            {
                cloneArray.clear();
                System.gc();
                return true;
            }

            cloneArray.clear();
            System.gc();


        }

        return check;

    }



    public static void main(String[] args)
    {

        ArrayList<Integer> listOfValues = new ArrayList<Integer>();
        listOfValues.add(1);
        listOfValues.add(2);
        listOfValues.add(5);
        listOfValues.add(4);
        listOfValues.add(6);

        System.out.println(isAlmostIncreasingSequence(listOfValues));

    }
}
