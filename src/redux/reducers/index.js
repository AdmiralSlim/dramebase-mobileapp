import { combineReducers } from 'redux';
import Users from '../users/user.reducer';
import Global from '../global/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    Users,
    Global,
  });

  return rootReducer;
}
