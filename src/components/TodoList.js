// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo.js';

const TodoList = props => {

    return(
        <div className="todo-list">
            {props.list.map(task => (
                <Todo key={task.id} task={task} toggleAdded={props.toggleAdded} />
            ))}
            <button onClick={props.clearList} className="clear-btn">
                Clear Todo List
            </button>
        </div>
    );
};

export default TodoList;