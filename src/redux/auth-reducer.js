import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_AUTH = 'auth/SET_AUTH';
const LOGIN_WITH_TOKEN = 'auth/LOGIN_WITH_TOKEN';

let initialState = {
    login: null,
    token: null,
    correctLoginPass: false,
    isAuth: false, 
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case SET_AUTH:
        case LOGIN_WITH_TOKEN:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (login, correctLoginPass) => ({
    type: SET_USER_DATA,
    payload: { login, correctLoginPass }
});

export const setAuth = (isAuth, token) => ({
    type: SET_AUTH,
    payload: { isAuth, token }
});

export const loginWithTokenAC = (login, token) => ({
    type: LOGIN_WITH_TOKEN,
    payload: { token, login, isAuth: true, correctLoginPass: true }
});

export const login = (email, password) =>  (dispatch) => {
    if(email === "kode@kode.ru" && password === "Enk0deng"){
        dispatch(setAuthUserData(email, true));
    }  else {
        dispatch(stopSubmit('login', { _error: "Wrong login or password" }));
    }
}

export const confirmSMS = (SMSPassword) =>  (dispatch) => {
    if(SMSPassword === "123456" ){
        let token = localStorage.getItem('token');
        if(!token){
            token = Math.random().toString();
            localStorage.setItem('token', token);
        }
   
        dispatch(setAuth(true, token));

    }  else {
        dispatch(stopSubmit('OTP', { _error: "Wrong code from SMS" }));
        alert("Correct password is '123456'.");
    }
}

export const logout = () =>  (dispatch) =>  {
    dispatch(setAuthUserData(null, false));
    dispatch(setAuth(false, null));
    localStorage.removeItem('token');
}

export const loginWithToken = (token) => (dispatch) => {
    dispatch(loginWithTokenAC("kode@kode.ru", token));
}

export default authReducer;