import BedIcon from "@mui/icons-material/Bed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";

type SleepingDetailsListItem = {
  id: number;
  Icon: typeof BedIcon;
  string: string;
};

export function produceSleepingDetailsToList(
  venue: VenueDto,
): SleepingDetailsListItem[] {
  const bedsStr = venue.amountsOfBeds === 1 ? "bed" : "beds";
  const extra = venue.extraSleepingDetails
    ? ` / ${venue.extraSleepingDetails}`
    : "";

  const sleepingString = `${venue.capacity} sleeping places - ${venue.amountsOfBeds} ${bedsStr}${extra}`;

  return [
    {
      id: 0,
      Icon: BedIcon,
      string: sleepingString,
    },
    {
      id: 2,
      Icon: AccessTimeIcon,
      string: `check-in ${venue.checkInHour}:00 / check-out ${venue.checkOutHour}:00`,
    },
    {
      id: 3,
      Icon: LocationCityIcon,
      string: `${venue.distanceFromCityCenterInMeters / 1000} km to the city`,
    },
  ];
}
