import java.util.ArrayList;
import java.util.List;

public class Main
{

    public static Object addBorder(List<String> picture)
    {


        for(int k = 0; k < picture.size(); k++)
        {
            String tempWord = picture.get(k);
            picture.remove(k);
            picture.add(k,"*".concat(tempWord).concat("*"));
        }


        String wall = "*".repeat(picture.get(1).length());
        // Unshift
        picture.add(0,wall);
        // push
        picture.add(wall);


        return picture;

    }



    public static void main(String[] args) {

        List<String> newList = new ArrayList<String>();
        newList.add("abc");
        newList.add("def");
        System.out.println(addBorder(newList));

    }

}
