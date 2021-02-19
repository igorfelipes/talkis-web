import { action } from 'typesafe-actions';
import { paymentPage, ScreenTypes} from "./types";


export const setPaymentOption = (paymentOption: paymentPage ) => action(ScreenTypes.SET_SCREEN_PAYMENT,  { paymentOption });
export const updatePaymentOption = (newPaymentOption: paymentPage) => action(ScreenTypes.UPDATE_SCREEN_PAYMENT,  { newPaymentOption });
export const getScreens = () => action(ScreenTypes.GET_SCREENS);
