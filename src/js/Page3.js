import React from 'react';
import "../css/style.css";

class Page3 extends React.Component {
    state = { newTask: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask);
        this.setState({ newTask: '' })
    }

    render() {
        return (
            <div className="page-three">
                <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                    <input type="text" className="form-control" placeholder="Enter New Task"
                           name="newTask"
                           value={this.state.newTask}
                           onChange={(e) => this.setState({newTask: e.target.value})}/>
                </form>

                <div className="inputType">
                    <select id="types">
                        <option value="taskType">task</option>
                        <option value="featureType">feature</option>
                        <option value="bugType">bug</option>
                    </select>
                    <h4>Press Enter to Submit</h4>
                </div>
            </div>
        );
    }
}

//<button className="submit">Submit</button>
//<div className="inputTitle">
//    <input className="title"/>
//</div>

export default Page3;




/*
import "../style2.css";
import "./java.js"

class index extends React.Component {
    render()
    {
        return (
            <div className="container">
                <div className="columns" id="columnsToSwitch">
                    <div className="column_one">
                        <div className="column1" id="column1_id">
                            <p>Column1</p>
                        </div>
                        <div className="switchToB" id="switchB">Switch to B</div>
                    </div>
                    <div className="column_two">
                        <div className="column2" id="column2_id">
                            <p>Column 2</p>
                        </div>
                        <div className="switchToA" id="switchA">Switch to A</div>
                    </div>
                </div>
                <div className="switch" id="switch_id">Switch</div>
                <script src="./java.js"/>
            </div>
        );
    }
}

export default index;
*/
