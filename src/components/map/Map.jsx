import React from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import L from "leaflet";
// Fix icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function Map(props) {
  const location = useLocation();

  let st = {};

  location.pathname === "/propertydetails"
    ? (st = { height: "300px", width: "100%" })
    : (st = { height: "100vh", width: "100%" });

  return (
    <MapContainer
      center={[19.194529898787334, 77.27977355990448]}
      zoom={13}
      style={st}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          eventHandlers={{
            click: (e) => props.handleMarkerClick(e, marker.data),
          }}
        >
          <Popup>{marker.data.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
