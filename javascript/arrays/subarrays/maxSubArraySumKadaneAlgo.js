

let arr = [-2, 3, 4, -1, 5, -12, 6, 1, 3];



    function maxSubarraySum(arr){

        let currentSum =0;
        let maxSum=0;

        for(let i=0; i<arr.length; i++){

            currentSum = currentSum + arr[i];

            if(currentSum < 0){
                currentSum = 0;
            }

            maxSum = Math.max(maxSum,currentSum);
        }
        return maxSum;
    }


    console.log(maxSubarraySum(arr));









// Time Complexity: O(n)

// Space Complexity: O(1)


// how Kadane's algorithm works:

// Initialize two variables: max_sum and current_sum to a very small number, like negative infinity, or zero if you know all the numbers are non-negative.

// Start iterating through the array from the beginning.

// For each number in the array, add it to the current_sum. If the current_sum becomes negative at any point, reset it to zero. This step is crucial; it means you're only interested in subarrays that have a positive contribution to the total sum.

// While doing this, keep track of the maximum sum you've seen so far, which is stored in the max_sum variable. Whenever current_sum becomes greater than max_sum, update max_sum with the value of current_sum.

// Continue this process for all elements in the array. After you've processed the entire array, max_sum will hold the maximum subarray sum.

// In our example array, [1, -3, 4, -2, -1, 6], Kadane's algorithm will find the subarray [4, -2, -1, 6], and the maximum subarray sum will be 7.

// So, Kadane's algorithm is a way to efficiently find the subarray with the largest sum in an array, and it's a helpful tool in various programming and algorithmic tasks.

