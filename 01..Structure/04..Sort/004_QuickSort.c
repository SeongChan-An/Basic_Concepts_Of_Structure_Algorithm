/*
퀵 정렬은 편향된 분할이 발생할 때 연산의 양이 𝑂(𝑁
2
)입니다. 따라서 실제로 정렬을 함에 있어서는
퀵 정렬을 직접 구현하지 않습니다. 따라서 C++의 Algorithm 라이브러리를 사용합니다. Algorithm
라이브러리의 sort() 함수는 퀵 정렬을 기반으로 하되 𝑂(𝑁𝑙𝑜𝑔𝑁)을 보장합니다

*/

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#define SIZE 1000
int a[SIZE];
int swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void quickSort(int start, int end)
{
    if (start >= end)
        return;
    int key = start, i = start + 1, j = end, temp;
    while (i <= j)
    { // 엇갈릴 때까지 반복합니다.
        while (i <= end && a[i] <= a[key])
            i++;
        while (j > start && a[j] >= a[key])
            j--;
        if (i > j)
            swap(&a[key], &a[j]);
        else
            swap(&a[i], &a[j]);
    }
    quickSort(start, j - 1);
    quickSort(j + 1, end);
}

int main(void)
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
        scanf("%d", &a[i]);
    quickSort(0, n - 1);
    for (int i = 0; i < n; i++)
        printf("%d ", a[i]);
    system("pause");
    return 0;
}
