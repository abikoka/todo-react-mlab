import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';
import TodoList from './TodoList';

import Todo from './Todo';

class App extends Component {
  constructor() {
    super()
    const todos = []
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const todos = this.state.todos;
    const countTodo = this.state.countTodo;

    let todo = {
      id: countTodo,
      title: title,
      desc: description,
      done: false,
    };
    let app = new Todo
    app.post('/databases/test2019-09-19/collections/todos', todo);
    todos.push(todo)

    this.setState({todos})
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = '';
    e.target.description.value = '';
  }

  componentDidMount() {
    const app = new Todo;
    app
      .get('/databases/test2019-09-19/collections/todos')
      .then((response) => {
        let countTodo = this.state.countTodo;
        const todos = response.data.map(data => {
            const todo = Object.assign({}, data, {id: data._id['$oid'], done: false});
            countTodo++
            return todo;
        });

        this.setState({todos, countTodo})
      })
    ;

  }

  render() {
    return (
      <div class="App">
        <header>
          <h2>Todo Sample by React with mLab.</h2>
        </header>
        <div class="todo-add">
          <form class="todo-add-form" onSubmit={this.handleSubmit.bind(this)}>
            <Form></Form>
          </form>
        </div>
        <div class="todo-list">
          <TodoList todos={this.state.todos}>
          </TodoList>
        </div>
      </div>
    );
  }
}

export default App;
