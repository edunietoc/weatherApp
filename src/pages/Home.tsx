import React, { ReactElement, useEffect } from 'react';
import Location from '../components/Location';
import LocationService from '../services/LocationAPI';
import { connect } from 'react-redux';
import { setCurrentLocationCoordinates, setCurrentLocationPlace } from '../actions'
import Loader from '../components/loader';

const Home = (props):ReactElement => {

    const { currentLocationLatitude, currentLocationLongitude, currentLocation, setCurrentLocationCoordinates, setCurrentLocationPlace } = props;
    const locationService = new LocationService();


    useEffect( () => {   

        const fetchCoordinates =  async()=>{
            
            const coordinateResult = await locationService.getCurrentLocation();
            setCurrentLocationCoordinates({latitude: coordinateResult.latitude, longitude: coordinateResult.longitude});
        }
        
        const fetchCurrentPlace = async () =>{
            const placeResult = await locationService.getCountryByCoordinates(currentLocationLatitude, currentLocationLongitude);
            setCurrentLocationPlace(placeResult);
        }

        fetchCoordinates();
        if ( currentLocationLatitude && currentLocationLongitude && currentLocation==undefined) {
            fetchCurrentPlace();
        }

    })

    if (currentLocation) {
        return <Location countryCode={currentLocation.countryCode} state={currentLocation.state} />     
    }else{
        return <Loader/>;
    }

}

const mapStateToProps = (state, props) =>({
    currentLocationLatitude: state.currentLocationLatitude,
    currentLocationLongitude: state.currentLocationLongitude,
    currentLocation: state.currentLocation
})

const mapDispatchToProps = {
    setCurrentLocationCoordinates,
    setCurrentLocationPlace
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Home);