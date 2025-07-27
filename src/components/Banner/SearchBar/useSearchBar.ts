import { useForm } from "react-hook-form";
import type { VenueFilterDto } from "../../../shared/types/tables/venue/venue-filter.dto.ts";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto";
import { geocodeCity } from "../../../shared/utils/geocodeCity.ts";
import type { Dayjs } from "dayjs";
import { useFilter } from "../../../contexts/filterParamsContext.ts";
import { useLocation, useNavigate } from "react-router-dom";

const DEFAULT_RADIUS_KM = 10;

export function useSearchBar() {
  const form = useForm<SearchBarFormValuesDto>({
    defaultValues: {
      localization: "",
      occasionIds: [],
      dateRange: [null, null],
      guests: undefined,
      venueTypeId: undefined,
      radiusKm: 10,
    },
  });
  const { filterParams, setFilterParams } = useFilter();
  const navigate = useNavigate();
  const location = useLocation();

  const formatDate = (date?: Dayjs | null) =>
    date ? date.format("YYYY-MM-DD") : undefined;

  const onSubmit = async (data: SearchBarFormValuesDto) => {
    const { localization, occasionIds, venueTypeId, dateRange, guests } = data;

    const dateStart = formatDate(dateRange?.[0]);
    const dateEnd = formatDate(dateRange?.[1]);
    let radiusKm: number | undefined;

    let latitude: number | undefined;
    let longitude: number | undefined;

    if (localization) {
      try {
        const coordinates = await geocodeCity(localization);
        if (coordinates) {
          latitude = coordinates.latitude;
          longitude = coordinates.longitude;
          radiusKm = DEFAULT_RADIUS_KM;
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
      radiusKm,
      occasions: occasionIds,
      venueTypeId,
    };

    setFilterParams({
      ...filterParams,
      ...newParams,
    });

    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return {
    form,
    onSubmit,
  };
}
