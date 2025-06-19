import { IsString, IsNotEmpty, IsArray, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOccasionDto {
  name: string;
  amenities: number[];
}
