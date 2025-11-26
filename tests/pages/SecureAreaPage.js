import BasePage from './BasePage.js';

export default class SecureAreaPage extends BasePage {
  constructor (page, testInfo) {
    super(page, testInfo);
    this.flashMessage = page.locator('#flash');
  }
  async getFlashMessage () {
    return await this.flashMessage.textContent();
  }
}
