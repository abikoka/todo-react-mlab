import React, { Component } from 'react';

import axios from 'axios';
import config from './config/config';
import './Todo.css';

class Todo extends Component {

  get(apiEndpoint) {
    return axios.get(config.baseUrl+apiEndpoint+'?'+config.apiKeyParam)
      .then((response)=> {
        return response;
      }).catch((err) => {
        console.log(err);
      })
    ;
  }

  /**
   * ex. apiEndpoint: /databases/{database}/collections/{collection}
   */
  post(apiEndpoint, payload) {
    return axios.post(config.baseUrl+apiEndpoint+'?'+config.apiKeyParam,payload)
      .then((response) => {
          return response;
      }).catch((err) => {
        console.log(err);
      })
    ;
  }

  put(apiEndpoint, id, payload) {
    const idParam = this.makeIdParam(id);
    return axios.put(config.baseUrl+apiEndpoint+'?'+idParam+'&'+config.apiKeyParam, payload)
      .then((response) => {
        return response;
      })
      .catch((err)=> {
        console.log(err);
      })
    ;
  }

  deleteDetail(apiEndpoint, id) {
    const idParam = this.makeIdParam(id);
    return axios.delete(config.baseUrl+apiEndpoint+'?'+idParam+'&'+config.apiKeyParam)
      .then((response) => {
        return response;
      })
      .catch((err)=> {
        console.log(err);
      })
    ;
  }

  makeIdParam(id) {
    return "q=" + encodeURIComponent('{"_id":{"$oid":"'+id+'"}}');
  }

  render() {
    const className = 'contents undone';
    const rowClass = (this.props.done? ' completed': '');
    const link = this.props.done ? '差し戻し' : '完了へ';
    const dataId = "t" + this.props.id;

    return (
          <section class={rowClass} id={dataId}>
            <div class="delete">
              <input type="button" value="削除"
                onClick={(e) => { e.preventDefault(); this.props.removeTodo(this.props)}}
                />
            </div>
            <div class={className}>
              <input type="button"
                onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}
                value={link} />
              <h3>{this.props.title}</h3>
              <p>
               {this.props.desc}
              </p>
            </div>
          </section>
    );
  }
}

export default Todo;
