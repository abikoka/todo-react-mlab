import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super()
    const todos = [];
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;
    todos.push({
      id: countTodo,
      title: title,
      desc: description,
      done: false,
    })

    this.setState({todos})
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = '';
    e.target.description.value = '';

    console.log(todos)
  }

  render() {
    return (
      <div className="App">
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
