import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const signUp = (field: { email: string; password: string }) =>
  api.post('/auth/signup', field);

export const signin = (field: { email: string; password: string }) =>
  api.post('/auth/signin', field);

export const getTodos = () =>
  api.get('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const createTodo = (todo: string) =>
  api.post('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    data: {
      todo,
    },
  });

export const deleteTodo = (id: number) =>
  api.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const updateTodo = (todo: string) =>
  api.put('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    data: {
      todo,
    },
  });
