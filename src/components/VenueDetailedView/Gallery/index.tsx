import {
  StyledGalleryContainer,
  StyledImageContainer,
} from "./Gallery.styled.js";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { StyledContactInfoTypogrphy } from "../ContactInfo/ContactInfo.styled.js";
import { useGallery } from "./useGallery.js";
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";
import { v4 as uuidv4 } from "uuid";

interface GalleryProps {
  venue: VenueDto;
  galleryRef: React.RefObject<HTMLDivElement>;
}

export function Gallery({ venue, galleryRef }: GalleryProps) {
  const theme = useTheme();
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleOnClick = useGallery();

  return (
    <div ref={galleryRef}>
      {isViewportSmallerThanLg ? (
        <>
          <StyledContactInfoTypogrphy>Gallery</StyledContactInfoTypogrphy>
          <StyledGalleryContainer>
            {venue.images.map((imageURL, index) => (
              <StyledImageContainer
                key={uuidv4()}
                imageUrl={imageURL}
                onClick={() => handleOnClick(index)}
              />
            ))}
          </StyledGalleryContainer>
        </>
      ) : (
        <StyledGalleryContainer>
          {venue.images.map((imageURL, index) => (
            <StyledImageContainer
              key={index}
              imageUrl={imageURL}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </StyledGalleryContainer>
      )}
    </div>
  );
}
