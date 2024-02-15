import React, { useRef, useState,useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import "leaflet/dist/leaflet.css";
import RoutingMachine from './RoutingMach';
import { useLeafletContext } from '@react-leaflet/core'
import { MdMyLocation } from "react-icons/md";
import SearchCity from './SearchCity'
function Map() {
  const from = useRef([23.0755086,76.8497778]);
  const to = useRef([25.335649,83.007629]);
  const to2 = useState([25.335649,83.007629])
   const [location, setLocation] = useState([51.505, -0.09])
const Distance=async()=>{
  try {

  } catch (error) {
    console.log(error);
  }
}

const handleSearch = () => {
  navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude])
  })
}


  return (
    <>
        <div className='flex w-full h-full justify-center items-center gap-16'>
<MapContainer
        center={to.current}
        zoom={13}
        style={{ width: "1200px", height: "600px" }}
      >
        
         <TileLayer
      attribution='&copy; SaathChalo'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        <Marker position={from.current}/>
        <Marker position={to.current}/>
       
        <RoutingMachine FromDis={from.current} ToDis={to.current}/>
      </MapContainer>
      <button onClick={handleSearch}>submit</button>
      <SearchCity setLocation ={setLocation} setPlaces ={from} />
      </div>
      </>
  
  );
}

export default Map;