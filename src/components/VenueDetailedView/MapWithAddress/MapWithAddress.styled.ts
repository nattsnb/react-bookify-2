import { styled } from "@mui/material";

export const StyledMapContainer = styled("div")(
  ({ theme }) => `
    width: 100%;
    height: 430px;
  
    ${theme.breakpoints.down("lg")} {
      margin-top: ${theme.spacing(4)};
      margin-bottom: ${theme.spacing(14)};
      height: 380px;
    }
  
    .leaflet-container {
      width: 100%;
      height: 100%;
    }
  
    .leaflet-control-fullscreen-button {
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    .leaflet-control-fullscreen a {
      background-size: 100%;
      width: 60px;
      height: 60px;
    }
  
    .leaflet-touch.leaflet-fullscreen-on .leaflet-control-fullscreen a {
      background-position: 2px -59px;
    }
  `,
);
