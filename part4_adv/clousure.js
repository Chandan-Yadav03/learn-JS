function outer(){
    let count=4;
    return function inner(){
        count++;
        return count;
    };
}

let increment=outer();
console.log(increment());