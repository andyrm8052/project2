import React from 'react';
import "../css/style.css";

const TaskList = props => {
        return (
            <li className="list-group-item">
                    { props.task.title }
            </li>
        )
};

const TaskStatus = props => {
    return (
        <li className="list-group-item">
            { props.task.column }
        </li>
    )
};

const TaskType = props => {
    return (
        <li className="list-group-item">
            { props.task.type }
        </li>
    )
};

class Page2 extends React.Component {

    render() {
        const taskList = this.props.tasks.map(task => {
            return <TaskList task={task} key={task.id}/>
        });

        const taskStatus = this.props.tasks.map(task => {
            return <TaskStatus task={task} key={task.id}/>
        });

        const taskType = this.props.tasks.map(task => {
            return <TaskType task={task} key={task.id}/>
        });

        return (
            <table className="taskTable">
                    <tr>
                        <th className="taskTitle">Title</th>
                        <th className="taskStatus">Status</th>
                        <th className="taskType">Type</th>
                    </tr>
                    <tr>
                        <td className="task-list list-group one">
                            { taskList }
                        </td>
                        <td className="task-list list-group two">
                            { taskStatus }
                        </td>
                        <td className="task-list list-group three">
                            { taskType }
                        </td>
                    </tr>
            </table>
        )
    }
}

export default Page2;
