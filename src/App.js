import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    name: 'eat',
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list:list
    }
  }

  toggleAdded = taskId => {
    console.log("toggling task!", taskId);

    const updatedTodoList = this.state.list.map(task => {
      if (taskId === task.id) {
        return {...task, completed: !task.completed}
      }
      else {
        return task;
      }
    });
    console.log(updatedTodoList);
    this.setState({
      ...this.state,
      list: updatedTodoList
    });
  }

  addTask = (taskName) => {
   console.log("added todo to this awesome list:", taskName);
   this.setState({
     ...this.state,
     list: [
       ...this.state.list,
       {
         name: taskName,
         id: Date.now(),
         completed: false
       }
     ]
   })
  }

  clearList = () => {
    console.log("clearing tasks")
    this.setState({
      ...this.state,
      list: this.state.list.filter(task => !task.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Welcome to your Todo App!</h2> 
           <TodoForm addTask={this.addTask} />
         </div>
       <TodoList
          list={this.state.list}
          toggleAdded={this.toggleAdded}
          clearList={this.clearList}
       />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);