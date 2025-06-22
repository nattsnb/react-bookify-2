import {
  CircularProgress,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  StyledDrawerToolbar,
  StyledDrawerToolbarBackground,
  StyledFiltersContainer,
} from "../ExploreVenuesView.styled.ts";
import { HiddenElement } from "../../../shared/styledComponents/hiddenElement.styled.js";
import { useFiltersDrawer } from "./useFiltersDrawer.js";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import {
  StyledAmenityButton,
  StyledAmenityText,
  StyledCheckbox,
  StyledResetContainer,
  StyledSlider,
  StyledSliderContainer,
} from "./FiltersDrawer.styled.ts";
import { StyledColumnTitleContainer } from "../../../shared/styledComponents/styledColumnTitleContainer.ts";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import type { CategoryDto } from "../../../shared/types/category/category.dto.ts";
import { Fragment } from "react";
import type { AmenityDto } from "../../../shared/types/amenity/amenity.dto.ts";

const priceRangeFilterData = {
  id: 0,
  name: "price range",
  sectionName: "priceRange",
};

export function FiltersDrawer() {
  const {
    isLoading,
    categoryData,
    handleRangeChange,
    openSections,
    priceRangeValue,
    handleClick,
  } = useFiltersDrawer();

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  return (
    <StyledFiltersContainer>
      <StyledDrawerToolbarBackground>
        <StyledDrawerToolbar>
          <HiddenElement>
            <Typography>reset</Typography>
          </HiddenElement>
          <StyledColumnTitleContainer>filters</StyledColumnTitleContainer>
          <StyledResetContainer>reset</StyledResetContainer>
        </StyledDrawerToolbar>
      </StyledDrawerToolbarBackground>
      <List>
        <Fragment key={priceRangeFilterData.id}>
          <ListItemButton
            onClick={() => handleClick(priceRangeFilterData.sectionName)}
          >
            <ListItemText>{priceRangeFilterData.name}</ListItemText>
            {openSections[priceRangeFilterData.sectionName] ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </ListItemButton>
          <Collapse
            in={openSections[priceRangeFilterData.sectionName]}
            timeout="auto"
            unmountOnExit
          >
            <StyledSliderContainer>
              <StyledSlider
                getAriaLabel={() => priceRangeFilterData.name}
                value={priceRangeValue}
                onChange={handleRangeChange}
                valueLabelDisplay="on"
              />
            </StyledSliderContainer>
          </Collapse>
        </Fragment>
        {categoryData?.map((category: CategoryDto) => (
          <Fragment key={category.id}>
            <ListItemButton onClick={() => handleClick(category.name)}>
              <ListItemText>{category.name}</ListItemText>
              {openSections[category.name] ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </ListItemButton>
            <Collapse
              in={openSections[category.name]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {category.amenities?.map((amenity: AmenityDto) => (
                  <StyledAmenityButton key={amenity.id}>
                    <StyledCheckbox />
                    <StyledAmenityText>{amenity.name}</StyledAmenityText>
                  </StyledAmenityButton>
                ))}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </StyledFiltersContainer>
  );
}
