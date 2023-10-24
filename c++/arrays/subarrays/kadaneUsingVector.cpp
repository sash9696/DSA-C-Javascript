#include <iostream>
#include <vector>
using namespace std;

// int maxSumSubarray(vector<int> A)
// {
//     int cs = 0;
//     int ms = INT_MIN; // Initialize ms to a very small value, typically negative infinity

//     for (int i = 0; i < A.size(); i++)
//     {
//         cs = max(A[i], cs + A[i]); // Compare A[i] with cs + A[i] to find the new subarray sum
//         ms = max(ms, cs);
//     }

//     return ms;
// }

int maxSumSubarray(vector<int> A)
{
    bool allNegative = true;

    int largest= INT_MIN;

    for(int x: A){
        if(x > 0){
            allNegative = false;
        }
        largest = max(largest,x);
    }
    //special case
    if(allNegative){
        return largest;
    }

    //kadanes algo
    int cs = 0;
    int ans = 0;

    for(int x : A){
        cs = cs + x;
        if(cs < 0){
            cs = 0;
        }
        ans = max(ans,cs);
    }

    return ans;
}
int main()
{
    vector<int> A;
    A.push_back(-1);
    A.push_back(-3);
    A.push_back(-4);
    A.push_back(-2);
    A.push_back(-10);
    A.push_back(-6);

    int result = maxSumSubarray(A);
    cout << "Maximum Subarray Sum: " << result << endl;
    return 0;
}
