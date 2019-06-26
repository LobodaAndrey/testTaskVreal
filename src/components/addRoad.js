import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddRoad extends Component {
  state = {}
  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <span>Length: 2.21</span>
        <br/>
        <Button variant="primary" type="submit">
          Add path
        </Button>
      </Form>
    );
  }
}

export default AddRoad;