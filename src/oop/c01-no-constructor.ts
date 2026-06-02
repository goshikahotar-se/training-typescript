//EXERCISE C1
class FixedGreeting
{
    sayHi(): string
    {
        return 'Hello from test runner';
    };
}

let greet1: string = new FixedGreeting().sayHi();
console.log(greet1);

let greet2: string = new FixedGreeting().sayHi();
console.log(greet2);
//No, we do not need different setup data for the instances. Constructor will not change anything - we are calling object here.

