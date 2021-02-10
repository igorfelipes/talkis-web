import { all, takeLatest} from 'redux-saga/effects'


export default function* rootSaga(){
  return yield all([
    // takeLatest(UsersTypes.GET_USER, getUserSaga),
  ])
} 