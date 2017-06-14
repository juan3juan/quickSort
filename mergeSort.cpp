// ConsoleApplication1.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include<iostream>

using namespace std;

void mergeArray(int a[], int first, int mid, int last, int temp[])
{
	int i = first, j = mid + 1;
	int m = mid, n = last;
	int k = 0;
	while (i <= m && j <= n)
	{
		if (a[i] < a[j])
			temp[k++] = a[i++];
		else
			temp[k++] = a[j++];
	}
	while (i <= m)
		temp[k++] = a[i++];
	while (j <= m)
		temp[k++] = a[j++];
	for (i = 0; i < k; i++)
		a[first + i] = temp[i];
}

void mergeSort(int a[], int first, int last, int temp[])
{
	if (first < last)
	{
		int mid = (first + last) / 2;
		mergeSort(a, first, mid, temp);
		mergeSort(a, mid + 1, last, temp);
		mergeArray(a, first, mid, last, temp);
	}
}

bool mergeSort(int a[], int n)
{
	int *p = new int[n];
	if (p == NULL)
		return false;
	mergeSort(a, 0, n - 1, p);
	delete[] p;
	return true;
}

int main()
{
	cout << "This is mergeSort!" << endl;
	int a[10] = { 2,11,4,7,1,9,3,12,3,9 };
	mergeSort(a, 10);
	for (int i = 0; i < 10; i++)
		cout << a[i] << " ";
	system("pause");
	return 0;
}

