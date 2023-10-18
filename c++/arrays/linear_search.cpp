#include <iostream>
using namespace std;


int linear_search (int arr[], int n, int key){

    for(int i = 0; i < n; i++){
        if(arr[i] == key){
            return i;
        }
    }
    return -1;
}

int main(){

    int arr[] = {10,25,2,4,5,6,7,8,9,12};

    int n = sizeof(arr)/sizeof(int);

    int key;

    cin >> key;

    int index = linear_search(arr, n, key);

    if(index != -1){
        cout << key <<" found at index "<< index << endl;
    }else{
        cout << key <<" Not found "<< endl;
    }

    return 0;
}

//in the worst case traversing through the whole array
//so O(N) time complexity