import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import fs from 'fs';
import SecureAreaPage from '../pages/SecureAreaPage.js';
import * as allure from 'allure-playwright';

const usersJsonPath = './data/data.json';
const usersData = JSON.parse(fs.readFileSync(usersJsonPath));
const url = usersData.url;
const secureAreaUrl = usersData.secureAreaUrl;
const invalidUsers = usersData.invalidUsers;
const successMessage = usersData.successMessage;
const invalidUsernameErrorMessage = usersData.invalidUsernameErrorMessage;
const invalidPasswordErrorMessage = usersData.invalidPasswordErrorMessage;

test.describe('Login Page Test', () => {
  let login;
  let secureArea;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    secureArea = new SecureAreaPage(page);
    await login.goto(url);
  });

  test('Login with valid data', async ({ page }) => {
    await login.setUsername(process.env.USERNAME);
    await login.setPassword(process.env.PASSWORD);
    await login.clickLoginButton();
    await expect(await secureArea.getUrl()).toBe(secureAreaUrl);
    await expect(await secureArea.getFlashMessage()).toContain(successMessage);
  });

  for (const user of invalidUsers) {
    test(`Login with valid username and invalid password: ${user.password}`, async ({ page }) => {
      await login.setUsername(process.env.USERNAME);
      await login.setPassword(user.password);
      await login.clickLoginButton();
      await expect(await login.getFlashMessage()).toContain(invalidPasswordErrorMessage);
    });

    test(`Login with invalid username: ${user.username} and valid password`, async ({ page }) => {
      await login.setUsername(user.username);
      await login.setPassword(process.env.PASSWORD);
      await login.clickLoginButton();
      await expect(await login.getFlashMessage()).toContain(invalidUsernameErrorMessage);
    });
  }

  test('Login with valid username and missing password', async ({ page }) => {
    await login.setUsername(process.env.USERNAME);
    await login.clickLoginButton();
    await expect(await login.getFlashMessage()).toContain(invalidPasswordErrorMessage);
  });

  test('Login with missing username and valid password', async ({ page }) => {
    await login.setPassword(process.env.PASSWORD);
    await login.clickLoginButton();
    await expect(await login.getFlashMessage()).toContain(invalidUsernameErrorMessage);
  });

  test('Login with missing username and missing password', async ({ page }) => {
    await login.clickLoginButton();
    await expect(await login.getFlashMessage()).toContain(invalidUsernameErrorMessage);
  });
});
