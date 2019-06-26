import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {addRoad} from '../store/actions/roadActions';

class AddRoad extends Component {
  state = {
    title: '',
    shortDescription: '',
    fullDescription: ''
  }

  titleRef = React.createRef();
  shortDescRef = React.createRef();
  fullDescRef = React.createRef();

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault()

  }


  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Form>
            <Form.Group controlId="ControlInput1">
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
            <br />
            <Button variant="primary" type="submit">
              Add path
        </Button>
          </Form>
        </div>
        <div className="col-md-6">
          Google map
        </div>
      </div>
    );
  }
}


const mapStateToProps = store => {
  return {
    roads: store.roads
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRoadAction: (id, title, shortDescription, fullDescription, isFavorite) => dispatch(addRoad(id, title, shortDescription, fullDescription, isFavorite))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoad)


