import { MenuItem, Select, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import { StyledFormControl, StyledInputLabel } from "./SearchBar.styled.ts";

type VenueTypeInputProps = {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
};

export const VenueTypeInput = ({ value, onChange }: VenueTypeInputProps) => {
  const { venueTypes } = useSearchDropdownData();

  return (
    <StyledFormControl fullWidth>
      <StyledInputLabel id="venue-type-label">
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
        venue type
      </StyledInputLabel>
      <Select
        labelId="venue-type-label"
        id="venue-type"
        value={value}
        onChange={(event) => {
          const eventValue = event.target.value;
          onChange(eventValue === "" ? undefined : Number(eventValue));
        }}
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
    </StyledFormControl>
  );
};
