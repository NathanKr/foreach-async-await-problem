const chalk = require("chalk");
const {engine} = require('./utils')
console.log("app is loading....");


async function run(ids) {
  ids.forEach(async (id) => {
    await engine(id);
  });
}

run([ 2,4,7]);
console.log(chalk.red('Done is expected to be last !!!'));


