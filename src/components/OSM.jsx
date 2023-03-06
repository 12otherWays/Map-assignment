import React from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { useSelector } from "react-redux";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function OpenStreetMap() {
  const coordinates = useSelector((state) => state.coordinates);
  const zoomLevel = 3;

  return (
    <div style={{ zIndex: 0 }}>
      <MapContainer
        center={coordinates}
        zoom={zoomLevel}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=E3waHizE923tG6kQWHFf"
        />
        <Marker position={coordinates} />
      </MapContainer>
    </div>
  );
}

export default OpenStreetMap;
