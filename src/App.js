import React, { useState } from 'react';
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker,
    InfoWindow,
} from 'react-google-maps';

import { parks } from './parks.js';

function Map() {
    const [selectedPark, setSelectedPark] = useState(null);
    return (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
        >
            {parks.map((park) => (
                <Marker
                    key={park.lat + park.lng}
                    position={{
                        lat: park.lat,
                        lng: park.lng,
                    }}
                    onClick={() => {
                        console.log(park);
                        setSelectedPark(park);
                    }}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                    position={{
                        lat: selectedPark.lat,
                        lng: selectedPark.lng,
                    }}
                >
                    <div>{selectedPark.name}</div>
                </InfoWindow>
            )}
        </GoogleMap>
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
