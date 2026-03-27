let taskList = [];


function createTask(task){
    var taskNo = taskList.length +1;
    taskList.push(taskNo + ". " + task);
    console.log(taskList);
}

function displayTask(){
    console.log("To Do: ");
    taskList.forEach(task => console.log(task));
}

function completedTask(taskNum){
  taskList[taskNum-1] = taskList[taskNum-1] + "✅"; 
  console.log(taskList);

}

function deleteTask(taskNum){
    console.log("Deleted task: "+ taskList[taskNum-1]);
    delete taskList[taskNum-1];
    console.log(taskList);
}

function deleteAllTask(){
  taskList.length=0;
  console.log("No tasks available");
}


createTask("Buy a new book");
createTask("Read it for 45mins");
//completedTask(1);
displayTask();
deleteAllTask();
displayTask();