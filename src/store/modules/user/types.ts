export enum UsersTypes {
  GET_USER = 'USER/GET_USER',
  SET_USER = 'USER/SET_USER',
  RESET_USER = 'USER/RESET_USER',
  ERROR_LOGIN= 'ERROR_LOGIN',
  UPDATE_USER= 'UPDATE_USER',
}

export interface User {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  } | undefined,
  token: string;
};


export interface ProfileData {
    first_name: string;
    last_name: string;
    email: string; 
}

export interface Login {
  email: string;
  password: string;
};

export interface UsersState {
  readonly data: User | undefined;
  readonly profile_data: ProfileData | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}