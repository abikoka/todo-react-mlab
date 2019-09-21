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
      countTodo: todos.length,
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
      deleted_at: '',
    };
    let app = new Todo
    app.post('/databases/test2019-09-19/collections/todos', todo);
    todos.push(todo)

    this.setState({todos})
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = '';
    e.target.description.value = '';
  }

  setTodoStatus(clickTodo) {
    const newTodo = this.state.todos.filter(todo => todo.id === clickTodo.id).shift();
    newTodo.done = !newTodo.done;
    let payload = {
      id: undefined,
      title: newTodo.title,
      desc: newTodo.desc,
      done: newTodo.done,
      deleted_at: newTodo.deleted_at,
    };

    const app = new Todo;
    app.put('/databases/test2019-09-19/collections/todos', clickTodo.id, payload);
    
    const todos = this.state.todos.map(todo => Object.assign({}, todo.id === clickTodo.id? newTodo : todo));

    this.setState({ todos });
  }

  removeTodo(clickTodo) {
    // 削除時のアニメーションがほしい。
    const targetTodo = this.state.todos.filter(todo => todo.id === clickTodo.id).shift();

    const todos = this.state.todos.filter(todo => !(todo.id === clickTodo.id)).slice(); // 無理くりワンライン

    const app = new Todo;
    app.deleteDetail('/databases/test2019-09-19/collections/todos', clickTodo.id, targetTodo);
    
    this.setState({ todos });
    this.setState({ countTodo: this.state.countTodo - 1 })
  }

  componentDidMount() {
    const app = new Todo;
    app
      .get('/databases/test2019-09-19/collections/todos')
      .then((response) => {
        let countTodo = this.state.countTodo;
        const todos = response.data.map(data => {
            const todo = Object.assign({}, data, {id: data._id['$oid']});
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
          <p>全<span>{this.state.countTodo}</span>個</p>
          <TodoList
            todos={this.state.todos}
            setTodoStatus={this.setTodoStatus.bind(this)}
            removeTodo={this.removeTodo.bind(this)}
            >
          </TodoList>
        </div>
      </div>
    );
  }
}

export default App;
