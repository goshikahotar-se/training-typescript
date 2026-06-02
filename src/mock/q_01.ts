/*
Q1 (new): Two-sum (TypeScript)
Given nums: number[] and target: number, return the indices of two numbers that add to target. Assume exactly one solution.

Example: nums = [2, 7, 11, 15], target = 9 → return [0, 1].

Write the function signature in TypeScript.
Explain time/space complexity in one line.
If you can’t finish code, describe the algorithm precisely.
*/

let testDataInputNumbers: number[] = [4, 1, 2, 3];
let target: number = 4;

const indicesOfElementsInTuple: [number, number] | undefined = twoSum(testDataInputNumbers, target);
console.log(indicesOfElementsInTuple);

function twoSum(testDataInputNumbers: Array<number>, target: number): [number, number] | undefined {
    const replicateTestDataInMap = new Map<number, number>();
    
    for (const [index, value] of testDataInputNumbers.entries()) 
    {
        const missingNumber = target - value;

        if (replicateTestDataInMap.has(missingNumber))
            return [index, Number(replicateTestDataInMap.get(missingNumber))];
        else
        {
            replicateTestDataInMap.set(value, index);
        }
    }
};