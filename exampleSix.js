const a = 10
function exampleSix() {
    const b = 20
    function inner() {
        const c = 30
        console.log(a,b,c)
    }
    inner()
}
exampleSix()