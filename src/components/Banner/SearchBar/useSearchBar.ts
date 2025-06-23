import { useForm } from "react-hook-form";
import { useState } from "react";
import type { VenueFilterDto } from "../../../shared/types/tables/venue/venue-filter.dto.ts";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto";
import { geocodeCity } from "../../../shared/utils/geocodeCity.ts";

export function useSearchBar() {
  const form = useForm<SearchBarFormValuesDto>();
  const [filterParams, setFilterParams] = useState<Partial<VenueFilterDto>>({});

  const onSubmit = async (data: SearchBarFormValuesDto) => {
    const {
      localization,
      occasionIds,
      venueTypeId,
      dateStart,
      dateEnd,
      guests,
    } = data;

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

    setFilterParams((prev) => {
      const newParams: Partial<VenueFilterDto> = {
        dateStart,
        dateEnd,
        guests,
        latitude,
        longitude,
      };

      if (occasionIds) newParams.occasions = occasionIds;
      if (venueTypeId) newParams.venueTypeId = venueTypeId;

      return { ...prev, ...newParams };
    });
  };

  return {
    form,
    onSubmit,
    filterParams,
  };
}
