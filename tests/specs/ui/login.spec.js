import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.js';
import SecureAreaPage from '../../pages/SecureAreaPage.js';
import data from '../../../data/login.json' with { type: 'json' };

const url = data.url;
const secureAreaUrl = data.secureAreaUrl;
const invalidUsers = data.invalidUsers;
const successMessage = data.successMessage;
const invalidUsernameErrorMessage = data.invalidUsernameErrorMessage;
const invalidPasswordErrorMessage = data.invalidPasswordErrorMessage;

test.describe('Login Page Test', () => {
  let login;
  let secureArea;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    secureArea = new SecureAreaPage(page);
    await login.goto(url);
  });

  test('Login with valid data', async () => {
    await login.setUsername(process.env.USERNAME);
    await login.setPassword(process.env.PASSWORD);
    await login.clickLoginButton();
    await expect(await secureArea.getUrl()).toBe(secureAreaUrl);
    await expect(await secureArea.getFlashMessage()).toContain(successMessage);
  });

  for (const user of invalidUsers) {
    test(`Login with valid username and invalid password: ${user.password}`, async () => {
      await login.setUsername(process.env.USERNAME);
      await login.setPassword(user.password);
      await login.clickLoginButton();
      await expect(await login.getFlashMessage()).toContain(invalidPasswordErrorMessage);
    });

    test(`Login with invalid username: ${user.username} and valid password`, async () => {
      await login.setUsername(user.username);
      await login.setPassword(process.env.PASSWORD);
      await login.clickLoginButton();
      await expect(await login.getFlashMessage()).toContain(invalidUsernameErrorMessage);
    });
  }

  test('Login with valid username and missing password', async () => {
    await login.setUsername(process.env.USERNAME);
    await login.clickLoginButton();
    await expect(await login.getFlashMessage()).toContain(invalidPasswordErrorMessage);
  });

  test('Login with missing username and valid password', async () => {
    await login.setPassword(process.env.PASSWORD);
    await login.clickLoginButton();
    await expect(await login.getFlashMessage()).toContain(invalidUsernameErrorMessage);
  });

  test('Login with missing username and missing password', async () => {
    await login.clickLoginButton();
    await expect(await login.getFlashMessage()).toContain(invalidUsernameErrorMessage);
  });
});
