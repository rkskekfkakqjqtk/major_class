#include <stdio.h>
int main(void){
	int a, b;
	scanf_s("%d %d", &a, &b);
	// (3) a * (b의 일의 자리수)
	printf("%d\n", a * (b%10));
	
	// (4) a * (b의 십의 자리수)
	printf("%d \n", a * ((b % 100) - (b % 10)) / 10);

	// (5) a * (b의 백의 자리수)
	printf("%d \n", a*(b/100));

	// a X b 의 값
	printf("%d", a * b);
	//알아낸거 -> 수학 수식(손으로) 써본다음에 코딩하면 줮나 쉽다
	//내가 존나 어렵게 풀라고 했다 ㅅㅂ

	return 0;
}
