let arr = [-2, 3, 4, -1, 5, -12, 6, 1, 3];

function printSubarrays(arr) {
	let n = arr.length;

	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
            let row = "";

			for (let k = i; k <= j; k++) {
				row += arr[k] + ' ';
			}
			console.log(row);
		}
	}
}

printSubarrays(arr);

//Time complexity => O(N power 3) due to 3 nested loops