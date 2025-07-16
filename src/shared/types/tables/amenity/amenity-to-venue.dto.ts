import type { AmenityDto } from "./amenity.dto.ts";

export type AmenityToVenueDto = {
  venueId: number;
  amenityId: number;
  amenity: AmenityDto;
};
