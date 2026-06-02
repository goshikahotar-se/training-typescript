/* 
PROBLEM 1 — Occurrence count (1,2,3,2,2,1,3 → 1:2, 2:3, 3:2)
 - Parse input → array of numbers (split by ,, trim, Number).
 - Loop once: Map<number, number> or Record — for each value, increment count.
 - Output: loop Map entries or sort keys first if they want stable order. 
 */

 let userInput: number [] = [1,2,3,2,2,1,3];

 const occurencesTracker = new Map <number, number> ();

 for (const numberInArray of userInput)
 {
    if (!occurencesTracker.has(numberInArray))
    {
        occurencesTracker.set(numberInArray, 1);
    }
    else
    {
        const existingKeyInMap = occurencesTracker.get(numberInArray);
        
        if(existingKeyInMap !== undefined)
            occurencesTracker.set(numberInArray, existingKeyInMap + 1);
    }
 }

 console.log(occurencesTracker);
