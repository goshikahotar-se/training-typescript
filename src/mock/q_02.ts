/*
Requirements:

1. Return only failed tests (passed === false).
2. Group them by browser (key = browser name, value = array of test names).
3. Each test name appears once per browser (no duplicates in the same browser group).
4. Preserve the order of first appearance in the input.
5. One pass over results if you can (we may ask about complexity).
6. Do not mutate the input array.

{
  firefox: ['login']
}
*/

type TestResult = {
  testName: string;
  browser: 'chromium' | 'firefox' | 'webkit';
  passed: boolean;
};

const results: TestResult[] = [
  { testName: 'login', browser: 'chromium', passed: true },
  { testName: 'login', browser: 'firefox', passed: false },
  { testName: 'checkout', browser: 'chromium', passed: true },
  { testName: 'checkout', browser: 'webkit', passed: true },
  { testName: 'login', browser: 'webkit', passed: true },
  { testName: 'buy', browser: 'firefox', passed: false }
];

function groupFailedTestsByBrowser(results: TestResult[]) : Record<string, string[]> {
    let testResults : Record<string, string[]> = {};
    
    for (const result of results) {
        if (!(result.browser in testResults))
        {
            if (!result.passed)
            {
                testResults[result.browser] = [result.testName];
            }
        }
        else
        {
            if (!result.passed)
            {
                if (!testResults[result.browser]?.includes(result.testName))
                {
                    testResults[result.browser]?.push(result.testName);
                }
            }
        }
    }

    return testResults;
}

const printOutResults = groupFailedTestsByBrowser(results);
console.log(printOutResults);