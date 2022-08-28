function hello() {
    if(true) {
        var a = 'Javascript';
        let b = 'C++';
        const c = 'Python';
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log("Outside if statement");
    console.log(a);
    console.log(b);
    console.log(c);
}
hello();