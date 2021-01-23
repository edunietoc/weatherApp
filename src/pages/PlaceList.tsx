import * as React from 'react';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import PlaceItem from '../components/PlaceItem';
import '../components/styles/PlaceList.css';


const PlaceList = (props) => {

    const { placesList } = props;
    
    if (placesList) {
        return (
            <div className='PlaceList'>
                {placesList.map( (place, index) => <PlaceItem 
                key={index} 
                country={place.country} 
                countryCode={place.countryCode} 
                state={place.state}
                place={place}
                />)}
            </div>
            );
    }


    return(
    <Loader/>
    );
}


const mapStateToProps = (state, props) => (
    {
        placesList: state.placesList
    });

export default connect(
    mapStateToProps, null)(PlaceList);