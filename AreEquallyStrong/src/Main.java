public class Main
{

    public static boolean areEquallyStrong(int yourLeft, int yourRight, int friendsLeft, int friendsRight)
    {
        int yourStrongest = Math.max(yourLeft,yourRight);
        int yourWeakest = Math.min(yourLeft,yourRight);

        int friendsStrongest = Math.max(friendsLeft,friendsRight);
        int friendsWeakest = Math.min(friendsLeft,friendsRight);

        return yourStrongest == friendsStrongest && yourWeakest == friendsWeakest;
    }

    public static void main(String[] args) {

        System.out.println(areEquallyStrong(10,40,40,10));

    }
}
