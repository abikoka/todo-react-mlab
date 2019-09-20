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

  deleteDetail(apiEndpoint) {
    return axios.delete(config.baseURl+apiEndpoint+'?'+config.apiKeyParam)
      .then((response) => {
        return response;
      })
      .catch((err)=> {
        console.log(err);
      })
    ;
  }

  render() {
    const className = 'contents undone';
    const link = this.props.done ? '差し戻し' : '完了へ';
    const dataId = "t" + this.props.id;

    return (
          <section id={dataId}>
            <div class="delete">
              <input type="button" value="削除" />
            </div>
            <div class={className}>
              <input type="button" value={link} />
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
