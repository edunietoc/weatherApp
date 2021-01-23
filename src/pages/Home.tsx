import React, { ReactElement, useEffect } from 'react';
import Location from '../components/Location';
import LocationService from '../services/LocationAPI';
import WeatherService from '../services/WeatherAPI';
import { connect } from 'react-redux';
import { setCurrentLocationCoordinates, setCurrentLocationPlace, setCurrentWeather } from '../actions'
import Loader from '../components/Loader';
import WeatherModel from '../models/weather';
import getIcon from '../services/WeatherStatusIcons';



const Home = (props):ReactElement => {

    const { currentLocationLatitude,
        currentLocationLongitude,
        currentLocation,
        
        setCurrentLocationCoordinates,
        setCurrentWeather,
        setCurrentLocationPlace } = props;

    const currentWeather:WeatherModel = props.currentWeather;


    const locationService:LocationService = new LocationService();

    useEffect( () => {   

        const fetchCoordinates =  async() =>{
            
            const coordinateResult = await locationService.getCurrentLocation();
            setCurrentLocationCoordinates({latitude: coordinateResult.latitude, longitude: coordinateResult.longitude});
        }
        
        const fetchCurrentPlace = async () =>{
            const placeResult = await locationService.getCountryByCoordinates(currentLocationLatitude, currentLocationLongitude);
            setCurrentLocationPlace(placeResult);
        }

        const fetchCurrentWeather = async () =>{
            const weatherResult = await WeatherService(currentLocationLatitude,currentLocationLongitude);
            setCurrentWeather(weatherResult)
        }

        fetchCoordinates();

        if ( currentLocationLatitude && currentLocationLongitude && currentLocation==undefined) {
            fetchCurrentPlace();
        }

        if ( currentLocationLatitude && currentLocationLongitude && currentWeather==undefined) {
            fetchCurrentWeather();
        }


    })

    if (currentLocation && currentWeather) {
        return <Location 
        countryCode={currentLocation.countryCode} 
        state={currentLocation.state}
        temperature={currentWeather.temperature}
        humidity={currentWeather.humidity}
        description={currentWeather.description}
        icon= {getIcon(currentWeather.iconCode)}
        />;
    }else{
        return <Loader/>;
    }

}

const mapStateToProps = (state, props) =>({
    currentLocationLatitude: state.currentLocationLatitude,
    currentLocationLongitude: state.currentLocationLongitude,
    currentLocation: state.currentLocation,
    currentWeather: state.currentWeather
})

const mapDispatchToProps = {
    setCurrentLocationCoordinates,
    setCurrentLocationPlace,
    setCurrentWeather
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Home);