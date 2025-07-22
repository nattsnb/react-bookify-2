import { VenueSection } from "../../../shared/constants.ts";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";

export function useLinkBar() {
  const { setDisplayedSection } = useActiveVenue();

  const handleDescriptionClick = () => {
    setDisplayedSection(VenueSection.DESCRIPTION);
  };
  const handleGalleryClick = () => {
    setDisplayedSection(VenueSection.GALLERY);
  };
  const handleMapClick = () => {
    setDisplayedSection(VenueSection.MAP);
  };
  const handleContactsClick = () => {
    setDisplayedSection(VenueSection.CONTACTS);
  };

  return {
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
    handleContactsClick,
  };
}
