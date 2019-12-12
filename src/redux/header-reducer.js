const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

let initialState = {
    city: "Москва",
    modal: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CITY: {
            let text = action.text;
            return {
                ...state,
                city: text,
            }
        }
        case TOGGLE_MODAL: {
            return {
                ...state,
                modal: !state.modal,
            }
        }
        default:
            return state;
    }
}

export const setCurrentCity = (text) => ({type: SET_CURRENT_CITY, text});
export const toggleModal = () => ({type: TOGGLE_MODAL});

export default headerReducer;