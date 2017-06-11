// ConsoleApplication1.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>

using namespace std;


int quickArray(int a[], int low, int high)
{
	int first = low, last = high;
	int pivot = a[low];

	while (first < last)
	{
		while (a[last] > pivot && first < last)
		{
			last--;
		}
		if (first < last)
		{
			a[first] = a[last];
			first++;
		}
		while (a[first] < pivot && first < last)
		{
			first++;
		}
		if (first < last)
		{
			a[last] = a[first];
			last--;
		}
	}
	a[first] = pivot;
	return first;
}

void quickSort(int a[], int low, int high)
{

	if (low < high)
	{
		int pivotKey = quickArray(a, low, high);
		quickSort(a, low, pivotKey - 1);
		quickSort(a, pivotKey + 1, high);

	}

}

int main()
{
	int a[10] = { 2, 5, 1, 11, 9, 4, 2, 10, 7, 8 };
	quickSort(a, 0, 9);
	for (int i = 0; i < 10; i++)
	{
		cout << a[i] << "  ";
	}
	system("pause");
	return 0;
}

