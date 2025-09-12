import { useDisplayedPictureNumber } from "../../../contexts/pictureCaruselContext.tsx";

export const useGallery = () => {
  const { setDisplayedPictureNumber } = useDisplayedPictureNumber();

  const handleOnClick = (pictureIndex: number) => {
    setDisplayedPictureNumber(pictureIndex);
  };

  return handleOnClick;
};
