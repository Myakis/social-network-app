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
  setAuth() {
    return instanceAxios.get(`auth/me`);
  },
  getProfile(id) {
    return profileAPI.getProfile(id);
  },
};
export const profileAPI = {
  getProfile(id) {
    return instanceAxios.get(`profile/${id}`);
  },
  getStatus(id) {
    return instanceAxios.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instanceAxios.put(`profile/status`, { status });
  },
};
