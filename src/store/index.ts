import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { UsersState } from './modules/user/types';
import { ScreenState } from './modules/screen/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface ApplicationState {
  user: UsersState,
  screen: ScreenState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(rootSaga)

export default store;
