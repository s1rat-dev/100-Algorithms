import java.util.Hashtable;

public class Main
{

    public static boolean bishopAndPawn(String bishop,String pawn)
    {

        Hashtable<Character,Integer> chessTable = new Hashtable<>();
        chessTable.put('a',1);
        chessTable.put('b',2);
        chessTable.put('c',3);
        chessTable.put('d',4);
        chessTable.put('e',5);
        chessTable.put('f',6);
        chessTable.put('g',7);
        chessTable.put('h',8);


        int bishopX = chessTable.get(bishop.charAt(0));
        int bishopY = Character.getNumericValue(bishop.charAt(1));
        int pawnX = chessTable.get(pawn.charAt(0));
        int pawnY = Character.getNumericValue(pawn.charAt(1));


        return (bishopX + bishopY == pawnX + pawnY || bishopX + pawnY == bishopY + pawnX);
    }


    public static void main(String[] args)
    {
        System.out.println(bishopAndPawn("a2","b3"));
    }
}
