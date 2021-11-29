import React from 'react';

class TodoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }


    handleChanges = e => {
        console.log('working', e.target.value)
        this.setState({
            ...this.state,
            newTask: e.target.value
        });
    };
    
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
    };

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="task"
                defaultValue={this.state.newTask}
                onChange={this.handleChanges}
            />
            <button>Add</button>
           </form> 
        );
    }
}
export default TodoForm;