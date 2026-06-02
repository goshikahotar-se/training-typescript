/*
Your tool accepts a comma-separated string of integers from a user

---------------------------------------------------------------------
type ParseResult =
  | { ok: true; values: number[] }
  | { ok: false; errors: string[] };

function parseNumberList(input: string): ParseResult
---------------------------------------------------------------------
Rules:
1. Split on , (comma).
2. Trim whitespace around each part (" 1 " → "1").
3. Each part must be a valid integer (e.g. "42", "-3").
    -> Reject: empty parts from ,,, non-numeric ("a", "1.5", "12abc").
4. If any part is invalid → return { ok: false, errors: [...] } with one error message per bad part (include the bad token in the message, e.g. "Invalid token: a").
5. If all valid → return { ok: true, values: number[] } in left-to-right order.
6. Do not mutate the input string (treat it as read-only).
7. Do not use eval or Function().
*/

// SOLUTION
let input: string = "1, 2, 3, 5";

type ParseResult = 
| { ok: true; values: number []}
| {ok: false; errors: string []};

function parseNumberList (inputByUser: string)  : ParseResult
{
    let outputOfProcessedData: ParseResult;
    let inputNumbersSplittedOnComma = inputByUser.split(',').map(item => item.trim());

    if (inputNumbersSplittedOnComma.includes(""))
    {
        outputOfProcessedData = { ok: false, errors: ['Invalid Token: (empty)']};
        return outputOfProcessedData;
    }
    
    if (inputNumbersSplittedOnComma.every(item => !isNaN(Number(item))))
    {
        outputOfProcessedData = { ok: true, values: inputNumbersSplittedOnComma.map(Number) };

        let resultsOfValidNumbers: number [] = [];

        for (const checkNumber of inputNumbersSplittedOnComma)
        {
            resultsOfValidNumbers.push(Number(checkNumber));
            outputOfProcessedData = { ok: true, values: resultsOfValidNumbers };
        }
    }
    else
    {
        outputOfProcessedData = { ok: false, errors: ['Invalid Token']};
    }
    return outputOfProcessedData;
};

const printResults = parseNumberList(input);
console.log(printResults);