//EXERCISE C2
class TestRun
{
    public total: number;
    public passed: number;
    public failed: number;

    constructor(total: number, passed: number, failed: number) 
    {
        this.total = total;
        this.passed = passed;
        this.failed = failed;
    };
}

const run1 = new TestRun(10, 8, 2);
const run2 = new TestRun(5, 5, 0);

console.log('run 1 failure: ' + run1.failed);
console.log('run 2 passed: ' + run2.passed);
//constructor = per instance data at creation time