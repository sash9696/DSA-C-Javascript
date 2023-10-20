let arr = [10, 20, 30, 40];

function printAllPairs(arr) {
	let size = arr.length;

	for (let i = 0; i < size; i++) {
		let x = arr[i];

		for (let j = i + 1; j < size; j++) {
			let y = arr[j];

			console.log(`${x}, ${y}`);
		}
	}
}
printAllPairs(arr);
//Time complexity O(N2)   n square
