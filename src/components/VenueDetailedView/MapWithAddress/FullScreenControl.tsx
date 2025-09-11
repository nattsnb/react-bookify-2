import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";

export const FullscreenControl = () => {
  const map = useMap();

  useEffect(() => {
    const fullscreenControl = L.control.fullscreen({
      position: "topright",
    });
    map.addControl(fullscreenControl);

    return () => {
      map.removeControl(fullscreenControl);
    };
  }, [map]);

  return null;
};
