import { combineReducers } from 'redux';

import user from './user/reducer';
import screen from './screen/reducer';

export default combineReducers({
  user, 
  screen,
});