export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_PLACES = 'SET_PLACES';
export const SET_CURRENT_COORD = 'SET_CURRRENT_COORD';
export const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_SELECTED_PLACE = 'SET_SELECTED_PLACE';
export const SET_SELECTED_WEATHER = 'SET_SELECTED_WEATHER';


export const toggleMenu = () => ({
    type: TOGGLE_MENU
});

export const setPlacesList = (payload) => ({
    type: SET_PLACES,
    payload
})

export const setCurrentLocationCoordinates = (payload) => ({
    type: SET_CURRENT_COORD,
    payload
});

export const setCurrentLocationPlace = (payload) => ({
    type: SET_CURRENT_PLACE,
    payload
});

export const setCurrentWeather = (payload) => ({
    type: SET_CURRENT_WEATHER,
    payload
});

export const setSelectedPlace = (payload) => ({
    type: SET_SELECTED_PLACE,
    payload
})

export const setSelectedWeather = (payload) => ({
    type: SET_SELECTED_WEATHER,
    payload
});