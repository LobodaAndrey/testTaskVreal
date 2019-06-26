import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addRoad } from '../store/actions/roadActions';

class AddRoad extends Component {
  state = {
    newRoad: {
      id: 0,
      title: '',
      shortDescription: '',
      fullDescription: '',
      isFavorite: false,
    }
  };

  titleRef = React.createRef();
  shortDescRef = React.createRef();
  fullDescRef = React.createRef();

  handleChange = () => {
    this.setState({
      newRoad: {
        id: Date.now(),
        title: this.titleRef.current.value,
        shortDescription: this.shortDescRef.current.value,
        fullDescription: this.fullDescRef.current.value
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Form >
            <Form.Group controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" ref={this.titleRef} value={this.state.shortDescription} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Short Description</Form.Label>
              <Form.Control as="textarea" rows="3" maxLength="160" value={this.state.title} ref={this.shortDescRef} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label>Full Desxcription</Form.Label>
              <Form.Control as="textarea" rows="3" value={this.state.fullDescription} ref={this.fullDescRef} onChange={this.handleChange}/>
            </Form.Group>
            <span>Length: 2.21</span>
            <br />
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                this.props.addRoad();
                console.log(this.state.newRoad);
              }}>
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
