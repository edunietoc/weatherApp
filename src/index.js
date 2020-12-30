import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import reducer from './reducers';

const app = document.getElementById('app');

const initialState = {
    menuActive: false,
    placesList: [],
    currentLocationLatitude: 0,
    currentLocationLongitude: 0,
    currentLocation: undefined,
    currentWeather: undefined,
    selectedPlace: undefined,
    selectedWeather: undefined
    
}

const store = createStore(reducer, initialState);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, app);
