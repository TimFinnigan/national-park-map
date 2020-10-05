import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    );
};

export default App;
