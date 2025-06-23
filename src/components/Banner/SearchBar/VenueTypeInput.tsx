import { InputAdornment, MenuItem } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import React from "react";
import { StyledSearchBarTextField } from "./SearchBar.styled.ts";
import { useFormContext } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

export const VenueTypeInput = () => {
  const { register, watch } = useFormContext<SearchBarFormValuesDto>();
  const value = watch("venueTypeId");
  const { venueTypes } = useSearchDropdownData();

  return (
    <StyledSearchBarTextField
      select
      variant="outlined"
      fullWidth
      {...register("venueTypeId")}
      value={value ?? ""}
      SelectProps={{
        displayEmpty: true,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    >
      <MenuItem value="">venue type</MenuItem>
      {venueTypes.map((type) => (
        <MenuItem key={type.id} value={type.id}>
          {type.name}
        </MenuItem>
      ))}
    </StyledSearchBarTextField>
  );
};
