interface Reportable 
{
    getSummary(): string;
}

interface Exportable
{
    exportToCsv(): string;
}

class CombinedReport implements Reportable, Exportable
{
    getSummary(): string 
    {
        return '5 passed and 1 failed';
    };

    exportToCsv(): string 
    {
        return 'Total: 5 ' + 'Passed: 3 ' + 'Failed: 2';     
    };
}

const result = new CombinedReport();
console.log(result.getSummary());
console.log(result.exportToCsv());
//One class can implement several interfaces by using the keyword implements with commas separating the interface names.
//If I remove one method, the compiler complains that there is one missing method.