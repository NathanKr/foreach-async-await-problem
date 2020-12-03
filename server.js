const axios = require("axios");
console.log("app is loading....");

async function run(ids) {
  ids.forEach(async (id) => {
    try {
      const res = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const { data } = await res;
      console.log(`data : ${JSON.stringify(data)}`);
    } catch (err) {
      console.error(err);
    }
  });
}

run([ 2,4,7]);
