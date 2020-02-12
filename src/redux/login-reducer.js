import {stopSubmit, change} from "redux-form";
import {authAPI, registartionAPI} from "../api/api";
import {Router} from 'react-router-dom';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_LOADING = 'SET_IS_LOADING';
const TOOGLE_REGISRTATION_WINDOW = 'TOOGLE_REGISRTATION_WINDOW';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DAT';
const SET_LOGIN_REDIRECT = 'SET_LOGIN_REDIRECT';
const SET_USER_LOGIN = "SET_USER_LOGIN";

let initialState = {
    isLoading: false,
    toggleRegistrationWindow: false,
    isAuth: false,
    token: null,
    loginRedirect: false,
    login: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_USER_LOGIN: {
            return {
                ...state,
                login: action.login
            }
        }
        case SET_LOGIN_REDIRECT: {

            return {
                ...state,
                loginRedirect: action.isRedirect
            }
        }
        case TOOGLE_REGISRTATION_WINDOW: {
            return {
                ...state,
                toggleRegistrationWindow: !state.toggleRegistrationWindow
            }
        }
        case SET_AUTH_USER_DATA: {

            return {
                ...state,
                token: action.payload.token,
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (token, isAuth) => ({
    type: SET_AUTH_USER_DATA, payload:
        {token, isAuth}
});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const toggleRegistrationWindowAction = () => ({type: TOOGLE_REGISRTATION_WINDOW});
export const setLoginRedirect = (isRedirect) => ({type: SET_LOGIN_REDIRECT, isRedirect});
export const setUserLogin = (login) => ({type: SET_USER_LOGIN, login});

export const login = (login, password) => {

    return (dispatch) => {
        dispatch(setIsLoading(true));
        authAPI.login(login, password).then(response => {
            dispatch(setIsLoading(false));
            console.log(response);
            if (response.data.success === false) {
                dispatch(stopSubmit("login", {_error: 'Логин или пароль введены неверно'}))
            } else {
                console.log(response.data.token);
                dispatch(setAuthUserData(response.data.token, true));
                dispatch(setUserLogin(response.data.login));
            }

            // } else if (response.data.status === "err") {
            //     if (response.data.message === 'wrong_email_or_password') {
            //         dispatch(change('login', 'password', ''))
            //         dispatch(stopSubmit("login", {_error: 'Имя пользователя или пароль введены не верно.'}));
            //     }
            // } else if (response.status === 500 || response.status === 502 || response.status === 503) {
            //     dispatch(stopSubmit("login", {_error: 'Сервер не доступен.'}))
            // }
        })
    }
}

export const registration = (login, email, password,) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        registartionAPI.register(login, email, password).then(response => {
            dispatch(setIsLoading(false));
            console.log(response);
            if (response.data.success === true) {
                console.log("Registation success")
                dispatch(toggleRegistrationWindowAction());
            } else if (response.data.success === false) {
                console.log("Ошибка");
                dispatch(change('registration', 'login', ''));
                dispatch(change('registration', 'email', ''));
                dispatch(change('registration', 'password', ''));
                dispatch(change('registration', 'mPassword', ''));
                dispatch(stopSubmit("registration", {_error: 'Такой пользователь уже зарегистрирован.'}));
                setTimeout(() => {
                    dispatch(toggleRegistrationWindowAction());
                }, 2000);
            }
        })
    }
}

export default loginReducer;