import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addRoad, removeRoad, getRoads, addToFavorites } from './store/actions/roadActions'

import Header from './components/header';
import RoadList from './components/roadsList';

function App({ getRoadsAction, addRoadAction, removeRoadAction, AddToFavoritesAction }) {
  return (
    <div className="App">
      <Header addRoad={addRoadAction}/>
      <RoadList addToFavorites={AddToFavoritesAction} removeRoad={removeRoadAction} getRoads={getRoadsAction} addRoad={addRoadAction}/>
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
    addRoadAction: (id, title, shortDescription, fullDescription, isFavorite) => dispatch(addRoad(id, title, shortDescription, fullDescription, isFavorite)),
    removeRoadAction: (id) => dispatch(removeRoad(id)),
    AddToFavoritesAction: (id, isFavorite) => dispatch(addToFavorites(id, isFavorite))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

