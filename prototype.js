/*
Every function in Javascript has a property called prototype which is an object 
By defining methods on this prototype object, you get to share methods across all instances created by the function
This is what happends when you use the 'new' keyword to create such instances 
Arrow function dont have a prototype.
*/

// Basic
let person = {}
person.name = 'Bearly'
person.sayMyName = function () {
    console.log(`My name is ${this.name}`)
}
person.eat = function (food) {
    console.log(`I'm eating ${food}`)
}
person.sleep = function() {
    console.log(`Sleeping`)
}

person.eat('test')
person.sayMyName()

// Multiple persons advanced
function Person (name) {
    let person = {}
    person.name = name
    person.sayMyName = function () {
        console.log(`My name is ${this.name}`)
    }
    person.eat = function (food) {
        console.log(`I'm eating ${food}`)
    }
    person.sleep = function() {
        console.log(`Sleeping`)
    } 
    return person
}

const navis = Person('Navis')

navis.sayMyName()
navis.eat('pizza')
navis.sleep()

//Re usable methods

const personMethods = {
    sayMyName () {
        console.log(`My name is ${this.name}`)
    },
    eat (food) {
        console.log(`I'm eating ${food}`)
    },
    sleep() {
        console.log(`Sleeping`)
    }
} 

function ReusablePerson(name) {
    let person = {}
    person.name = name
    person.sayMyName = personMethods.sayMyName
    person.eat = personMethods.eat
    person.sleep = personMethods.sleep
    return person
}

const bearly = ReusablePerson('Bearly')
bearly.sayMyName()
bearly.eat('pizza')
bearly.sleep()

// Using Object.craete()

function ReusableOptimizedPerson(name) {
    let person = Object.create(personMethods);
    person.name = name
    return person
}

const freesie = ReusableOptimizedPerson('Freesie')
freesie.sayMyName()
freesie.eat('poori')
freesie.sleep()


// Using prototype

PrototypePerson.prototype.sayMyName = function () {
    console.log(`My name is ${this.name}`)
}
PrototypePerson.prototype.eat = function (food) {
    console.log(`I'm eating ${food}`)
}
PrototypePerson.prototype.sleep = function () {
    console.log(`Sleeping`)
}

function PrototypePerson(name) {
    let person = Object.create(PrototypePerson.prototype);
    person.name = name
    return person
}

const greta = PrototypePerson('Greta')
greta.sayMyName();
greta.eat('Idly')
greta.sleep()

///Final optimized code with Prototye

OptimizedPrototypePerson.prototype.sayMyName = function () {
    console.log(`My name is ${this.name}`)
}
OptimizedPrototypePerson.prototype.eat = function (food) {
    console.log(`I'm eating ${food}`)
}
OptimizedPrototypePerson.prototype.sleep = function () {
    console.log(`Sleeping`)
}

function OptimizedPrototypePerson(name) {
    this.name = name
}

const blissie = new OptimizedPrototypePerson('blissie')
blissie.sayMyName()
blissie.eat('choclates')
blissie.sleep()

const clissie = new OptimizedPrototypePerson('clissie')
clissie.sayMyName();
clissie.eat('popsickales')
clissie.sleep()

/*
1. Constructor  property
*/
console.log(OptimizedPrototypePerson.prototype) 

console.log(OptimizedPrototypePerson.prototype.constructor)

/*
2. Object get prototype
*/
console.log(Object.getPrototypeOf(clissie))

console.log(Object.getPrototypeOf(clissie).constructor)

console.log(clissie.constructor)

/*
3. instanceof operator
*/
console.log(clissie instanceof OptimizedPrototypePerson)

console.log(Object.getPrototypeOf(clissie) === OptimizedPrototypePerson.prototype)

// Prototypal Inheritance

