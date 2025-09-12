import { useDisplayedPictureNumber } from "../../../contexts/pictureCaruselContext.tsx";
import { useActiveVenue } from "../../../contexts/activeVenueContext.tsx";

export const useDetailsAndImageContainer = () => {
  const { activeVenue } = useActiveVenue();

  const images: string[] = activeVenue ? activeVenue.images : [];

  const { displayedPictureNumber, setDisplayedPictureNumber } =
    useDisplayedPictureNumber();

  const handleClickForward = () => {
    if (displayedPictureNumber === images.length - 1) {
      setDisplayedPictureNumber(0);
    } else {
      setDisplayedPictureNumber(displayedPictureNumber + 1);
    }
  };

  const handleClickBack = () => {
    if (displayedPictureNumber === 0) {
      setDisplayedPictureNumber(images.length - 1);
    } else {
      setDisplayedPictureNumber(displayedPictureNumber - 1);
    }
  };

  return {
    handleClickForward,
    handleClickBack,
  };
};
