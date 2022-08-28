/*
An advanced technique for working with functions which relies on the concept of closure
*/

function sum(a,b,c) {
    return a+b+c
}

const curry = (fn) => {
    return (a) => {
        return (b) => {
            return (c) => {
                return fn(a,b,c)
            }
        }
    }
}

const currySum = curry(sum);
console.log(currySum(1)(1)(1));
const TwoPlus = currySum(2);
console.log(TwoPlus(3)(5))
console.log(TwoPlus(10)(5))
