const TOGGLE_MENU = 'TOGGLE_MENU';
const SET_PLACES = 'SET_PLACES';
const SET_CURRENT_COORD = 'SET_CURRRENT_COORD';
const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE';
const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_SELECTED_PLACE = 'SET_SELECTED_PLACE';
const SET_SELECTED_WEATHER = 'SET_SELECTED_WEATHER';

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
                /* ...state, */
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

        case SET_CURRENT_WEATHER:
            return{
                ...state,
                currentWeather: action.payload
            }
        
        case SET_SELECTED_PLACE:
            /* console.log("From rducer");
            console.log(action.payload);
            console.log("End reducer"); */
            return{
                ...state,
                selectedPlace: action.payload
            }

        case SET_SELECTED_WEATHER:
            return{
                ...state,
                selectedWeather: action.payload
            }

        default:
            return state;
            break;
    }

}

export default reducer;