const chalk = require("chalk");
const { getPromise } = require("./utils");
console.log("app is loading....");

async function getTodos(ids) {
  let todos , promises = [];
  
  ids.forEach(async (id) => {
    promises.push(getPromise(id));
  });

  // --- wait here for all to finish
  const responses = await Promise.all(promises);
  todos = responses.map(res => res.data)

  return todos;
}

async function run(){
  const todos = await getTodos([2, 4, 7]);
  console.log(todos);
  console.log(chalk.green("Done is expected to be last !!!"));
}

run();
