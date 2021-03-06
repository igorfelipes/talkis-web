import { Reducer } from 'redux';
import { UsersState, UsersTypes  } from './types';


const INITIAL_STATE: UsersState = {
  data: undefined,
  profile_data: undefined,
  loading: false,
  error: false,
}


const reducer: Reducer<UsersState> = ( state = INITIAL_STATE, action): UsersState=> {
  switch(action.type){
    case UsersTypes.SET_USER:
      console.log('REDUCER - SET_USER')
      let { data } = action.payload;
      return { ...state, data: data, profile_data: data.user };
    case UsersTypes.GET_USER:
      console.log('REDUCER - GET_USER', state)
      return { ...state }; 

    case UsersTypes.UPDATE_USER:
      console.log('REDUCER - UPDATE_USER', state)
      return { ...state, profile_data: action.payload.data }; 
    
    case UsersTypes.ERROR_LOGIN:
      console.log('REDUCER - ERROR_LOGIN', state)
      return { 
        data: undefined,
        profile_data: undefined,
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