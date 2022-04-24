import React from 'react';
import "../css/style.css";
import "../js/script";
import "./TaskStatus";

const ToDoList = props => {
    if (props.task.column === 'todo') {
        return (
            <li className="list-group-item" id="todoTaskID" draggable="true">
                <div>
                    {props.task.title}
                </div>
            </li>
        )
    }
};

const InProgressList = props => {
    if (props.task.column === 'in-progress') {
        return (
            <li className="list-group-item" id="inProgressID" draggable="true">
                <div>
                    {props.task.title}
                </div>
            </li>
        )
    }
};

const ReviewList = props => {
    if (props.task.column === 'review') {
        return (
            <li className="list-group-item" id="reviewID" draggable="true">
                <div>
                    {props.task.title}
                </div>
            </li>
        )
    }
};

const DoneList = props => {
    if (props.task.column === 'done') {
        return (
            <li className="list-group-item" id="doneID" draggable="true">
                <div>
                    {props.task.title}
                </div>
            </li>
        )
    }
};


class Page1 extends React.Component {
    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        this.props.onUpdateTaskList(taskList);
    }

    render() {
        const taskList = this.props.tasks.map(task => {
            return <ToDoList task={task} key={task.id} markDone={this.markDone}/>
        });
        const inProgressList = this.props.tasks.map(task => {
            return <InProgressList task={task} key={task.id} markDone={this.markDone}/>
        });
        const reviewList = this.props.tasks.map(task => {
            return <ReviewList task={task} key={task.id} markDone={this.markDone}/>
        });
        const doneList = this.props.tasks.map(task => {
            return <DoneList task={task} key={task.id} markDone={this.markDone}/>
        });

        return (
            <div className="page-one">
                <div className="wrapper">
                    <div className="tasks" id="tasks">
                        <div className="task_toDo" id="toDoTasks">To Do
                            <div className="taskItem_toDo" id="toDo_tasks">
                                { taskList }
                            </div>
                        </div>

                        <div className="task_toDo" id="inProgress_tasks">In Progress
                            <div className="taskItem_inProgress" id="in_progress">
                                { inProgressList }
                            </div>
                        </div>

                        <div className="task_toDo" id="review_tasks">Review
                            <div className="taskItem_review" id="review">
                                { reviewList }
                            </div>
                        </div>

                        <div className="task_toDo" id="done_tasks">Done
                            <div className="taskItem_done" id="done">
                                { doneList }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page1;
