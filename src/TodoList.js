import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        title={todo.title}
        desc={todo.desc}
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
