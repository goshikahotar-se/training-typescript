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

class LoginPage extends BasePage
{
    constructor ()
    {
        super('/login');
    }

    getTitle(): string {
        return 'W3 Schools';
    }
}

class DashboardPage extends BasePage
{
    constructor()
    {
        super('/dashboard_login');
    }

    getTitle(): string {
        return 'Tutorials of W3 Schools';
    }
}

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

let pages: [LoginPage, DashboardPage] = [loginPage, dashboardPage];

for (const page of pages)
{
    console.log(page.goto());
    console.log(page.getTitle());
};
//Reflection: How many classes extend the same base name?
// 2 classes extend the same BaseName
//Reflection:  Does the base class list every child?
// The base class does not list any child class. It simply defines the concrete and abstract method that the child classes need to implement.