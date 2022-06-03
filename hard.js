
function hardChallenge(array){		//initalizes hardChallenge function with array as a parameter.
	let numBoom=0;		//initalizes the boomerang count to 0.
	// for (let z=0;z<array.length;z++){
	// 	if (array[z]===array[z+2]&& array[z]!=array[z+1]){
	// 		numBoom++
	// 	}
	// }
	//code commented out above is the first iteration: works on just an array of elements.
	 for(let j=0;j<array.length;j++){ // Loop through the outermost array.
	 	if(array[j][0]){ //Check to see if there exists a subarray. If true, moves to for loop for inner array.
	 		for (let i=0;i<array[j].length;i++){ //loops through an inner Array, such as in ar3 array[0][0]=3
	 			if(array[j][i]===array[j][i+2]&& array[j][i+1]!= array[j][i]){ //if conditional statement checks
	 														//if the first element in the array is equal to the the third element
	 														//AND if the first element is not equal to the second element.
	 														//Example: Is [0] equal to [2], and is [0] not equal to [1]?
	 			numBoom++;									//add 1 to numBoom if true, the value count for boomerang.
	 			}
	 		}
	 	}
	 	else{												//if there is not an inner array, runs the basic code.
	 		if (array[j]===array[j+2]&& array[j]!=array[j+1]){	//Check to see if first elmenet is equal to the third.
	 															//and if first element is not equal to the 2nd.
	 		numBoom++											//If true, increases numBoom.
	 		}
	 	}
	}
	return `Amount of boomerangs in data: ${numBoom}`;	//Returns 0 if no Boomerangs, or the amount of boomerangs in the data.
}
//Jules Bernal Benitez Cohort 10 
const ar1=[1,2,1,2,1];//define one array
const ar2=[1,2,1,1,1];//define second array
const ar3=[[3,7,3],[1,-1,1],[5,6,5]];
console.log(hardChallenge(ar1)); //call function with argument of an array.
console.log(hardChallenge(ar2));
console.log(hardChallenge(ar3));