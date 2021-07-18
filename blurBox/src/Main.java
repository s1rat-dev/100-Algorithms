import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main
{

    public static int[][] blurBox(int[][] image)
    {

        int rowLength = image.length;
        int columnLength = image[0].length;

        int rowPointer = 0;
        int columnPointer = 0;

        List<List<Integer>> blurBox = new ArrayList<>();
        List<Integer> blurBoxLine = new ArrayList<>();
        List<List<Integer>> blurBoxContent = new ArrayList<>();
        List<Integer> blurBoxMinimized = new ArrayList<>();



        while (rowPointer <= rowLength - 3)
        {
            while (columnPointer <= columnLength - 3)
            {
                for (int i = rowPointer; i < rowPointer + 3; i++)
                {
                    for (int k = columnPointer; k < columnPointer +3; k++)
                    {
                        blurBoxLine.add(image[i][k]);
                    }

                    blurBoxContent.add(blurBoxLine);
                    blurBoxLine = new ArrayList<>();

                }

                blurBoxMinimized.add(sumMatrix(blurBoxContent));
                blurBoxContent = new ArrayList<>();
                columnPointer++;
            }

            blurBox.add(blurBoxMinimized);
            blurBoxMinimized = new ArrayList<>();

            rowPointer++;
            columnPointer = 0;
        }


        // Convert nested list to 2d Array.
        int[][] array = new int[blurBox.size()][];
        for(int i=0; i < blurBox.size(); i++) {
            array[i] = blurBox.get(i).stream().mapToInt(x -> x).toArray();;
        }

        return array;
    }

    public static int sumMatrix(List<List<Integer>> targetList)
    {
        int sum = 0;
        for (List item : targetList)
        {
            System.out.println(item);
            for(int i = 0; i < item.size(); i++)
            {
                sum += (int)item.get(i);
            }
        }

        return sum / 9;
    }




    public static void main(String[] args)
    {

        int[][] image = {
        {
            7, 4, 0, 1
        },
        {
            5, 6, 2, 2
        },
        {
            6, 10, 7, 8
        },
        {
            1, 4, 2, 0
        }};


        for (int[] item : blurBox(image))
        {
            System.out.println(Arrays.toString(item));
        }
    }

}
