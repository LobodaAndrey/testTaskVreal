import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './header.scss';
import AddRoad from './addRoad';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <header className="main-header">
          <h1>Saunter</h1>
          <Button variant="primary" onClick={this.handleShow}>
            Add new Road
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new road</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddRoad />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            </Modal.Footer>
          </Modal>
        </header>
      </>
    );
  }
}

export default Header;