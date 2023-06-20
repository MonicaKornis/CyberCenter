import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import styled from 'styled-components';


const MapComponent = styled.div`
    width: 100%; 
    height: 100%;
`;

const MapContainer = styled.div`
    width: 100%;
    height: calc(100vh - 77px);
`;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-94.225);
    const [lat] = useState(39.341);
    const [zoom] = useState(15);
    const [API_KEY] = useState('LVC6PaZM5wvdYtFEQ7WB');

    // 39.34160437974564, -94.22482362248584

    useEffect(() => {
        
       if(!map.current && mapContainer.current) {
            map.current = new maplibregl.Map({
                container: mapContainer.current,
                style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
                center: [lng, lat],
                zoom: zoom
            })
        }
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({color: "#FF0000"})
        .setLngLat([-94.2248, 39.341])
        .addTo(map.current);
    })

    console.log(map)
    return (
        <MapContainer>
            <MapComponent ref={mapContainer}></MapComponent>
        </MapContainer>
    )
}

