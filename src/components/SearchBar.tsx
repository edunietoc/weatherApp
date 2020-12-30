import React, { useState } from 'react';
import LocationService from '../services/LocationAPI';
import { connect } from 'react-redux';
import { setPlacesList } from '../actions';
import { useHistory } from 'react-router-dom';

import './styles/SearchBar.css';

const SearchBar = (props) => {


    const locationService = new LocationService();

    const [place, setPlace] = useState("");
    const history = new useHistory();


    const handleSubmit = async (event)=>{
        event.preventDefault();
        const list = await locationService.getPlacesByName(place);
        props.setPlacesList(list);
        history.push('/place-list');
    }

    const handleChange = (event) =>{
        setPlace(event.target.value);
    }


    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <label className="SearchBar__Label" htmlFor="City">Insert a City Name</label>
                <input
                    className="SearchBar__Input"                    
                    type="text"
                    name="City"
                    onChange={handleChange}
                    placeholder="Manchester"
                />
                <button className="SearchBar__Button" type="submit">Go!</button>
            </form>
        </div>
    );
}


  
  const mapDispatchToProps = {
    setPlacesList,
  }
  
  export default connect(
    null, mapDispatchToProps
  )(SearchBar);

  