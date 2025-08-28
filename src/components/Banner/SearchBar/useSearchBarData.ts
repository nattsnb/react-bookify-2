import { useEffect, useState } from "react";
import { venueTypeApi } from "../../../shared/api/venueTypeApi.ts";
import { occasionApi } from "../../../shared/api/occasionApi.ts";
import { venueApi } from "../../../shared/api/venueApi.ts";
import type { VenueTypeDto } from "../../../shared/types/tables/venue-type/venue-type.dto.ts";
import type { OccasionDto } from "../../../shared/types/tables/occasion/occasion.dto.ts";

function capitalizeEachWord(str: string): string {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function useSearchDropdownData() {
  const [venueTypes, setVenueTypes] = useState<VenueTypeDto[]>([]);
  const [occasions, setOccasions] = useState<OccasionDto[]>([]);
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [venueTypes, occasions, cityNames] = await Promise.all([
          venueTypeApi.getAllVenueTypes(),
          occasionApi.getAllOccasions(),
          venueApi.getCities(),
        ]);
        setVenueTypes(venueTypes ?? []);
        setOccasions(occasions ?? []);
        const caps = (cityNames ?? []).map(capitalizeEachWord);
        setCityNames(caps);
      } catch (e) {
        console.error("Failed to fetch dropdown data:", e);
        setError("Failed to fetch dropdown data");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return {
    venueTypes,
    occasions,
    cityNames,
    loading,
    error,
  };
}
