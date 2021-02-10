export enum UsersTypes {
  GET_USER = 'USER/GET_USER',
  SET_USER = 'USER/SET_USER',
  RESET_USER = 'USER/RESET_USER',
  UPDATE_PATH_USER = 'USER/UPDATE_PATH_USER',
}

export interface User {
  user: {
    id: number;
    username: string;
    name: string
    email: string;
  } | undefined,
  token: string;
};

export interface Login {
  email: string;
  password: string;
};

export interface UsersState {
  readonly data: User | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}