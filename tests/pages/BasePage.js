import * as allure from 'allure-js-commons';

export default class BasePage {
  constructor (page) {
    this.page = page;
  }
  async _secureFill (locator, key, value) {
    await allure.step(`Fill secure value for ${key}`, async () => {
      allure.parameter(key, value, { mode: 'hidden' });
      await locator.fill(value);
    });
  }

  async goto (url) {
    await this.page.goto(url);
  }
  async getUrl () {
    return this.page.url();
  }
}
