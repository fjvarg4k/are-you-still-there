import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  render() {
    return this.props.open ? (
      <div className="modal-content">
        <h1>Are you still there?</h1>
        <button onClick={() => this.props.onClose()}>I'm still here</button>
      </div>
    ) : null;
  }
}

export default Modal;
