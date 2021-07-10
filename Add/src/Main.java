public class Main {


    // Java spread operator => ...
    // You can send values as parameter as you want.
    public static int addValues(int ...values)
    {
        int sum = 0;

        for(int item : values )
        {
            sum += item;
        }

        return sum;

    }

    public static void main(String[] args) {
        System.out.println(addValues(1,2,3,4,5));
        System.out.println(addValues(1,2,3,4,5,6));
    }

}
