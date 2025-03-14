import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class AnagramCheck {

    public static boolean isAnagram(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }
        Map<Character, Integer> charCount = new HashMap<>();

        for (char c : str1.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        for (char c : str2.toCharArray()) {
            if (!charCount.containsKey(c) || charCount.get(c) == 0) {
                return false;
            }
            charCount.put(c, charCount.get(c) - 1);
        }

        return true;
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter the first string: ");
            String str1 = scanner.nextLine().replaceAll("\s", "").toLowerCase();

            System.out.print("Enter the second string: ");
            String str2 = scanner.nextLine().replaceAll("\s", "").toLowerCase();

            System.out.println("Input: \"" + str1 + "\", \"" + str2 + "\" Output: " + isAnagram(str1, str2));
        }
    }
}
