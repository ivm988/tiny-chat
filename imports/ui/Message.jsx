import React, { Component, PropTypes } from 'react';


export default class Message extends Component {
  render() {
    return (
        <div className="card-panel">{this.props.message.text}</div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
};
