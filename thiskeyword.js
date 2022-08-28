/*
 the this keyword refers to an object.
 Which object depends on how this is being invoked (used or called).

 The this keyword refers to different objects depending on how it is used

 It can be varied in 4 ways
 1. Implicit
 2. explicit using call, bind, apply
 3. new
 4. default
*/

//Implicit

const person = {
    name: 'Navis',
    sayMyName() {
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName();

// Explicit

const person2 = {
    name: 'Navis'
}

var diffy ="Mike Default";

function sayMyName(eat1, eat2) {
    console.log(`Person 2 Name is ${this.name}`)
    console.log(`I will eat ${eat1} and ${eat2}`)
    console.log(`default test ${this.diffy}`)

}
sayMyName.apply(person2, ["Biriyani", "Pizza"]);
sayMyName.call(person2 , "Sarakku", "Sidedish");
//bind invokes a new function
const newFunction = sayMyName.bind(person2, "Biscuit", "Milk");
newFunction();

//new binding
function Horse(name) {
    this.name = name;
}

const h1 = new Horse("Raja");
const h2 = new Horse("Rani");
function sayNewName() {
    console.log(`default new diffy ${this.diffy}`)

}
sayNewName();

/*
//Order of precedence

1. 'new' Binding 
2. Explicit Binding
3. Implicit Binding
4. Default Binding
*/

//impliment bind function

