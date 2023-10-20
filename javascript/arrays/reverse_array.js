

let arr = [1,2,3,4,5,10,15];

function swap(arr,s,e){

    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
}
function reverseArray(arr){

    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        swap(arr, start, end)
        start++;
        end--;
    }

    console.log(arr)
};

reverseArray(arr)






//Time complexity O(N)
//No extra space so space complexity O(1)