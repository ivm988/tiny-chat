import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  render() {
    return (
        <div className="card-panel hoverable">
            <div className="row valign-wrapper">
              <div className="col s2">
                <strong>{this.props.message.username}</strong>
              </div>
              <div className="col s10">
                  {this.props.message.text}
              </div>
            </div>
        </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
};
