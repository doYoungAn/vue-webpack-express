import axios from 'axios';

const endpoint = 'http://192.168.0.2:3000/api';

class ApiService {
  constructor() {
    console.log('[Api Service] constructor');
  }

  getTodos() {
    return new Promise((resolve, reject) => {
      axios.get(`${endpoint}/todos`).then((res) => {
        console.log('get', res);
        resolve(res.data);
        console.log('is pass?')
      }).catch((err) => {
        reject();
      });
    });
  }

  addTodo(title, content) {
    return new Promise((resolve, reject) => {
      axios.post(`${endpoint}/todo`, {title: title, content: content}).then((res) => {
        resolve();
      }).catch((err) => {
        reject();
      });
    });
  }

}

export const apiService = new ApiService();