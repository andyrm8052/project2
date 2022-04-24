function startTask(){
    console.log(document.getElementById("todoTaskID"));
    const inProgress = document.getElementById("in_progress");
    const noStarted = document.getElementById("todoTaskID");
    inProgress.appendChild(noStarted);
}

function inProgressTask(){
    const reviewTask = document.getElementById("review");
    const inProgress = document.getElementById("inProgressID");
    reviewTask.appendChild(inProgress);
    document.getElementById("todoTaskID").setAttribute("id", "inProgressID");
}

function reviewTask(){
    const doneTask = document.getElementById("done");
    const review = document.getElementById("reviewID");
    doneTask.appendChild(review);
    document.getElementById("inProgressID").setAttribute("id", "reviewID");
}

function doneTask(){
    const todoTask = document.getElementById("toDo_tasks");
    const done = document.getElementById("doneID");
    todoTask.appendChild(done);
    document.getElementById("reviewID").setAttribute("id", "doneID");
    document.getElementById("doneID").setAttribute("id", "todoTaskID");
}

window.onload=function(){
    document.getElementById("toDo_tasks").addEventListener('click', startTask);
    document.getElementById("in_progress").addEventListener('click', inProgressTask);
    document.getElementById("review").addEventListener('click', reviewTask);
    document.getElementById("done").addEventListener('click', doneTask);
}
