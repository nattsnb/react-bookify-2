import { MenuItem, Select, InputAdornment } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import {
  StyledFormControl,
  StyledInputPlaceholderContainer,
} from "./SearchBar.styled.ts";

type VenueTypeInputProps = {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
};

export const VenueTypeInput = ({ value, onChange }: VenueTypeInputProps) => {
  const { venueTypes } = useSearchDropdownData();

  return (
    <StyledFormControl fullWidth>
      <Select
        id="venue-type"
        value={value !== undefined ? String(value) : ""}
        onChange={(event: SelectChangeEvent) => {
          const eventValue = event.target.value;
          onChange(eventValue === "" ? undefined : Number(eventValue));
        }}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return (
              <StyledInputPlaceholderContainer>
                venue type
              </StyledInputPlaceholderContainer>
            );
          }
          const type = venueTypes.find((t) => t.id === Number(selected));
          return type?.name ?? "";
        }}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {venueTypes.map((type) => (
          <MenuItem key={type.id} value={String(type.id)}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};
