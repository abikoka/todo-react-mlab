import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    const className = 'undone';
    const link = this.props.done ? '元に戻す' : '完了';

    return(
      <section class="row" id="t{this.props.id}">
        <div class="delete">
          <input type="button" value="削除" />
          <br />
          <p class="[className}">{link}</p>
        </div>
        <div class="contents">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
      </section>
    );
  }
}

export default Todo;
