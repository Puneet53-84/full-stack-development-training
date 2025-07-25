// string
// console is similar to printf
// console used to print variables
let Name = "Puneet Sharma";
console.log(Name);

// number
// let is keyword for variable declaration
// let ek simple keyword h jo variable ko declare krne m help krta h 
let age = "19";
console.log(age);
console.log("My age is:" + age);
console.log("My age is:", age);

// float
let height = 5.9
console.log(height);

// javascript dynamic type language (dynamic means no need to specify datatype)
// c,c++,java static type language (static means we had to define type of variable/datatype)
// In C, int age=36 string name= puneet
// but in javascript we just use let keyword to take any type of data value 

// boolean
let isMarried = false
console.log(isMarried)

// is js case sensitive
let a = 10;//a is smaller case
let A = 20;//A is capital case                                    
console.log(a, A);
// js is case sensitive language

// undefined
let x;
console.log(x);

// null
let y = null;
console.log(y);

// object datatype
// let objectName = {key:value,key2:value2}
// objectName is a type of dictionary in js
let person = {
    "name": "Puneet Sharma",
    "branch": "BTech IT",
    "rollno.": "2823653",
    "age": "19"
}
console.log(person);

let address = {
    "key1": "string value",//value is string
    "key2": 1234,//value is number
    "homeAddress": {"city": "delhi"} ,//value is object
    "officeAddress": {"city": "noida"}//value is object
}

console.log(address);
console.log(address.homeAddress.city);//print city of office address
console.log("my office city is " + address.officeAddress.city)

// array data type
let myFriends = ["Gunn","Harsh","Purvi"]
console.log(myFriends)
console.log(myFriends[0])
console.log(myFriends[2])

//my best friend is gunn 
console.log("my best friend is "+myFriends[0])

//my best friend is gunn and purvi
console.log("my best friends are "+ myFriends[0]+" and "+myFriends[2])
console.log(`my best friends are ${myFriends[0]} and ${myFriends[2]}`)

// date data type
let currentDate = new Date();
console.log(new Date);

let myDOB = new Date("2006-03-16");
console.log(myDOB);
console.log("D.O.B year-" + myDOB.getFullYear());//get year from date
console.log("D.O.B Month-" + (myDOB.getMonth()+1));//get month from date
console.log("D.O.B date-" + myDOB.getDate());//get date from date

console.log("my expression is " + 1 + 5);//"my expression 1" + 5 --> my expression 15  
//isme vo numbers ko string k satth concatinate kr rha h bsss

// isme vo phle brackets solve kr rha h as acc to bodmas rule then jo solution ayega fr usko string k saath concatinate kr rha h 
console.log("my expression is " + (1 + 5));//"my expression " + 6 --> my expression 6









