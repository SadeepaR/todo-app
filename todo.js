const { log } = require("console");
const fs = require("fs");

// take sample file
const filePath = "./tasks.json";

// create functions
const loadTasks = () => {
  // read a file - use try catch
  try {
    const dataBuffer = fs.readFileSync(filePath); // reafFileSync() return a databuffer and later we have to convert it

    const intermediateDataJSON = dataBuffer.toString(); // this is dataJSON format, it is not regular JSON object.
    // then we have to convert it to regular JSON object

    return JSON.parse(intermediateDataJSON); //parse() method convert any format to JSON
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasksList) => {
  // write to file
  const dataJSON = JSON.stringify(tasksList); // convert to JSON string
  fs.writeFileSync(filePath, dataJSON); // write to file
};

const addTask = (task) => {
  // when adding a new task, 1st we load all the tasks in tasks.json file and save that to array
  // then append new task to that array.
  const tasksArray = loadTasks();
  tasksArray.push(task); //tasksArray is an array and push to that array

  // then save new tasks list to file
  saveTasks(tasksArray);
  console.log("Task added ", task);
};

const listTasks = () => {
  const tasksList = loadTasks();

  tasksList.forEach((task, index) => {
    console.log(index + 1, " => ", task);
  });
};

const removeTask = (taskIndex) => {
  const indexOfTask = taskIndex - 1;
  const tasksArray = loadTasks();

  tasksArray.splice(indexOfTask, 1);

  saveTasks(tasksArray);
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
