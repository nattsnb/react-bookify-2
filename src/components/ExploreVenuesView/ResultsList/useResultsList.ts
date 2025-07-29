import { useEffect, useState } from "react";
import { venueApi } from "../../../shared/api/venueApi.ts";
import { useError } from "../../../contexts/errorContext.ts";
import type { VenueFilterDto } from "../../../shared/types/tables/venue/venue-filter.dto.ts";
import { useFilter } from "../../../contexts/filterParamsContext.ts";
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";

export const useResultsList = (limit: number) => {
  const [venuesOnPage, setVenuesOnPage] = useState<VenueDto[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setIsError } = useError();
  const { filterParams } = useFilter();

  useEffect(() => {
    async function getData(limit: number, filterParams: VenueFilterDto) {
      setIsLoading(true);
      try {
        if (filterParams) {
          const filterQueryString = buildQueryString(filterParams);
          const filteredVenuesResponse =
            await venueApi.getFilteredVenues(filterQueryString);
          const venuesPerPage = Array.isArray(filteredVenuesResponse)
            ? filteredVenuesResponse.slice(0, limit)
            : null;
          setVenuesOnPage(venuesPerPage);
        } else {
          const allVenuesResponse = await venueApi.getAllVenues();
          const venuesPerPage = Array.isArray(allVenuesResponse)
            ? allVenuesResponse.slice(0, limit)
            : null;
          setVenuesOnPage(venuesPerPage);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching venue data:", error);
      }
      setIsLoading(false);
    }
    getData(limit, filterParams!);
  }, [limit, filterParams]);

  const buildQueryString = (filterParams: VenueFilterDto): string => {
    const query = new URLSearchParams();
    Object.entries(filterParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          query.append(key, value.join(","));
        } else {
          query.append(key, value.toString());
        }
      }
    });
    return query.toString();
  };

  return {
    venuesOnPage,
    isLoading,
  };
};
