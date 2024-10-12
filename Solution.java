import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc= new Scanner(System.in);
        int x= sc.nextInt();
        int y= sc.nextInt();
        int z= sc.nextInt();
        int sum = x+y+z;
        
        if(sum<150){
            System.out.println("True");
        }
        else{
            System.out.println("False");
        }
    }
}
    