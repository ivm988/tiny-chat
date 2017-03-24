import React, { Component } from 'react';

import Message from './Message.jsx';

export default class App extends Component {

    getMessages() {
    return [
      { _id: 1, text: 'This is message 1' },
      { _id: 2, text: 'This is message 2' },
      { _id: 3, text: 'This is message 3' },
    ];
  }

  renderMessages() {
    return this.getMessages().map((message) => (
      <Message key={message._id} message={message} />
    ));
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col m12">
                  <h1>Tiny Chat (:</h1>
              </div>
          </div>
          <div className="row">
              {this.renderMessages()}
          </div>
      </div>
    );
  }
}
