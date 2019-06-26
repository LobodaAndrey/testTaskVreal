import { createStore, applyMiddleware} from 'redux';
import { rootReducer} from '../store/reducers/rootReducer';
import { logger } from '../utils/logger';


export const store = createStore(rootReducer, applyMiddleware(logger))