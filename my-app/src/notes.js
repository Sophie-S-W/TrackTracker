/* to export*/ export default function DoSomething(){
    //define a function
}

//new method: works better with callback functions
/* to export*/ export const DoSomething = () => {
    //this exports differently
}

//in react
const MyComponent = () => {
    return <div> </div>
}

//ananymous functions
<button 
onClick={() => { //allows to execute command without having a function
    counsole.log("hello");
    }}
></button>;

//write js in jss in less lines
let age = 10;
//let name = "Bob";
//////long ver//////
// if (age >10){
//     name = "Cob"
// }else{
//     name = "Bob"
// }

//shorter ver
let name = age > 10 && "Bob"; //if age > 10 then name = Bob
let name2 = age < 10 || "Bob"; //does the opposite, if "not = 10"
let name3 = age > 10 ? "Bob" : "Cob"; //if-else statement

//object or dictionary
const person = {
    Name: name,
    Age: 20,
    unhappy: false,
};

///////decalre variables, but too much space/////
// const name = person.name
// const age = person.age
// const emo = person.unhappy

////////shorter ver//////
const {Name, Age, unhappy} = person;

//everything is same except name, copy object but only change one variable
const person2 = {...person, name: "oh"}

//arrays
const names = ["name1", "name2", "name3"]
const names2 = [...names, "name4"] //includes all names in names array with an extra name4

//3 array functions in js
//  .map()
//  .filter()
//  .reduce()

//modify each name without for loop
names.map((name)=>{ //all objects in the array will execute following functions
    console.log(name); //will console log each of name
    return name + "1"; // all elements will become object name and a 1 at the end
})

//example in use
name.map ((name) => { //all names will be generated like a header
    return <h1> {name} </h1>
})

//.filter()
//example 2 remove certain objects from list
let moreNames = ["name1", "name2", "name3", "name2", "name2"];

names.filter((name) => {
    return name !== "name2" // only return variables !== "name2"
})

// Async 
// Await
// Fetch