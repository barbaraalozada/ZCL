import { test, expect } from '@playwright/test';
import { getUsers, createUser, deleteUser } from '../../../utils/apiHelper';
import users from '../../../data/users.json' with { type: 'json' };

test.describe('API Test', () => {

  test('GET users of page 2', async ({ request }) => {
    const response = await getUsers(request, users.page);
    expect(response.status()).toBe(200);
  });

  test('POST create user', async ({ request }) => {
    const response = await createUser(request, users.data.name, users.data.job);
    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('job');
    expect(responseBody).toHaveProperty('createdAt');
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe(users.data.name);
    expect(responseBody.job).toBe(users.data.job);
  });

  test('DELETE user', async ({ request }) => {
    const response = await deleteUser(request, users.id);
    expect(response.status()).toBe(204);
  });
});
