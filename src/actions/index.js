export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_PLACES = 'SET_PLACES';
export const SET_CURRENT_COORD = 'SET_CURRRENT_COORD';
export const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';


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