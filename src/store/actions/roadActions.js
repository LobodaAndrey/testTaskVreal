import {GET_ROADS, ADD_NEW_ROAD, REMOVE_ROAD, ADD_TO_FAVORITES} from '../../constants';

export const getRoads = (roads) => ({
  type: GET_ROADS
});

export const addRoad = () => ({
  type: ADD_NEW_ROAD
});

export const removeRoad = () => ({
  type: REMOVE_ROAD,
});

export const addToFavorites = (id, isFavorite) => ({
  type: ADD_TO_FAVORITES,
  id,
  isFavorite
});
