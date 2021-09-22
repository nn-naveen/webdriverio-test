import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get sighinlink () { return $('a.login') }
    get inputEmail () { return $('#email_create') }
    get btnRegister () { return $('#SubmitCreate') }

    async clickSignIn (username, password) {
        await this.sighinlink.click();
    }

    async enteremail (email) {
        await this.inputEmail.setValue(email);
        await this.btnRegister.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
