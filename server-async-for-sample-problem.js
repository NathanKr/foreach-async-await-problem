const chalk = require("chalk");
const { getPromise } = require("./utils");
console.log("app is loading....");

async function run(ids) {
  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    const {data} = await getPromise(id);
    console.log(data);
  }
}

run([2, 4, 7]);
console.log(chalk.red("Done is expected to be last !!!"));
