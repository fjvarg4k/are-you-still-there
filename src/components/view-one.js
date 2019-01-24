import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Modal from './modal';

class ViewOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      inactiveUser: false
    };

    this.startPeriodicRefresh = this.startPeriodicRefresh.bind(this);
    this.startInactiveCheck = this.startInactiveCheck.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.startPeriodicRefresh();
  }

  componentDidUpdate() {
    // When component updates, if modal is present,
    // check for inactivity. Otherwise, display modal again
    // after set time and clear inactivity check timer
    if (!this.state.showModal) {
      this.startPeriodicRefresh();
      clearTimeout(this.inactiveCheck);
    } else if (this.state.showModal) {
      this.startInactiveCheck();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.refreshInterval);
  }

  // Modal appears after 10 second delay
  startPeriodicRefresh() {
    this.refreshInterval = setTimeout(() =>
      this.setState({
        showModal: true
      }),
      5000
    );
  }

  // Checks if user is inactive after 5 seconds
  startInactiveCheck() {
    this.inactiveCheck = setTimeout(() =>
      this.setState({
        showModal: false,
        inactiveUser: true
      }),
      5000
    );
  }

  // If "I'm still here" button in modal is clicked,
  // remove modal
  handleClose() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const { showModal } = this.state;
    // If user is inactive, redirect to View Two
    if (this.state.inactiveUser) {
      return (<Redirect to="/view-two" />);
    }

    return (
      <div className="view-one">
        <h1>You are currently on View One</h1>
        <Modal
          open={showModal}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ViewOne;
