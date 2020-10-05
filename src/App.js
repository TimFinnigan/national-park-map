import React from 'react';
import { GoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 37.0902, long: 95.7129 }}
        />
    );
}

const App = () => {
    return <div>yoo</div>;
};

export default App;
