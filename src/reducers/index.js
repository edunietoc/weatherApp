const TOGGLE_MENU = 'TOGGLE_MENU';
const SET_PLACES = 'SET_PLACES';
const SET_CURRENT_COORD = 'SET_CURRRENT_COORD';
const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';

const reducer = (state, action) => {

    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menuActive: !state.menuActive,
            }
            break;
    
        case SET_PLACES:
            return{
                ...state,
                placesList: action.payload
            }

        case SET_CURRENT_COORD:
            return{
                ...state,
                currentLocationLatitude: action.payload.latitude,
                currentLocationLongitude: action.payload.longitude
            }

        case SET_CURRENT_PLACE:
            return{
                ...state,
                currentLocation: action.payload
            }
        
        default:
            return state;
            break;
    }

}

export default reducer;