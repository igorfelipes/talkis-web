import { Reducer } from 'redux';
import { UsersState, UsersTypes  } from './types';


const INITIAL_STATE: UsersState = {
  data: undefined,
  loading: false,
  error: false,
}


const reducer: Reducer<UsersState> = ( state = INITIAL_STATE, action): UsersState=> {
  switch(action.type){
    case UsersTypes.SET_USER:
      console.log('REDUCER - SET_USER')
      let { data } = action.payload
      return { ...state, data: data };
    case UsersTypes.GET_USER:
      console.log('REDUCER - GET_USER', state)
      return { ...state }; 
    
    case UsersTypes.ERROR_LOGIN:
      console.log('REDUCER - ERROR_LOGIN', state)
      return { 
        data: undefined,
        error: true,
        loading:false,
      };

    case UsersTypes.RESET_USER:
      console.log('REDUCER - RESET_USER')
      return { 
        ...state,
        data: undefined,
        error: false,
        loading:false,
      };
      
    default:
      return {...state }
  }
}


export default reducer;