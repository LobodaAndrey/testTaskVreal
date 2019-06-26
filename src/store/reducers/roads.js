import { GET_ROADS, ADD_NEW_ROAD, REMOVE_ROAD, ADD_TO_FAVORITES } from '../../constants';

const initialState = {
  roads: []
}

export default function roadsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROADS:
      return {
        ...state,
        roads: action.roads
      };
    case ADD_NEW_ROAD:
      return {
        ...state
      };
    case REMOVE_ROAD:
      return {
        ...state
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,

      };
    default:
      return state
  }
}