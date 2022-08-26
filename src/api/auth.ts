import client from './client';

export const register = async (username: string, password: string) => {
  try {
    const response = await client.post('/auth/register', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const login = async (username: string, password: string) => {
  try {
    const response = await client.post<never, string>('/auth/login', {
      username,
      password,
    });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logout = async () => {
  try {
    const response = await client.get('/auth/logout');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
