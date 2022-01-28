const list = {};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = 'To Do';
}

function deleteTask(task) {
  if (task in list) {
    delete list[task];
  }
}

function outputFormatter(status) {
  console.log(`${status}:`);
  let counter = 0;
  for (let key in list) {
    if (list[key] === status) {
      console.log(`  "${key}"`);
      counter++;
    }
  }
  if (counter === 0) {
    console.log('  -');
  }
}

function showList() {
  outputFormatter('To Do');
  outputFormatter('In Progress');
  outputFormatter('Done');
}

changeStatus('freak out', 'Done');
addTask('have a walk');
deleteTask('have a walk');
showList();
console.log('\n');
deleteTask('freak out');
addTask('create a new practice task');
addTask('make a bed');
addTask('write a post');
changeStatus('write a post', 'In Progress');
showList();
