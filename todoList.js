const list = [];
const STATUS = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
};

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
};

const DEFAULT_STATUS = STATUS.TO_DO;
const DEFAULT_PRIORITY = PRIORITY.HIGH;

function addTask(taskName) {
  for (let task of list) {
    if (task.name === taskName) {
      return;
    }
  }
  let newTask = {};
  newTask.name = taskName;
  newTask.status = DEFAULT_STATUS;
  newTask.priority = DEFAULT_PRIORITY;
  list.push(newTask);
}

function changeStatus(taskName, status) {
  for (let task of list) {
    if (task.name === taskName) {
      task.status = status;
      return;
    }
  }
  addTask(taskName);
  return changeStatus(taskName, status);
}

function changePriority(taskName, priority) {
  for (let task of list) {
    if (task.name === taskName) {
      task.priority = priority;
      return;
    }
  }
  addTask(taskName);
  return changePriority(taskName, priority);
}

function deleteTask(taskName) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === taskName) {
      list.splice(i, 1);
    }
  }
}

function outputFormatter(object, view) {
  for (let property in object) {
    console.log(`${object[property]}:`);
    let counter = 0;
    for (let task of list) {
      if (task[view] === object[property]) {
        console.log(`  "${task.name}"`);
        counter++;
      }
    }
    if (counter === 0) {
      console.log('  -');
    }
  }
}

function showBy(view) {
  if (view === 'status') {
    outputFormatter(STATUS, view);
  } else if (view === 'priority') {
    outputFormatter(PRIORITY, view);
  }
}

// tests
changeStatus('freak out', 'Done');
addTask('have a walk');
deleteTask('have a walk');
showBy('status');
console.log('\n');
deleteTask('freak out');
addTask('create a new practice task');
addTask('make a bed');
addTask('write a post');
changeStatus('write a post', 'In Progress');
changePriority('write a post', 'low');
showBy('status');
console.log('\n');
showBy('priority');
for (let item of list) {
  console.log(item);
}
