import React, {Component} from 'react';
// import GoogleMapReact from 'google-map-react';

class Details extends Component {
  state = {
    roads: {
        id: 2,
        title: 'Title 2',
        isFavorite: true,
        length: 1.27,
        shortDescription: 'Short description Lorem ipsum',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
        path: '',
      }
  }
  

  render() {
    const {roads} = this.state
    return (
      <React.Fragment>
        <div className="road-info">
          <h3>{roads.title}</h3>
          <span>{roads.length}</span>
        </div>
        <div className="road-description">
          <p>{roads.description}</p>
        </div>
        <div className="google-img">
        <div>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 0 }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact> */}
        <p>Google img here</p>
      </div>
        </div>
        <div className="btn-group">
          <div className="add-to-fav">
            <button onClick={this.props.addToFavorites}>Add to favorites</button>
          </div>
          <div className="remove">
            <button>Remove</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
