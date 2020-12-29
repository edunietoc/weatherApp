import React from 'react';
import './styles/Location.css';


const Location = (props) => {

    const { countryCode, state } = props;

    return(
        <section className="Location">
        <div className="Location__Hero">
          <figure className="Location__Image">
            <img
              className="Location__Icon"
              src="https://img.icons8.com/office/80/000000/partly-cloudy-day--v2.png"
            />
          </figure>
          <div className="Location__Description">
            <h2 className="Location__Description--Description">Partly Cloudy</h2>
            <h3 className="Location__Description--City">{state},{countryCode.toUpperCase()}</h3>
          </div>
        </div>

        <div className="Location__Temperature">
          <h3>Temperature</h3>
          <span>33.76 °C</span>
        </div>

        <div className="Location__Humidity">
          <h3>Humidity</h3>
          <span>60 %</span>
        </div>

        <button className="Location__DetailButton">Details</button>
      </section>
    );

}

export default Location;