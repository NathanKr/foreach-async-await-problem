const chalk = require("chalk");
const { getPromise } = require("./utils");
console.log("app is loading....");

async function engine(ids) {
  const promiseArray = [];
  ids.forEach(id => {
    promiseArray.push(getPromise(id));
  });
  return Promise.all(promiseArray);
}

async function run(){
  const responses = await engine([2, 4, 7]);
  responses.forEach(res => {
    console.log(res.data);
  });
  console.log(chalk.green("Done is expected to be last !!!"));
}

run();