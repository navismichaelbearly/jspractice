function square (num) {
    return num * num;
}

function memoizedSquare() {
    let cache = {}
    return function optimizedSquare(num) {
        if(num in cache){
            console.log('Returning from cache')
            return cache[num]
        }
        else {
            console.log('computing square');
            const result = square(num);
            cache[num] = result
            return result;
        }
    }
}

let memoSquare = memoizedSquare()
console.log(memoSquare(2))
console.log(memoSquare(5))
console.log(memoSquare(5))




