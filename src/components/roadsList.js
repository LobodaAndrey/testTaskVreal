import React, { Component } from 'react';
import './roadList.scss';
import Details from '../components/details';
import * as data from '../data.json';
// import axios from 'axios';

class RoadsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roads: data.default.roads,
      info: {}
    }
  }

  // componentDidMount() {
  //   axios.get('https://roads-app.firebaseio.com/roads.json')
  //   .then(function (response) {
  //     // handle success
  //     const dataa = response.data;
  //     console.log(response.data);
  //     return dataa
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });
  // }

 
  switchActiveRoad = (el) => {
    this.setState({
      info: el
    })
  }

  render() {
    const { roads } = this.state;
    const { addToFavorites, removeRoad} = this.props

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-7">
            <input className="search-input" type="search" name="search" id="" placeholder="Search..." />
            <ul>
              {roads.map((el) => (
                <li onClick={() => {this.switchActiveRoad(el)}} key={el.title + el.shortDescription} className={el.isActive ? "active road-item" : "road-item"}>
                  <div className="road-icon">
                    <i className="fas fa-arrows-alt"></i>
                  </div>
                  <div className="road-info">
                    <div className="road-title">
                      {el.isFavorite && <i className="fas fa-star favorite"></i>}
                      <h3>{el.title}</h3>
                    </div>
                    <p>{el.shortDescription = el.shortDescription.substr(0, 80)}</p>
                  </div>
                  <div className="path-length">
                    {el.length}
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-5">
            {<Details addToFavorites={addToFavorites} removeRoad={removeRoad} info={this.state.info}/>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RoadsList;