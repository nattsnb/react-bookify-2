import { MenuItem, Select, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import {
  StyledFormControl,
  StyledInputPlaceholderContainer,
} from "./SearchBar.styled.ts";
import { StyledCheckbox } from "../../ExploreVenuesView/FiltersDrawer/FiltersDrawer.styled.ts";

type OccasionInputProps = {
  value: number[];
  onChange: (value: number[]) => void;
};

export const OccasionInput = ({ value, onChange }: OccasionInputProps) => {
  const { occasions } = useSearchDropdownData();

  const isOccasionSelected = (id: number, occasionIds: number[] = []) => {
    return occasionIds.includes(id);
  };

  return (
    <StyledFormControl fullWidth>
      <Select
        id="occasion"
        multiple
        displayEmpty
        value={value ?? []}
        onChange={(event) => {
          const eventValue = event.target.value;
          onChange(Array.isArray(eventValue) ? eventValue.map(Number) : []);
        }}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <StyledInputPlaceholderContainer>
                occasion
              </StyledInputPlaceholderContainer>
            );
          }

          const selectedOccasions = occasions
            .filter((occasion) => selected.includes(occasion.id))
            .map((occasion) => occasion.name);
          return selectedOccasions.join(", ");
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
        {occasions.map((occasion) => (
          <MenuItem key={occasion.id} value={occasion.id}>
            <StyledCheckbox checked={isOccasionSelected(occasion.id, value)} />
            {occasion.name}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};
