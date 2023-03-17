
export interface AuthState {
    isLoggedIn: boolean;
    

    errorMessage?: string;
}
  

  
interface LoginAction {
    type: 'LOGIN';
}
  
interface LogoutAction {
    type: 'LOGOUT';
}
  
interface SetErrorAction {
    type: 'SET_ERROR';
    payload: string;
}

interface SetSUCESSAction{
    type: 'SET_SUCESS';
    payload: string; 
}
  
export type AuthAction = LoginAction | LogoutAction | SetErrorAction | SetSUCESSAction;
  
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          isLoggedIn: false,
        };
      case 'SET_ERROR':
        return {
          isLoggedIn: false,
          errorMessage: action.payload,
        };
        case 'SET_SUCESS':
        return {
          isLoggedIn: true,
          
        };
      

      default:
        return state;
    }
};
  