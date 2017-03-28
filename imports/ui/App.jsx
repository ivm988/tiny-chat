import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import Message from './Message.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {

    renderMessages() {
        return this.props.messages.map((message) => (
            <Message key={message._id} message={message} />
        ));
    }

    handleSubmit(event) {
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call('messages.insert', text);

        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

  render() {
    return (
        <div className="wrapper">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col m8">
                            <h1>Tiny Chat (:</h1>
                        </div>
                        <div className="col m4">
                            <AccountsUIWrapper />
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
            {this.props.currentUser ?
            <footer className="page-footer amber lighten-5">
                <div className="container">
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea ref="textInput" id="icon_prefix2" className="materialize-textarea"></textarea>
                                    <label htmlFor="icon_prefix2" className="">Message</label>
                                </div>
                                <div className="col s12 right-align">
                                    <button className="btn waves-effect waves-light">Send
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </footer> : ''
            }
        </div>
    );
  }
}

App.propTypes = {
    messages: PropTypes.array.isRequired,
    currentUser: PropTypes.object
};

export default createContainer(() => {
    return {
        messages: Messages.find({}).fetch(),
        currentUser: Meteor.user()
    };
}, App);
