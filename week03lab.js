let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);

// print the last element in array1
console.log(array1[5]);

// print the second to last element in array1
console.log(array1[array1.length-2]);

// add 16 and 3 to array1
array1.push(16, 3);

// print all elements in extended array - create a loop in the array to do this
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}


// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1[2]);
// yes, the 3rd element is now 14 after the array has been sorted

// create a variable called myTodoList that holds an empty array
let myToDoList = [];

// add three todo items to the array using a built-in array method
myToDoList.push("clean cat box", "take out trash", "feed cats");

// print 2nd element in array
console.log(myToDoList[1]);

// remove the second item in the array
myToDoList.splice(1, 1);
console.log(myToDoList);


// create another array, yourTodoList, and add two todo items
let yourToDoList = [];
yourToDoList.push("make dinner", "gas up car");
console.log(yourToDoList);

// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList
let ourToDoList = [];
ourToDoList = (myToDoList + ", " + yourToDoList);
console.log(ourToDoList);

// sort the following array from Z-A
//**there is no array to sort (practice this later!!!)**

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
// **need to come back and practice this later**




// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed, how do I access all arguments?
// Is there a way to loop through them?
function addingMachine(){
    // console.log(arguments);
    let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        let number = arguments[i];
        
        sum += number;
        
    } 
    return sum;
}
console.log(addingMachine(1,2,3,4));
console.log(addingMachine(1,2,3,4,5,6,7));
console.log(addingMachine(1,2,3,4,5,6,7,7,9,4,2344,112,34343,234));





// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

