let array = [10, 11, 14, 15, 18, 20, 28, 30, 34];

let key = 18;

function binary_search(array, key) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (array[mid] == key) {
			return mid;
		} else if (array[mid] > key) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

let index = binary_search(array, key);

if (index != -1) {
	console.log(`${key} found at index ${index}.`);
} else {
	console.log(`${key} not found.`);
}

//Time complexity O(N)