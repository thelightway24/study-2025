import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.io.IOException;
public class Main {
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer userInput1 = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(userInput1.nextToken()); // 수의  개수
		int m = Integer.parseInt(userInput1.nextToken()); //합을 구해야하는 횟수 M
		StringTokenizer userInput2 = new StringTokenizer(br.readLine());
		
		int[] sumArray = new int[n]; // 합집합 배열 생성

		for(int i=0; i<n; i++) { 
			if(i>0) {
				sumArray[i] = sumArray[i-1] + Integer.parseInt(userInput2.nextToken());
			} else {
				sumArray[i] = Integer.parseInt(userInput2.nextToken());
			}
		}
		
		//합 계산 및 출력
		
		for(int i=0; i<m; i++) {
			StringTokenizer userInput3 = new StringTokenizer(br.readLine());
			int sumI = Integer.parseInt(userInput3.nextToken());
			int sumJ = Integer.parseInt(userInput3.nextToken());
			int result = 0;
            
			if(sumI > 1) {
				result = sumArray[sumJ-1] - sumArray[sumI-2];
			} else {
				result = sumArray[sumJ-1];
			}
			System.out.println(result);
		}
	}
}
