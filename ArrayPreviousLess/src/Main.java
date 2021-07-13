import java.util.ArrayList;
import java.util.Collections;

public class Main
{

    public static ArrayList<Integer> arrayPreviousLess(int[] arrayOfNums)
    {

        ArrayList<Integer> changedList = new ArrayList<Integer>();

        for (int i = arrayOfNums.length - 1; i >= 0; i--)
        {
            for (int k = i; k >= 0; k--)
            {
                if (arrayOfNums[i] > arrayOfNums[k])
                {
                    changedList.add(arrayOfNums[k]);
                    break;
                }
                else if (k == 0)
                    changedList.add(-1);
            }
        }

        // Reverse to the list;
        Collections.reverse(changedList);
        return changedList;
    }


    public static void main(String[] args)
    {

        System.out.println(arrayPreviousLess(new int[]{4,1,8,2,6,7,5}));

    }
}
