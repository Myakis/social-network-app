import axios from 'axios';
const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ed0127cc-e53e-4779-b436-6cd965e8ebe0',
  },
});

export const userAPI = {
  getUser(currentPage = 1, usersCount = 5) {
    return instanceAxios.get(`users?page=${currentPage}&count=${usersCount}`);
  },
  follow(id) {
    return instanceAxios.post(`follow/${id}`, {});
  },
  unFollow(id) {
    return instanceAxios.delete(`follow/${id}`);
  },
  getProfile(id) {
    return instanceAxios.get(`profile/${id}`);
  },
  setAuth() {
    return instanceAxios.get(`auth/me`);
  },
};
