interface Reportable {
    getSummary(): string;
};

//Refactor this into use of constructor
class DynamicReport implements Reportable
{
    //constructor (public summary: string) {}
    public name: string;
    public total: number;
    public passed: number;
    public failed: number;

    constructor(name: string, total: number, passed: number, failed: number)
    {
        this.name = name;
        this.total = total;
        this.passed = passed;
        this.failed = failed;
    };

    getSummary(): string {
        return this.name + ': '+ this.total + ', ' + this.passed +' successful, ' + this.failed +' failed';
    };
};

class RegressionReport implements Reportable
{
    //constructor (public summary: string) {}

    getSummary(): string {
        return 'Complete Tests: 10, ' + '7 passed, ' + '3 wrong';
    };
};

class NightlyReport implements Reportable
{
    //constructor (public summary: string) {}

    getSummary(): string {
        return 'Full Tests: 10, ' + '7 success, ' + '3 failed';
    };
};

const smokeReport: Reportable = new DynamicReport('E2E tests', 10, 5, 5);
const regressionReport: Reportable = new RegressionReport();
const nightlyReport: Reportable = new NightlyReport();

let allReports: Reportable[] = [smokeReport, regressionReport, nightlyReport];

for(const report of allReports)
{
    console.log(report.getSummary());
}