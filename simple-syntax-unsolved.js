//Create a function that can take two numbers as arguments and log their sum to the console.

//Function set up
//We give you the function name and parameters with arguments
function sum(num1, num2) {
    //This is where you ad your logic
    //Perform the logic on the argument variables. 
    // So that we can handle whatever information; of the data type we expect.
}
//This is where we call and test our functions. 
//Next to them is the expected value they should get from each test
//if you're tests aren't returning these values, you need to rewrite your logic
sum(9, 43);//52
sum(-10, 2);//-8
sum(10000000000000, 1);//10000000000001
sum(-78, 675);//597

//Create a function that converts minutes, hours, and days into seconds

function convertSeconds(minutes, hours, days) {
    //logic goes here
}
convertSeconds(64, 3, 1);//101040
convertSeconds(2, 3, 45);//3898920
convertSeconds(98, 65, 1);//326280

//Create a function that takes the base and height of a triangle, and logs the area to the console

function areaTriangle(base, height) {
    //logic goes here
}
areaTriangle(1, 2);//1
areaTriangle(5, 45);//112.5
areaTriangle(23, 12);//138
areaTriangle(12, 13);//78

//Create a function that takes two sides of a triangle and logs the maximum edge of the third edge to the console

function maximumEdge(side1, side2) {
    //logic goes here
}
maximumEdge(3, 4);//6
maximumEdge(43, 22);//64
maximumEdge(12, 4);//15

//Create a function that takes a number and determines whether is it less than or greater than 0.
//if it is zero, log a sassy string to the console
//You should log greater or less to the console respectively
function zeroTest(num) {
    //logic goes here
}
zeroTest(1);//greater
zeroTest(0);//This is a sassy message about zero.
zeroTest(-1);//less

//Create a function that takes probability, prize, pay and determines whether it is a good bet
//Should return true if prob*pay > prize
function prob(prob, prize, pay) {
    //logic goes here
}

prob(0.2, 50, 9) //true
prob(0.9, 1, 2) //false
prob(0.9, 3, 2) //true

//Create a function that logs the first index and last index of and array to the console in that order

function firstLast(arr) {
    //logic goes here
}
firstLast([1, 2, 3, 4, 5, 6, 7, 8, 9]);//1 9
firstLast(["heem", 23, +"23", "aesop"]);//heem aesop
firstLast(["43", 54, 334, 54, "Joseph", 43]);//43 43
firstLast([1, 2, 3, "jerry"]);//1 jerry

//Permutation, create a function that takes a number. It should return the sum of the permutation
//starting at 1 and incrementing the added number by +1
//i.e. permutation(4) => 10 e.g. 1+2+3+4=10

function permutation(num) {
    //logic goes here
}
permutation(4);//10
permutation(13);//91
permutation(1024);//524800

//Create a function that takes an array and logs the reversed array in your console
function reverse(arr) {
    //logic goes here
}

reverse(["jack", "and", "jill", "went up", "the hill"]);
//[ 'the hill', 'went up', 'jill', 'and', 'jack' ]
reverse([1, 2, 3, 4, 5, 6, 7, 8]);
//[8,7,6,5,4,3,2,1]
reverse([1, "Shmurda", "Bobby", 84, "84", "90012", "Jerry is a can", "Did you just assume Jerry's existence?"]);
// ["Did you just assume Jerry's existence?",'Jerry is a can','90012','84',84,'Bobby','Shmurda',1]

//Create a function that takes and array and returns a string of the indexes of the array
function stringy(arr) {
    //logic goes here
}

stringy(["1", "2", "4", "5"]);//1245
stringy(["My", "face", "is", "the", "bass"]);//Myfaceisthebass
stringy(["powdered", " ", "brain"]);//powdered brain

//Create a funciton that takes two arrays and logs a single array made up of their values.
//Values should be alternating starting with the first array provided in the parameters
function combine(arr1, arr2) {
    //logic goes here
}
combine([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])
combine(["the ", "dog ", "swam ", "dark ", "for a ", "light"], ["slight ", "quickly ", "in the ", "night ", "bright ", "."]);
combine(["1", "2", "3"], ["3", "2", "1"]);

//Create a function that takes a word and returns true if it's plural, otherwise return false
function plural(word) {
    //logic goes here
}

plural("tests")//true
plural("test")//false

//Create a function that returns the first index of the first vowel in a string
//if there are no vowels return "Is this even a word?"
function vowels(word) {
    //logic goes here
}

vowels("This is a string");//2
vowels("quickly");//1
vowels("bhfgdtrnmkcihsudfhunloqnfone");//11
vowels("hfg")//Is this even a word?

//Create a function that takes an array of numbers and returns the two indexes with the smallest difference
function arrayDif(arr) {
    //logic goes here
}
arrayDif([1, 2, 4, 12, 65, 32]);//1,2
arrayDif([54, 75, 23, 1, 64]);//54,64
arrayDif([1, 54, 27, 72, 85, 93, 101, 65])//65 72