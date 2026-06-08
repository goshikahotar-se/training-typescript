/* 
Write a function that uses a proper type guard to determine whether an object with string keys contains more than two numeric values. The function should return a boolean.
Input/output: (to give to the candidate)
input = { a: 1, b: "hello", c: 2, d: 3, e: false };
output: true
input = { a: 1, b: "hello", c: “2”, d: “3”, e: false };
output: false
*/

// const input :  = {
//     a: 1, b: "hello", c: 2, d: 3, e: false
// };

function checkIfObjectContainsMoreThan2Digits () : void
{
    const input = { a: 1, b: "hello", c: 2, d: 3, e: false };
    
    for (const [key, value] of Object.entries(input))
    {
        if(typeof(value))
        {
            console.log('false');
        }
    }
}

checkIfObjectContainsMoreThan2Digits();