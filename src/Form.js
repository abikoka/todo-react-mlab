import React, { Component } from 'react'
// import './form.css'

class Form extends Component {
  render() {
    return (
      <div>
        <input name="title" type="text" placeholder="Todoタイトルの入力" defalutvalue="nanyakanya" />
        <input name="description" type="text" placeholder="備考の入力" defalutvalue="hogehogefuge" />
        <input type="submit" value="追加" />
      </div>
    )
  }
}

export default Form
