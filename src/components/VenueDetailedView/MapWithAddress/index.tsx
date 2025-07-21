import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMapContainer } from "./MapWithAddress.styled.js";
import { useMediaQuery, useTheme } from "@mui/material";
import { StyledContactInfoTypography } from "../ContactInfo/ContactInfo.styled.js";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";
import { FullscreenControl } from "./FullScreenControl.tsx";
import "leaflet-fullscreen";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";

interface MapWithAddressProps {
  mapRef?: React.RefObject<HTMLDivElement>;
}

const MapWithAddress = ({ mapRef }: MapWithAddressProps) => {
  const theme = useTheme();
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));
  const { activeVenue } = useActiveVenue();

  if (!activeVenue) {
    return <></>;
  }

  const address = `${activeVenue.streetName} ${activeVenue.streetNumber}, ${activeVenue.postalCode} ${activeVenue.city}`;

  return (
    <div ref={mapRef}>
      {isViewportSmallerThanLg && (
        <StyledContactInfoTypography>Map</StyledContactInfoTypography>
      )}
      <StyledMapContainer>
        <MapContainer
          center={[activeVenue.latitude, activeVenue.longitude]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[activeVenue.latitude, activeVenue.longitude]}>
            <Popup>{address}</Popup>
          </Marker>
          <FullscreenControl />
        </MapContainer>
      </StyledMapContainer>
    </div>
  );
};

export default MapWithAddress;
