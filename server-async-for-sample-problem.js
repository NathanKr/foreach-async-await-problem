const chalk = require("chalk");
const { engine } = require("./utils");
console.log("app is loading....");

async function run(ids) {
  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    await engine(id);
  }
}

run([2, 4, 7]);
console.log(chalk.red("Done is expected to be last !!!"));
