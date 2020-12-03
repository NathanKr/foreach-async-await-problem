<h2>Motivation</h2>
i was bitten few times by async\await inside loop so decided to show the problem and solution

<h2>Problem</h2>
i have a loop on axios.get and i want to console Done after i get all the responses, so i am using await on each axios.get.
This is not working -> check server-async-for-sample-problem.js and server-async-foreach-sample-problem.js

<h2>Solution</h2>
use Promise.all -> check server-async-loop-ok.js


