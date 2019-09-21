import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    //** 
    // key attribute is required, and don't extract value after.
    //**
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        desc={todo.desc}
        done={todo.done}
        setTodoStatus={this.props.setTodoStatus}
        >
      </Todo>
    )

    return(
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList
