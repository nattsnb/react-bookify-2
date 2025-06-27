import { InputLabel, MenuItem, Select, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import { StyledFormControl, StyledInputLabel } from "./SearchBar.styled.ts";
import { useFormContext, Controller } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

export const VenueTypeInput = () => {
  const { control } = useFormContext<SearchBarFormValuesDto>();
  const { venueTypes } = useSearchDropdownData();

  return (
    <StyledFormControl fullWidth>
      <StyledInputLabel id="venue-type-label">
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
        venue type
      </StyledInputLabel>

      <Controller
        name="venueTypeId"
        control={control}
        render={({ field }) => (
          <Select
            labelId="venue-type-label"
            id="venue-type"
            value={field.value ?? ""}
            onChange={field.onChange}
            displayEmpty
            renderValue={(selected) => {
              if (!selected) return;
              const type = venueTypes.find((t) => t.id === selected);
              return type?.name ?? "";
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {venueTypes.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </StyledFormControl>
  );
};
