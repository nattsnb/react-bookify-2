import { useEffect, useState } from "react";
import { venueTypeApi } from "../../../shared/api/venueTypeApi.ts";
import { occasionApi } from "../../../shared/api/occasionApi.ts";
import type { VenueTypeDto } from "../../../shared/types/tables/venue-type/venue-type.dto.ts";
import type { OccasionDto } from "../../../shared/types/tables/occasion/occasion.dto.ts";

export const useSearchDropdownData = () => {
  const [venueTypes, setVenueTypes] = useState<VenueTypeDto[]>([]);
  const [occasions, setOccasions] = useState<OccasionDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [venueData, occasionData] = await Promise.all([
          venueTypeApi.getAllVenueTypes(),
          occasionApi.getAllOccasions(),
        ]);
        setVenueTypes(venueData ?? []);
        setOccasions(occasionData ?? []);
      } catch (e) {
        console.error("Failed to fetch dropdown data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { venueTypes, occasions, loading };
};
