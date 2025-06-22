import type { AmenityDto } from "../amenity/amenity.dto.ts";

export class CategoryDto {
  id!: number;
  name!: string;
  amenities?: AmenityDto[];
}
