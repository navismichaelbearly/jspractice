function memoize(callback){
    let cache = {}
    console.log("BEFORE REST");
    return function (...args) { //REST OPERATOR - arguments to array
        const key = args.toString();
        console.log("key from args.toString()");
        console.log(args)
        console.log(key)
        console.log(cache)
        if(key in cache) {
            console.log('Returning from cache')
            return cache[key]
        }
        else {
            console.log('Computing result');
            const result = callback(...args) //
            cache[key] = result
            return result
        }
    }
}

function add(a,b) {
    return a + b
}

const memoizeAdd = memoize(add)
console.log(memoizeAdd(2,3))
console.log(memoizeAdd(2,4))
console.log(memoizeAdd(2,3))


function sub(a,b) {
    return a - b
}

function genMemoize(callback) {
    let cache = {}
    return (...arg) => { //using rest we are converting arg to array
        const key = arg.toString();
        if(key in cache) {
            console.log("Returning from cache");
            return cache[key];
        }
        else {
            console.log("calculate")
            const result = callback(...arg);
            cache[key] = result
            return result;
        }
    }
}

const subtask = genMemoize(sub);
console.log(subtask(10,3))
console.log(subtask(2,3))
console.log(subtask(10,3))