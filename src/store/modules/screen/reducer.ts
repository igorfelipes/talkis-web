import { Reducer } from 'redux';
import { ScreenState, ScreenTypes, paymentPage  } from './types';


const INITIAL_STATE: ScreenState = {
  payment: paymentPage.Cartao, 
  loading: false,
  error: false,
}


const reducer: Reducer<ScreenState> = ( state = INITIAL_STATE, action): ScreenState=> {
  switch(action.type){
    case ScreenTypes.SET_SCREEN_PAYMENT:
      let { paymentOption } = action.payload;
      return { ...state,  payment: paymentOption};
    case ScreenTypes.GET_SCREENS:
      console.log('REDUCER - GET_SCREEN', state)
      return { ...state }; 

    case ScreenTypes.UPDATE_SCREEN_PAYMENT:
      console.log('REDUCER - UPDATE_SCREEN', state)
      let { newPaymentOption } = action.payload;
      return { ...state, payment: newPaymentOption }; 
    
      
    default:
      return {...state }
  }
}


export default reducer;