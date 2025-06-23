import { InputLabel, MenuItem, Select } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import { StyledFormControl } from "./SearchBar.styled.ts";
import { useFormContext, Controller } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";
import React from "react";
import { StyledCheckbox } from "../../ExploreVenuesView/FiltersDrawer/FiltersDrawer.styled.ts";

export const OccasionInput = () => {
  const { control } = useFormContext<SearchBarFormValuesDto>();
  const { occasions } = useSearchDropdownData();

  const isOccasionSelected = (id: number, occasionIds: number[] = []) => {
    return occasionIds.includes(id);
  };

  return (
    <StyledFormControl fullWidth>
      <InputLabel id="occasion-label">
        <Search /> occasion
      </InputLabel>

      <Controller
        name="occasionIds"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <Select
            labelId="occasion-label"
            id="occasion"
            multiple
            value={field.value ?? []}
            onChange={field.onChange}
            renderValue={(selected) => {
              const selectedOccasions = occasions
                .filter((occasion) => selected.includes(occasion.id))
                .map((occasion) => occasion.name);
              return selectedOccasions.join(", ");
            }}
          >
            {occasions.map((occasion) => (
              <MenuItem key={occasion.id} value={occasion.id}>
                <StyledCheckbox
                  checked={isOccasionSelected(occasion.id, field.value)}
                />{" "}
                {occasion.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </StyledFormControl>
  );
};
