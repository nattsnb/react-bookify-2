export interface SearchBarFormValuesDto {
  localization?: string;
  occasionIds?: number[];
  dateRange?: [Date | null, Date | null];
  guests?: number;
  venueTypeId?: number;
}
