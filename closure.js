function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()

const gn = outer()
gn()
gn()

/*
A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment). In other words, a closure gives you 
access to an outer function's scope from an inner function.

When we return a function from inner function, we are returning the function along with
its lexical scope.
*/