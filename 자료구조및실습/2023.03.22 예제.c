#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

/*
// #1
int main()
{
	const char* ptrArr[3] = { "korea", "Seoul", "MapoGu" }; //korea가 저장되는것이 아니라 korea의 주소가 저장되는 것
	for (int i = 0; i < 3; i++)
		printf("%s \t", ptrArr[i]);
	return 1;
}
*/

// #2
/*
int main()
{
	char** ptrPtr;
	char* ptrArr[2] = { (char*)"Korea", (char*)"Seoul" };

	ptrPtr = ptrArr;
	printf("ptrArr[0]의 주소: %p, 값: %s\n", &ptrArr[0], ptrArr[0]);
	printf("ptrArr[0]의 참조값: %c, 참조문자열: %s\n", *ptrArr[0], *ptrArr);

	ptrPtr = ptrArr + 1;
	printf("ptrArr[1]의 주소:  %p, 값: %s\n", &ptrArr[1], ptrArr[1]);
	printf("ptrArr[1]의 참조값: %c, 참조문자열: %s\n", *ptrArr[1], *(ptrArr + 1));

	return 1;

}
*/

// #3
/*
typedef struct Employee {
	char name[10];
	int year;
	int pay;
} Employee;

Employee* createEmployeeInstance(char name[], int year, int pay)
{
	Employee* E = (Employee*)malloc(sizeof(Employee));
	if (E == NULL) return (Employee*)NULL;
	strcpy_s(E->name, sizeof E->name, name);
	E->year = year;
	E->pay = pay;
	return E;
}

int main()
{
	Employee* E1 = createEmployeeInstance((char*)"LeeSoon", 2023, 6900);
	printf("이름: %s, 입사년도: %d, 연봉: %d\n", E1->name, E1->year, E1->pay);
	return 1;
}
*/

// #4

void move(int n, char from, char tmp, char to)
{
	if (n == 1)
		printf("원판 1:move from %c to %c\n", from, to);
	else {
		move(n - 1, from, to, tmp);
		printf("원판 %d: move from %c to %c\n", n, from, to);
		move(n - 1, tmp, from, to);
	}
}

int main()
{
	clock_t begin, end;
	double duration;
	int n = 1;
	do {
		begin = clock();
		move(n, 'A', 'B', 'C');
		end = clock();
		duration = (double)((end - begin) / CLOCKS_PER_SEC);
		printf("디스크수: %d, 수행시간: %lf\n", n, duration);
		n += 3;
		getchar(); //getchar을 이해하지 못함(까먹음)
	} while (n < 20);
	return 1;
}
