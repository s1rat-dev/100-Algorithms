import java.util.Hashtable;

public class Main
{
    public static boolean checkCellColor(String cell1, String cell2)
    {
        Hashtable<Character,Integer> cellHashtable =  new Hashtable<>();
        cellHashtable.put('a',1);
        cellHashtable.put('b',2);
        cellHashtable.put('c',3);
        cellHashtable.put('d',4);
        cellHashtable.put('e',5);
        cellHashtable.put('f',6);
        cellHashtable.put('g',7);
        cellHashtable.put('h',8);


        int numValueCell1 = (int)cellHashtable.get(cell1.charAt(0)) + (int)cell1.charAt(1);
        int numValueCell2 = (int)cellHashtable.get(cell2.charAt(0)) + (int)cell2.charAt(1);

        return (numValueCell1 % 2 == 0 && numValueCell2 % 2 == 0) || (numValueCell1 % 2 != 0 && numValueCell2 % 2 != 0);
    }

    
    public static void main(String[] args)
    {
        System.out.println(checkCellColor("a6","h7"));
    }
}
