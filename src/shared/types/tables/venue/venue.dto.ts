import type { ReservationDto } from "../reservation/reservation.dto.ts";
import type { FavouriteDto } from "../favourite/favourite.dto.ts";
import type { VenueTypeDto } from "../venue-type/venue-type.dto.ts";
import type { AmenityToVenueDto } from "../amenity/amenity-to-venue.dto.ts";

export interface OwnerDto {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
}

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
  owner!: OwnerDto;
  reservations!: ReservationDto[];
  favourites?: FavouriteDto[];
  venueType!: VenueTypeDto;
  amenityToVenues!: AmenityToVenueDto[];
}
