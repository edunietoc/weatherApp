import * as React from 'react';
import './styles/Loader.css';


const Loader = ():React.ReactElement => {

    return(
        <div className='Loader__Container'>
            <div className="lds-dual-ring"></div>
        </div>
        
    );
}

export default Loader;