import React from "react";
import {
  Button,
  Collapse,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  StyledCollapseTypographyContainer,
  StyledInputsContainer,
  StyledSearchBarContainer,
} from "./SearchBar.styled.ts";
import { useSearchBar } from "./useSearchBar.ts";
import { LocalizationInput } from "./LocalizationInput.tsx";
import { OccasionInput } from "./OccasionInput.tsx";
import { VenueTypeInput } from "./VenueTypeInput.tsx";
import { DateInput } from "./DateInput.tsx";
import { GuestsNumberInput } from "./GuestsNumberInput.tsx";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import { FormProvider } from "react-hook-form";

export const SearchBar = () => {
  const {
    form,
    form: { handleSubmit },
    onSubmit,
  } = useSearchBar();

  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const collapseSearchBar = () => setIsCollapsed((prev) => !prev);

  const theme = useTheme();
  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  const { venueTypes, occasions, loading } = useSearchDropdownData();

  if (loading) {
    return (
      <StyledSearchBarContainer>
        <CircularProgress />
      </StyledSearchBarContainer>
    );
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledSearchBarContainer>
          {isViewportSmallerThanMd && (
            <Collapse in={isCollapsed} collapsedSize={95}>
              <StyledInputsContainer>
                <LocalizationInput />
                <OccasionInput options={occasions} />
                <VenueTypeInput />
                <GuestsNumberInput />
                <DateInput />
              </StyledInputsContainer>
            </Collapse>
          )}
          {isViewportLargerThanMd && (
            <Collapse
              in={isCollapsed}
              orientation="horizontal"
              collapsedSize={isViewportSmallerThanLg ? 228 : 245}
            >
              <StyledInputsContainer>
                <LocalizationInput />
                <OccasionInput options={occasions} />
                <DateInput />
                <GuestsNumberInput />
                <VenueTypeInput />
              </StyledInputsContainer>
            </Collapse>
          )}

          <StyledCollapseTypographyContainer>
            <Button variant="outlined" onClick={collapseSearchBar}>
              {!isCollapsed
                ? "I want to be more specific (4)"
                : "I don’t want to be that specific"}
            </Button>
          </StyledCollapseTypographyContainer>

          <Button variant="contained" type="submit">
            Search for venue
          </Button>
        </StyledSearchBarContainer>
      </form>
    </FormProvider>
  );
};
