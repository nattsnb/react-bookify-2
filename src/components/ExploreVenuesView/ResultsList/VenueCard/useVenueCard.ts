import { useState } from "react";

export const useVenueCard = (venue) => {
  const [currentPictureNumber, setCurrentPictureNumber] = useState(0);

  const handleClickForward = () => {
    if (currentPictureNumber === venue.images.length - 1) {
      setCurrentPictureNumber(0);
    } else {
      setCurrentPictureNumber(currentPictureNumber + 1);
    }
  };

  const handleClickBack = () => {
    if (currentPictureNumber === 0) {
      setCurrentPictureNumber(venue.images.length - 1);
    } else {
      setCurrentPictureNumber(currentPictureNumber - 1);
    }
  };

  return {
    currentPictureNumber,
    handleClickForward,
    handleClickBack,
  };
};
