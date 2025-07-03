import type { DateRange } from "@mui/x-date-pickers-pro";
import type { Dayjs } from "dayjs";

export interface SearchBarFormValuesDto {
  localization?: string;
  occasionIds?: number[];
  dateRange?: DateRange<Dayjs>;
  guests?: number;
  venueTypeId?: number;
}
