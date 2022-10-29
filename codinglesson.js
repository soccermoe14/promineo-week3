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
let lengthOfNames = 0;//declaring a variable for the length of the names in the array and initializes the sum as 0
for (person of names) {
    lengthOfNames += person.length
} //creates a for loop that loops through the integers (names) in the array counting integers in each name and adding each total to the sum
let averageLengthOfNames = lengthOfNames/names.length; //divided the sum of the interegers in the array by the number of elements in the array to determine avg
console.log(averageLengthOfNames);//prints the average number of letters in the array
    

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let concatenatedNames = names.reduce(function(accumulator, names){
    return accumulator + " " + names;}//**not sure if I did this correctly**; used reduce funtion to remove the commas and then return with the elements concateneated with a space
)
console.log(concatenatedNames);//prints all names separated by spaces and no commas

//3.	How do you access the last element of any array?
//Use the name of the array and add.length and subtract 1 (ex: names.length -1)

//4.	How do you access the first element of any array?
//The first element of an array starts at zero (the index). You can access by naming array and the index (ex: names[0])

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

namesArray = ["Kelly", "Sam", "Kate",];//delares a variable called namesArray and assigns it with strings
let nameLengths = namesArray.map(function(element){
    return element.length;
})//**not sure if I did this correctly** declared a new array using the map function to callback the length of each element and create a new array with those lengths
console.log(nameLengths);//prints new array

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
total = 0;//declares variable total initializes 0
nameLengths.forEach(function addNumbers(value){
    total += value;
})//for each element in the loop adds the value of number of integers to previous total
console.log(total);//prints the sum of all the integers in the array

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).