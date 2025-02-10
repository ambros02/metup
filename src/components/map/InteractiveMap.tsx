import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import styles from "./interactivemap.module.css"


interface InteractiveMapsProps{
  position: [number, number],
  zoomLevel: number
}


const InteractiveMap = () => {

  return(
    <MapContainer className={styles.mapContainer} center={[47,8]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48, 7.01]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default InteractiveMap;