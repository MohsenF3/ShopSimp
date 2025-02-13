import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  return (
    <MapContainer
      center={[29.693306697206214, 52.467453486732886]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[29.693306697206214, 52.467453486732886]}>
        <Popup>
          Eram Garden, Shiraz, Iran. <br /> A beautiful historical Persian
          garden.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
