import axios from 'axios';

const endpoint = 'http://192.168.0.2:3000/api';

class ApiService {
  constructor() {
    console.log('[Api Service] constructor');
  }

  getTodos() {
    return axios.get(`${endpoint}/todos`);
  }

}

export const apiService = new ApiService();