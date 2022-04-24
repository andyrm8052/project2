import React from 'react';
import axios from 'axios';

import PageTabs from './js/PageTabs';

import Page1 from './js/Page1';
import Page2 from './js/Page2';
import Page3 from './js/Page3';

class App extends React.Component {
    state = {
        view: 'page1',
        tasks: [],
    }

    componentDidMount() {
        this.getData();
    }

    getData(){
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    onUpdateTaskList = (newTaskList) => {
        this.setState({ task: newTaskList});
    }

    onViewChange(view) {
        this.setState({view});
    }

    onAddTask = (taskName) => {
        const el = document.getElementById("types");
        const option = el.value;
        let taskType = '';
        if (option === 'taskType'){
            taskType = 'task'
        }
        else if (option === 'bugType'){
            taskType = 'bug'
        }
        else{
            taskType = 'feature'
        }
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type: taskType,
            column: 'todo'
        });
        this.setState({ tasks });
    }

    wrapPage(jsx) {
        const {view} = this.state;
        return (
            <div className="container">
                <hr/>
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                <hr/>
                 {jsx}
            </div>
        );
    }

    render() {
        const {view} = this.state;

        if (view === 'page1') {
            return (this.wrapPage(
                <div className="container">
                    <h2>Task Board</h2>
                    <Page1 tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}
                           onSubmit={this.onAddTask} />
                </div>
            ));
        } else if (view === 'page2') {
            return (this.wrapPage(
                <div className="container">
                    <h2>Task List</h2>
                    <Page2 tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
                </div>
            ));
        } else if (view === 'page3') {
            return (this.wrapPage(
                <div className="container">
                    <h2>Add Task</h2>
                    <Page3 onSubmit={this.onAddTask} />
                </div>
            ));
        }
    }
}

export default App;
