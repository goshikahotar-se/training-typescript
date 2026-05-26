//Question 1 - Array
let defectIds: string [] = ['100', 'BUG-200', 'BUG-109', '321', 'BUG-111'];

const validDefectIds = defectIds.filter(defect => defect.includes('BUG-'));
console.log(validDefectIds.sort());

//Question 2 - Tuple
transferTestRecord(535737, 441008, 10_000, 'MUR');

function transferTestRecord (accountFrom: number, accountTo: number, amount: number, currency: string)
{
    let testRecord: [number, number, number, string] = [accountFrom, accountTo, amount, currency];
    console.log('Transfer ' + testRecord[2] + ' ' + testRecord[3] + ' from ' + testRecord[0] + ' to ' + testRecord[1]);
}

//Question 3 - Tuple - type alias
type TestReport = [string, number];

let testReports: TestReport [] = [['contactless_payment', 200],
                                  ['presentment_matching', 5501],
                                  ['chip_payment', 2000]];

for(const testReport of testReports)
{
    if(testReport[1] > 5000){
        console.log(testReport[0]);
    }
}

//Question 4 - tuple
//enum LoginStatus {OK, FAIL};
let token: string = 'gtf2f1a';

const result = loginStatusAndToken(false, token);
console.log(result);

function loginStatusAndToken(loginStatus: boolean, token: string) : [string, string]
{
    if (loginStatus)
        return ['OK', token];
    else
        return ['FAIL', token];
}

//Question 5 - Tuple

function detailsOfUI(width: number, height: number, deviceScale: number) : string
{
    let output: string = width + 'x' + height + ' @' + deviceScale + 'x';
    return output;
}

const output: string = detailsOfUI(1440, 900, 2);
console.log(output);

//Question
type TestResult = { name: string; passed: boolean };

const results: TestResult[] = [
  { name: 'login', passed: true },
  { name: 'checkout', passed: false },
  { name: 'profile', passed: true },
  { name: 'payment', passed: false },
];

let numberOfFailed: number = 0;
let failedTestCases: string [] = [];

for (const result of results)
{
    if (!result.passed)
    {
        numberOfFailed++;
        failedTestCases.push(result.name);
    }
};

console.log(numberOfFailed + ' failed: ' + failedTestCases);
