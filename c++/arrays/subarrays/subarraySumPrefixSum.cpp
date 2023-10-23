

// prefix sum approach

// here rather than using a new for loop for k inside j loop as in
// brute force approach
// we will create a new array and store prefix sum .i.e cumulative sum at each step

// for ex => if
// array =  [1,2,3,4]
// prefix = [1,3,6,19]
// prefix[i] = prefix[i-1] + arr[i]; i >0

// and subarray sum = prefix[j] - prefix[i-1];

// int arr[] = {-2, 3, 4, -1, 5, -12, 6, 1, 3};

#include <iostream>
using namespace std;

int largestSubarraySum(int arr[], int n)
{

    int prefix[100] = {0};

    prefix[0] = arr[0];

    for (int i = 1; i < n; i++)
    {
        prefix[i] = prefix[i - 1] + arr[i];
    };

    int largest_sum = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = i; j < n; j++)
        {
            int subarraySum = 0;
            subarraySum = i > 0 ? prefix[j] - prefix[i - 1] : prefix[j];
            largest_sum = max(largest_sum, subarraySum);
        }
    }

    return largest_sum;
}

int main()
{

    int arr[] = {-2, 3, 4, -1, 5, -12, 6, 1, 3};
    int n = sizeof(arr) / sizeof(int);

    cout << largestSubarraySum(arr, n);

    return 0;
}

//Time complexity (N+Npower2) => O(Npower2) or Nsquare