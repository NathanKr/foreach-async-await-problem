const axios = require('axios')

async function engine(id) {
    try {
      const res = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const { data } = await res;
      console.log(`data : ${JSON.stringify(data)}`);
    } catch (err) {
      console.error(err);
    }
  }

  module.exports = {engine}