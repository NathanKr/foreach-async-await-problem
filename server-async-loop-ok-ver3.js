const chalk = require("chalk");
const { getPromise } = require("./utils");
console.log("app is loading....");

async function engine(ids) {
  let todos = [];
  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    const {data} = await getPromise(id);
    todos.push(data);
  }

  return todos;
}

async function run(){
  const array = await engine([2, 4, 7]);
  console.log(array);
  console.log(chalk.green("Done is expected to be last !!!"));
}

run();
