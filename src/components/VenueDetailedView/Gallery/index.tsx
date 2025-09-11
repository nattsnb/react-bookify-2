import {
  StyledGalleryContainer,
  StyledImageContainer,
} from "./Gallery.styled.js";
import React from "react";
import { StyledContactInfoTypography } from "../ContactInfo/ContactInfo.styled.js";
import { useGallery } from "./useGallery.js";
import { v4 as uuidv4 } from "uuid";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";
import { useMediaQuery, useTheme } from "@mui/material";

interface GalleryProps {
  galleryRef?: React.RefObject<HTMLDivElement>;
}

export function Gallery({ galleryRef }: GalleryProps) {
  const handleOnClick = useGallery();
  const { activeVenue } = useActiveVenue();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  if (!activeVenue) {
    return null;
  }

  return (
    <div ref={galleryRef}>
      {isMobile && (
        <StyledContactInfoTypography>Gallery</StyledContactInfoTypography>
      )}
      <StyledGalleryContainer>
        {activeVenue.images.map((imageURL, index) => (
          <StyledImageContainer
            key={imageURL}
            imageUrl={imageURL}
            onClick={() => handleOnClick(index)}
          />
        ))}
      </StyledGalleryContainer>
    </div>
  );
}
