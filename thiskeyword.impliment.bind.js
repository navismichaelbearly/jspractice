function bind(fn, context) {
    return () => {
        fn.apply(context, [...arguments])
    }
}

const person = {
    name: 'Navis'
}

function setMyName(lastname) {
    console.log(`My name is ${this.name} ${lastname}`)
}

const boundFn = bind(setMyName, person)
boundFn('Batman')