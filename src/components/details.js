import React, { Component } from 'react';
import { connect } from 'react-redux';
import './details.scss';
// import GoogleMapReact from 'google-map-react';

class Details extends Component {

  render() {
    const { info } = this.props;
    const { addToFavorites, removeRoad } = this.props;
    return (
      <React.Fragment>
        {this.props.info.title &&
          <div className="road-details">
            <div className="road-info">
              <h3>{info.title}</h3>
              {this.props.info.isFavorite && <i className="fas fa-star"></i>}
              <span>{info.length}</span>
            </div>
            <div className="road-description">
              <p>{info.fullDescription}</p>
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
                <button onClick={addToFavorites}>Add to favorites</button>
              </div>
              <div className="remove">
                <button onClick={removeRoad}>Remove</button>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    roads: store.roads
  }
}

export default connect(mapStateToProps)(Details);
