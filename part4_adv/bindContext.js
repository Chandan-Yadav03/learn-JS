const person={
    name: "chandan",
    greet(){
        console.log(`Hey i am ${this.name}`);
    },
};

person.greet();

let greetFunction=person.greet;
greetFunction();

let boundGreet=person.greet.bind({name: "Yadav"});
boundGreet();