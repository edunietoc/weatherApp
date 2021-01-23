import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import Location from '../components/Location';
import Loader from '../components/Loader';
import WeatherService from '../services/WeatherAPI';
import { setSelectedWeather } from '../actions';
import getIcon from '../services/WeatherStatusIcons';

const PlaceSelected = (props) => {

    const { selectedPlace, selectedWeather, setSelectedWeather } = props;


    useEffect( () => {   

        const fetchSelectedWeather = async () =>{
            const weatherResult = await WeatherService(selectedPlace.latitude,selectedPlace.longitude);
            setSelectedWeather(weatherResult);
        }

        if ( selectedWeather == undefined ) {
            fetchSelectedWeather();
        }
    })

    if (selectedWeather && PlaceSelected) {
        return <Location 
        countryCode={selectedPlace.countryCode} 
        state={selectedPlace.state}
        temperature={selectedWeather.temperature}
        humidity={selectedWeather.humidity}
        description={selectedWeather.description}
        icon={getIcon(selectedWeather.iconCode)}
        />     
    }else{
        return <Loader/>;
    }
}

const mapStateToProps = (state, props) => ({
    selectedPlace: state.selectedPlace,
    selectedWeather: state.selectedWeather
})

const mapDispatchToProps = {
    setSelectedWeather,
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceSelected);