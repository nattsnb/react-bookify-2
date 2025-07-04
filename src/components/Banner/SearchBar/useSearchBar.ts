import { useForm } from "react-hook-form";
import { useState } from "react";
import type { VenueFilterDto } from "../../../shared/types/tables/venue/venue-filter.dto.ts";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto";
import { geocodeCity } from "../../../shared/utils/geocodeCity.ts";
import type { Dayjs } from "dayjs";

export function useSearchBar() {
  const form = useForm<SearchBarFormValuesDto>();
  const [filterParams, setFilterParams] = useState<Partial<VenueFilterDto>>({});

  const formatDate = (date?: Dayjs | null) =>
    date ? date.format("YYYY-MM-DD") : undefined;

  const onSubmit = async (data: SearchBarFormValuesDto) => {
    const { localization, occasionIds, venueTypeId, dateRange, guests } = data;

    const dateStart = formatDate(dateRange?.[0]);
    const dateEnd = formatDate(dateRange?.[1]);

    let latitude: number | undefined;
    let longitude: number | undefined;

    if (localization) {
      try {
        const coordinates = await geocodeCity(localization);
        if (coordinates) {
          latitude = coordinates.latitude;
          longitude = coordinates.longitude;
        }
      } catch (err) {
        console.error("Could not resolve city name", err);
      }
    }

    const newParams: Partial<VenueFilterDto> = {
      dateStart,
      dateEnd,
      guests,
      latitude,
      longitude,
    };

    if (occasionIds) newParams.occasions = occasionIds;
    if (venueTypeId) newParams.venueTypeId = venueTypeId;

    setFilterParams((prev) => ({
      ...prev,
      ...newParams,
    }));

    console.log("Wysyłane filterParams:", newParams);
  };

  return {
    form,
    onSubmit,
    filterParams,
  };
}
