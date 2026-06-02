/*
PROBLEM 2 — Unique in order ([1,2,1,3,3,4,2] → [1,2,3,4])
Set for “seen”, number[] for result.
One pass: if not in Set, add to result and mark seen.
Order preserved because you only append on first sight.
*/

let inputNumbers: number [] = [1,2,1,3,3,4,2];
let uniqueNumbers: number [] = [];
const seen = new Set<number>();

for (const inputNumber of inputNumbers)
{
    if (!seen.has(inputNumber))
    {
        uniqueNumbers.push(inputNumber);
        seen.add(inputNumber);
    }
    else{}
}

console.log(uniqueNumbers.sort());