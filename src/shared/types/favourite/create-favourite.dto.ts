import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFavouriteDto {
  venueId: number;
}
