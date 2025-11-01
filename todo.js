const fs = require("fs");

// take sample file
const filePath = "./tasks.json";

// create functions
const addTask = (task) => {
  // when adding a new task, 1st we load all the tasks in tasks.json file and
};

// how to grab user commands in node
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  // in command line user sends task number of the task that needed to be removed.
  // so we take that argument, it can be string / int / float anything.
  // so we convert it to int using parseInt
  removeTask(parseInt(argument));
} else {
  console.log("command not found");
}
