import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ViewTwo extends Component {

  // Returns to view one when clicked
  handleClick = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="view-two">
        <h1>You are currently on View Two</h1>
        <button onClick={this.handleClick}>Return to View One</button>
      </div>
    );
  }
}

export default withRouter(ViewTwo);
