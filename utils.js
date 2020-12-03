const axios = require('axios')

function getPromise(id) {
    try {
      const res = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  module.exports = {getPromise}