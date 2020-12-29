import * as React from 'react';
import { connect } from 'react-redux';

const Places = (props) => {

    
    return(
        <>
            <h1>Hello</h1>
        </>
    );
}


const mapStateToProps = (state, props) => (
    {
        placesList: state.placesList
    });

export default connect(
    mapStateToProps, null)(Places);