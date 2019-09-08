import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Todo Sample by React with mLab.</h2>
      </header>
      <div class="todo-add">
        <Form></Form>
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

export default App;
