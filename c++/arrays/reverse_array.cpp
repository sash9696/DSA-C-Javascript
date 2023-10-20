
#include <iostream>
using namespace std;

void reverseArray(int arr[], int n)
{

    int s = 0;
    int e = n - 1;

    while (s < e)
    {
        int temp = arr[s];

        arr[s] = arr[e];
        arr[e] = temp;

        s++;
        e--;
    }
}

int main()
{

    int arr[] = {1, 2, 3, 4, 5, 10};

    int n = sizeof(arr) / sizeof(int);

    reverseArray(arr, n);
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    };
    cout << endl;

    return 0;
}

//Time complexity O(N)
//No extra space so space complexity O(1)