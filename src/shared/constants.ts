export const VenueSection = {
  DESCRIPTION: "description",
  GALLERY: "gallery",
  MAP: "map",
  CONTACTS: "contacts",
} as const;

export type VenueSection = (typeof VenueSection)[keyof typeof VenueSection];
