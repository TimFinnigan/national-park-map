import React, { useState } from 'react';
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker,
    InfoWindow,
} from 'react-google-maps';

import mapStyles from './mapStyles';
import { parks } from './parks.js';

const Map = () => {
    const [selectedPark, setSelectedPark] = useState(null);
    return (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
            defaultOptions={{ styles: mapStyles }}
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
                    icon={{
                        url: '/tree.svg',
                        scaledSize: new window.google.maps.Size(50, 50),
                    }}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                    position={{
                        lat: selectedPark.lat,
                        lng: selectedPark.lng,
                    }}
                    onCloseClick={() => {
                        setSelectedPark(null);
                    }}
                >
                    <div>{selectedPark.name}</div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
