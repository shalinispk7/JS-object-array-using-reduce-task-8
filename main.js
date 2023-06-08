// Summing Values in an Object Array Using Array Reduce JavaScript


let arr = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

var result = arr.reduce(function (acc, cv) { 
	return acc + cv.n; 
}, 0);

document.write("Summing Values in an Object Array Using Array Reduce "+result);



// let result=arr.reduce(function(acc,cv){
// 	console.log('acc' + acc.n)
// 	console.log('cv' + cv.n)
// 	return acc.n+cv.n;
// 	// console.log(acc)

// });
// console.log(result);
	
	
	
	
