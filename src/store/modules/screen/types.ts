export enum ScreenTypes {
  GET_SCREENS = 'SCREEN/GET_SCREEN',
  SET_SCREEN_PAYMENT = 'SCREEN/SET_SCREEN_PAYMENT',
  RESET_SCREEN = 'SCREEN/RESET_SCREEN',
  UPDATE_SCREEN_PAYMENT= 'SCREEN/UPDATE_SCREEN_PAYMENT',
}


export enum paymentPage {
  Boleto,
  Cartao
}



export interface ScreenState {
  readonly payment: paymentPage;
  readonly loading: boolean;
  readonly error: boolean;
}