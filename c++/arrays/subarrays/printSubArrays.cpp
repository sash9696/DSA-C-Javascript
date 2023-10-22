
#include <iostream>
using namespace std;

void printSubarrays(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {
        for (int j = i; j < n; j++)
        {
            // cout << "{" << i << ", " << j << "}";
            for (int k = i; k <= j; k++)
            {
                cout << arr[k] << ", ";
            }
            cout << endl;
        }
    }
}

int main()
{

    int arr[] = {-2, 3, 4, -1, 5, -12, 6, 1, 3};

    int n = sizeof(arr) / sizeof(int);

    printSubarrays(arr, n);

    return 0;
}