import { Transform } from 'class-transformer';
import {
  IsOptional,
  IsArray,
  IsInt,
  IsNumber,
  IsString,
  IsDateString,
  Min,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

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
