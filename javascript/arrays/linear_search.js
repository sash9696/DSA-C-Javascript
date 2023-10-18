let arr = [10, 2, 3, 4, 5, 6, 7, 8, 9, 20];
let key = 5;

function linear_search(arr, key) {
	let foundIndex = -1;
	arr.forEach((element, index) => {
		if (element == key) {
			foundIndex = index;
		}
	});
	return foundIndex;
}

let index = linear_search(arr, key);

if (index != -1) {
	console.log(`${key} found at index ${index}`);
} else {
	console.log(`${key} is not found`);
}

//in the worst case traversing through the whole array
//so O(N) time complexity
