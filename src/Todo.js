import { Component } from 'react';

import axios from 'axios';
import config from './config/config';

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

}

export default Todo;
