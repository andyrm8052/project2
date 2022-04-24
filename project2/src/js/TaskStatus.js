import Page1 from "./Page1";
import React from "react";


export function TaskStatus(){

    const TaskList = props => {
        if (props.task.status === "todo") {
            const todoTask = props.task.status;
            console.log(todoTask);
        }
        return (
            <li className="list-group-item">
                <div>
                    { props.task.title }
                </div>
                <div className="taskItem_board">
                    <div>
                        ID: { props.task.id }
                    </div>
                    <div>
                        Type: { props.task.type }
                    </div>
                </div>
            </li>
        )
    };
}
