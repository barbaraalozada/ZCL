import api from '../data/api.json' with { type: 'json' };

export async function getUsers (request, page) {
  return request.get(`${api.apiBase}/users?page=${page}`, {
    headers: api.headers
  });
}

export async function createUser (request, name, job) {
  return request.post(`${api.apiBase}/users`, {
    headers: api.headers,
    data: { name, job }
  });
}

export async function deleteUser (request, id) {
  return request.delete(`${api.apiBase}/users/${id}`, {
    headers: api.headers
  });
}
