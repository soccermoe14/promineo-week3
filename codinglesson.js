//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

ages = [3, 9, 23, 64, 2, 8, 28, 93]; //creates a variable called ages and assigns it an array of numbers
console.log(ages);//prints the length of the array (8), and the values within the array

//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//	Do not use numbers to reference the last element, find it programmatically, 
//	ages[7] – ages[0] is not allowed!

let firstElement = ages[0]; //creates a variable called firstElement and assigns it the value of the first element in the array
console.log("firstElement: ", firstElement); //prints the value of the firstElement variable to the console

let lastElement = ages[ages.length - 1]; //creates a variable called lastElement and assigns it the value of the last element in the array
console.log("lastElement: ", lastElement); //prints the value of the lastElement variable to the console

let difference = lastElement - firstElement; //creates a variable called difference and subtracts lastElement minus the firstElement
console.log("last element in the ages array:", difference); //printing last element minus the first element


//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(44);//adds another element to the ages array
console.log(ages);//prints new array
console.log(difference);//prints last element minus first element
ages.sort();//sorts the array with the new element 
console.log(ages);//prints sorted array
console.log(difference);//prints last element minus first element **if I'm undertsanding, the answer should have been 91 once the array was sorted, but it is still 90**

//1c.	Use a loop to iterate through the array and calculate the average age.
let sum = 0; 
ages.forEach(function(num) {sum +=num});//created a function that loops through numbers in array adding each to the sum
average = sum/ages.length;//divided sum of numbers in array by the number of elements in the array
console.log(average);//printed the average value of the array ages

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //creates a variable called names and assigns it an array of strings
console.log(names); //prints all the elements in the array names

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 




//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

