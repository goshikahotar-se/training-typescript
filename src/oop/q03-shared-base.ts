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

//const page = new BasePage -> Roger that! cannot create an instance of an abstract class error.

class LoginPage extends BasePage
{
    constructor ()
    {
        super('/login');
    };

    getTitle(): string {
        return 'W3 Schools Tutorial TypeScript';
    }
}

const loginPage = new LoginPage();
console.log(loginPage.goto());
console.log(loginPage.getTitle());

// Shared behaviour lives in the abstract base; each child class calls super('\login') and implements getTitle(). The base cannot be instantiated, only concrete pages can.