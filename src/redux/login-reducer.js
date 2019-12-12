const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = {
    isLoading: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}

export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});


// export const login = (email, password) => {
//
//     return (dispatch) => {
//         dispatch(setIsLoading(true));
//         authAPI.login(email, password).then(response => {
//             dispatch(setIsLoading(false));
//             if (response.data.status === "ok") {
//                 dispatch(setAuthUserData(response.data.data.id, true));
//
//             } else if (response.data.status === "err") {
//                 if (response.data.message === 'wrong_email_or_password') {
//                     dispatch(change('login', 'password', ''))
//                     dispatch(stopSubmit("login", {_error: 'Имя пользователя или пароль введены не верно.'}));
//                 }
//             } else if (response.status === 500 || response.status === 502 || response.status === 503) {
//                 dispatch(stopSubmit("login", {_error: 'Сервер не доступен.'}))
//             }
//         })
//     }
// }

export default loginReducer;