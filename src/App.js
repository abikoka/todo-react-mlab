import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

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
    const todos = []
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

    console.log(todos)
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
          <section id="t1">
            <div class="delete">
              <input type="button" value="削除" />
            </div>
            <div class="contents">
              <h3>Todo Title 1</h3>
              <p>
                Todo Description 1
              </p>
            </div>
          </section>
          <section id="t2">
            <div class="delete">
              <input type="button" value="削除" />
            </div>
            <div class="contents">
              <h3>Todo Title 2</h3>
              <p>
                Todo Description 2
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
