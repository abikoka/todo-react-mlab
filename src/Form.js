import React, { Component } from 'react'
// import './form.css'

class Form extends Component {
  render() {
    return (
      <form class="todo-add-form">
        <input name="title" type="text" placeholder="Todoタイトルの入力" defalutValue="nanyakanya" />
        <input name="description" type="text" placeholder="備考の入力" defalutValue="hogehogefuge" />
        <input type="button" value="追加" />
      </form>
    )
  }
}

export default Form
