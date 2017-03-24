import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import Message from './Message.jsx';

class App extends Component {

  renderMessages() {
    return this.props.messages.map((message) => (
      <Message key={message._id} message={message} />
    ));
  }

  render() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col m12">
                            <h1>Tiny Chat (:</h1>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        {this.renderMessages()}
                    </div>
                </div>
            </main>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col m12">

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
}

App.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        messages: Messages.find({}).fetch()
    };
}, App);
