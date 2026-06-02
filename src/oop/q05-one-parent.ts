abstract class BasePage
{
    protected url: string;

    constructor (url: string)
    {
        this.url = url;
    }

    goto(): string 
    {
        return this.url;
    };

    abstract getTitle() : string;
};

/* abstract class AuditTrail
{
    abstract getLatestUserLoginDateTime() : Date;
} */ 

//Part A
/* class SecureLoginPage extends BasePage, AuditTrail
{

} 
PS C:\code\typescript-training> tsc
src/oop/q05-one-parent.ts:23:7 - error TS2515: Non-abstract class 'SecureLoginPage' does not implement inherited abstract member getTitle from class 'BasePage'.

23 class SecureLoginPage extends BasePage, AuditTrail
         ~~~~~~~~~~~~~~~

src/oop/q05-one-parent.ts:23:41 - error TS1174: Classes can only extend a single class.

23 class SecureLoginPage extends BasePage, AuditTrail
                                           ~~~~~~~~~~


Found 2 errors in the same file, starting at: src/oop/q05-one-parent.ts:23
*/

//Part B
interface AuditTrail
{
    getLatestUserLoginDateTime(): Date
}

class SecureLoginPage extends BasePage implements AuditTrail
{
    constructor()
    {
        super('/secure_login');
    }

    getTitle(): string {
        return 'Secure Login Page';
    };

    getLatestUserLoginDateTime(): Date {
        return new Date();
    }
}

const secureLoginPage = new SecureLoginPage();
console.log(secureLoginPage.getTitle());
console.log(secureLoginPage.getLatestUserLoginDateTime());