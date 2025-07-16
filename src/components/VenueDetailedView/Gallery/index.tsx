import {
  StyledGalleryContainer,
  StyledImageContainer,
} from "./Gallery.styled.js";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { StyledContactInfoTypogrphy } from "../ContactInfo/ContactInfo.styled.js";
import { useGallery } from "./useGallery.js";
import { v4 as uuidv4 } from "uuid";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";

interface GalleryProps {
  galleryRef?: React.RefObject<HTMLDivElement>;
}

export function Gallery({ galleryRef }: GalleryProps) {
  const theme = useTheme();
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));
  const handleOnClick = useGallery();
  const { activeVenue } = useActiveVenue();

  if (!activeVenue) {
    return <></>;
  }

  return (
    <div ref={galleryRef}>
      {isViewportSmallerThanLg ? (
        <>
          <StyledContactInfoTypogrphy>Gallery</StyledContactInfoTypogrphy>
          <StyledGalleryContainer>
            {activeVenue.images.map((imageURL, index) => (
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
          {activeVenue.images.map((imageURL, index) => (
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
