import { combineReducers } from 'redux';
import roadsReducer  from './roads';

export const rootReducer = combineReducers({
  roads: roadsReducer,
})
