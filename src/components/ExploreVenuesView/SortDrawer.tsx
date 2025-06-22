import {
  Checkbox,
  FormControlLabel,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import {
  StyledDrawerToolbarBackground,
  StyledFiltersContainer,
} from "./ExploreVenuesView.styled.ts";
import { StyledColumnTitleContainer } from "../../shared/styledComponents/styledColumnTitleContainer.ts";

export function SortDrawer() {
  const arrayOfFilters = [
    { id: 0, name: "by the most expensive" },
    { id: 1, name: "by the cheapest" },
    { id: 2, name: "by top rated" },
  ];
  return (
    <StyledFiltersContainer>
      <StyledDrawerToolbarBackground>
        <StyledColumnTitleContainer>sort</StyledColumnTitleContainer>
      </StyledDrawerToolbarBackground>
      <MenuList>
        {arrayOfFilters.map((filter) => (
          <MenuItem key={filter.id}>
            <FormControlLabel control={<Checkbox />} label={filter.name} />
            <ListItemText />
          </MenuItem>
        ))}
      </MenuList>
    </StyledFiltersContainer>
  );
}
