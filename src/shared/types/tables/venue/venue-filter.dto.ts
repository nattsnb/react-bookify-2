export class VenueFilterDto {
  amenities?: number[];
  occasions?: number[];
  venueTypeId?: number;
  pricePerNightInEURCentMin?: number;
  pricePerNightInEURCentMax?: number;
  dateStart?: string;
  dateEnd?: string;
  guests?: number;
  radiusKm?: number;
  latitude?: number;
  longitude?: number;
}
