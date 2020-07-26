import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker

} from 'react-google-maps';


const Mapa = () => {
    return ( 
        <GoogleMap 
            defaultZoom={15}
            defaultCenter={{lat:-26.8377745, lng:-65.2116584}}
        >
        <Marker
            position={{ lat: -26.8377745, lng: -65.2094697}}
    />
        </GoogleMap>
     );
}
 
export default withScriptjs(
    withGoogleMap(Mapa)
);