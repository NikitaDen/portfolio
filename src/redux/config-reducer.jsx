const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
const SET_LANGUAGE = 'SET_LANGUAGE';

let initialState = {
    darkMode: false,
    langRU: false,
};

const configReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !action.darkMode,
            };
        case SET_LANGUAGE:
            debugger
            return {
                ...state,
                langRU: !action.lang,
            };
        default:
            return state;
    }
};

export const setLanguage = (lang) => ({type: SET_LANGUAGE, lang});
export const toggleDarkMode = (darkMode) => ({type: TOGGLE_DARK_MODE, darkMode});

export default configReducer;

