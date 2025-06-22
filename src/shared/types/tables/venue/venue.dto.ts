import type { AmenityDto } from "../amenity/amenity.dto.ts";
import type { ReservationDto } from "../reservation/reservation.dto.ts";
import type { FavouriteDto } from "../favourite/favourite.dto.ts";
import type { VenueTypeDto } from "../venue-type/venue-type.dto.ts";

export class VenueDto {
  id!: number;
  name!: string;
  description!: string;
  images!: string[];
  pricePerNightInEURCent!: number;
  rating!: number;
  capacity!: number;
  amountsOfBeds!: number;
  extraSleepingDetails!: string;
  checkInHour!: number;
  checkOutHour!: number;
  distanceFromCityCenterInMeters!: number;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
  streetNumber!: string;
  streetName!: string;
  postalCode!: string;
  city!: string;
  latitude!: number;
  longitude!: number;
  ownerId!: number;
  amenities?: AmenityDto[];
  reservations?: ReservationDto[];
  favourites?: FavouriteDto[];
  venueType!: VenueTypeDto;
}
