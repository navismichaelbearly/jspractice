function sum(a , b, c) {
    return a + b + c
}

function genericCurry1(f) {
    return function currify(...args) {
        if(args.length >= f.length) {
            return f.apply(this,args);
        }
        else {
            return function (...newArgs) {
                return currify.apply(this, args.concat(newArgs))
            }
        }
    }
}

function genericCurry2(f) {
    return function currify(...args) {
        return args.length >= f.length ? f.apply(this,args) : currify.bind(this,...args)
    }
}

curriedSum = genericCurry2(sum)
console.log(curriedSum(5)(5)(5))