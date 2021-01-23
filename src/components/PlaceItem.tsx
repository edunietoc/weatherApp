import * as React from 'react';
import './styles/PlaceItem.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedPlace } from '../actions';


const PlaceItem = (props) =>{

    const { countryCode, country, state, place, setSelectedPlace } = props;
    const history = new useHistory();

    const handleClick = (event) =>{
        setSelectedPlace(place);
        history.push('/SelectedPlace');
    }


    return(

        <div onClick={handleClick} className='Place'>
            <img 
            src={`https://www.countryflags.io/${countryCode}/flat/64.png`} 
            alt="countryFlag"
            className='Place__Image'
            />
            <div className='Place__Description'>
                <h3 className='Place__Country'>{country}</h3>
                <h4 className='Place__State'>{state}</h4>
            </div>
        </div>

    );
}


const mapDispatchToProps = {
    setSelectedPlace
}


export default connect(null, mapDispatchToProps)(PlaceItem);