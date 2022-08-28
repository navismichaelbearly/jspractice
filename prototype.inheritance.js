// Parent Object
function Person(name) {
    this.name = name
}
Person.prototype.sayMyName = function() {
    console.log(`My name is ${this.name}`)
}
Person.prototype.eat = function(food) {
    console.log(`I'm eating food`)
}
Person.prototype.sleep = function () {
    console.log(`Sleeping`)
}
// Inherited Child Object
function Programmer(name, language) {
    Person.call(this,name)
    this.language = language
}
Programmer.prototype = Object.create(Person.prototype)
Programmer.prototype.code = function() {
    console.log(`I'm coding in ${this.language}`)
}
Programmer.prototype.constructor = Programmer

const michael = new Programmer('Michael', 'PHP')
console.log(michael.language)
michael.code()
console.log(michael.name)
michael.sayMyName()

/**
 * Prototypal chain
 * 
 * 
 * Object.prototype = null
 * .
 * .
 * .
 * ^
 * |
 * object's prototype 
 * ^
 * |
 * Object
 */

/**
 * Prototypal chain
 *
 * Person.prototype
 * ^
 * |
 * Programmer.prototype 
 * ^
 * |
 * michael
 */