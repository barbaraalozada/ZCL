import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
  constructor (page, testInfo) {
    super(page, testInfo);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { type: 'submit' });
    this.flashMessage = page.locator('#flash');
  }
  async setUsername (username) {
    await this._secureFill(this.usernameInput, 'Username', username);
  }

  async setPassword (password) {
    await this._secureFill(this.passwordInput, 'Password', password);
  }

  async clickLoginButton () {
    await this.loginButton.click();
  }

  async getFlashMessage () {
    try {
      return this.flashMessage.textContent();
    } catch (err) {
      console.error('The flash message is not available', err);
      throw err;
    }
  }
}
