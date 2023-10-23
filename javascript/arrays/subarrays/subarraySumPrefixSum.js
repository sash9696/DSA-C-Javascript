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

let arr = [-2, 3, 4, -1, 5, -12, 6, 1, 3];

function largestSubarraySum(arr, n) {
	let prefix = [];

	prefix[0] = arr[0];

	for (let i = 1; i < n; i++) {
		prefix[i] = prefix[i - 1] + arr[i];
	}

	let largest_sum = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let subarraySum = 0;
			subarraySum = i > 0 ? prefix[j] - prefix[i - 1] : prefix[j];
			largest_sum = Math.max(largest_sum, subarraySum);
		}
	}
	return largest_sum;
}

console.log(largestSubarraySum(arr, arr.length));
