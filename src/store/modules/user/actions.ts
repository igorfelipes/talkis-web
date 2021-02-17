import { action } from 'typesafe-actions';
import { ProfileData, User, UsersTypes} from "./types";


export const setUser = (data: (User | undefined)) => action(UsersTypes.SET_USER,  { data });
export const updateUser = (data: ProfileData) => action(UsersTypes.UPDATE_USER,  { data });
export const getUser = () => action(UsersTypes.GET_USER);
export const resetUser = () => action(UsersTypes.RESET_USER );
export const setErrorLogin = () => action(UsersTypes.ERROR_LOGIN );