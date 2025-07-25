// function is a block of code designed to form of a particular task 
// function functionName(Parameter1,Parameter2,.....){};
function greet() {
    console.log("Hello, My name is Puneet Sharma");
    console.log("I am Learning Javascript functions.");
    // block ends here
}

// function call --> write name of funcction (greet) with parenthesis ()
greet();

// function with parameter
function greetWithName(name){
    // name is a parameter
    console.log("Hello, My name is " + name)
}
greetWithName("Puneet Sharma");

// functions with multiple parameters 
function greetWithFullName(firstname,lastname){
    console.log("Hello, My Fullname is " + firstname + "" + lastname);
    console.log(`Hello, My Fullname is ${firstname} ${lastname}`);
}
greetWithFullName("Puneet","Sharma")

// function with return value 
function addNumbers(a,b){
    return a+b;
}
let result = addNumbers(10,20);
console.log("The sum is:" + result)

// function with return value 
function subNumbers(a,b){
    return a-b;
}
let res = subNumbers(10,20);
console.log("The sub is:" + res)

