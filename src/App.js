import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import {addRoad, removeRoad, getRoads, addToFavorites} from './store/actions/roadActions'

import Header from './components/header';
import RoadList from './components/roadsList';
import Details from './components/details';

function App({getRoadsAction, addRoadAction, removeRoadAction, AddToFavoritesAction}) {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-6">
          <RoadList getRoads={getRoadsAction} addRoad={addRoadAction} removeRoad={removeRoadAction} />
        </div>
        <div className="col-md-6">
          {<Details addToFavorites={AddToFavoritesAction}/>}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    roads: store.roads
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRoadsAction: roads => dispatch(getRoads(roads)),
    addRoadAction: (id, title, description, isFavorite) => dispatch(addRoad(id, title, description, isFavorite)),
    removeRoadAction: (id) => dispatch(removeRoad(id)),
    AddToFavoritesAction: (id, isFavorite) => dispatch(addToFavorites(id, isFavorite))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

