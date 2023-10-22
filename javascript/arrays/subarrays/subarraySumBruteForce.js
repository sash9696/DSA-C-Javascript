let arr = [-2, 3, 4, -1, 5, -12, 6, 1, 3];

function largestSubarraySum(arr) {
	let n = arr.length;

    let largest_sum = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
            // let row = "";
            let subarraySum = 0;

			for (let k = i; k <= j; k++) {
                subarraySum += arr[k]
				// row += arr[k] + ' ';
			}
            largest_sum =  Math.max(largest_sum,subarraySum);
			// console.log(row);
		}
	}
    return largest_sum;
}

console.log(largestSubarraySum(arr));

//Time complexity => O(N power 3) due to 3 nested loops