"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 1 - Array
let defectIds = ['100', 'BUG-200', 'BUG-109', '321', 'BUG-111'];
const validDefectIds = defectIds.filter(defect => defect.includes('BUG-'));
console.log(validDefectIds.sort());
//Question 2 - Tuple
transferTestRecord(535737, 441008, 10_000, 'MUR');
function transferTestRecord(accountFrom, accountTo, amount, currency) {
    let testRecord = [accountFrom, accountTo, amount, currency];
    console.log('Transfer ' + testRecord[2] + ' ' + testRecord[3] + ' from ' + testRecord[0] + ' to ' + testRecord[1]);
}
let testReports = [['contactless_payment', 200],
    ['presentment_matching', 5501],
    ['chip_payment', 2000]];
for (const testReport of testReports) {
    if (testReport[1] > 5000) {
        console.log(testReport[0]);
    }
}
//Question 4 - tuple
//enum LoginStatus {OK, FAIL};
let token = 'gtf2f1a';
const result = loginStatusAndToken(false, token);
console.log(result);
function loginStatusAndToken(loginStatus, token) {
    if (loginStatus)
        return ['OK', token];
    else
        return ['FAIL', token];
}
//Question 5 - Tuple
function detailsOfUI(width, height, deviceScale) {
    let output = width + 'x' + height + ' @' + deviceScale + 'x';
    return output;
}
const output = detailsOfUI(1440, 900, 2);
console.log(output);
const results = [
    { name: 'login', passed: true },
    { name: 'checkout', passed: false },
    { name: 'profile', passed: true },
    { name: 'payment', passed: false },
];
let numberOfFailed = 0;
let failedTestCases = [];
for (const result of results) {
    if (!result.passed) {
        numberOfFailed++;
        failedTestCases.push(result.name);
    }
}
;
console.log(numberOfFailed + ' failed: ' + failedTestCases);
//# sourceMappingURL=index.js.map