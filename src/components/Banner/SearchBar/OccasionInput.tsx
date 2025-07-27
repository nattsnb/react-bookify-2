import { MenuItem, Select } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import { StyledFormControl, StyledInputLabel } from "./SearchBar.styled.ts";
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
      <StyledInputLabel>
        <Search /> occasion
      </StyledInputLabel>
      <Select
        labelId="occasion-label"
        id="occasion"
        multiple
        value={value ?? []}
        onChange={(event) => {
          const eventValue = event.target.value;
          onChange(Array.isArray(eventValue) ? eventValue.map(Number) : []);
        }}
        renderValue={(selected) => {
          const selectedOccasions = occasions
            .filter((occasion) => selected.includes(occasion.id))
            .map((occasion) => occasion.name);
          return selectedOccasions.join(", ");
        }}
      >
        {occasions.map((occasion) => (
          <MenuItem key={occasion.id} value={occasion.id}>
            <StyledCheckbox checked={isOccasionSelected(occasion.id, value)} />{" "}
            {occasion.name}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};
