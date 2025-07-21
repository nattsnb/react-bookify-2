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
  StyledSearchButton,
} from "./SearchBar.styled.ts";
import { useSearchBar } from "./useSearchBar.ts";
import { LocalizationInput } from "./LocalizationInput/LocalizationInput.tsx";
import { OccasionInput } from "./OccasionInput.tsx";
import { VenueTypeInput } from "./VenueTypeInput.tsx";
import { DateInput } from "./DateInput";
import { GuestsNumberInput } from "./GuestsNumberInput.tsx";
import { useSearchDropdownData } from "./useSearchBarData.ts";
import { FormProvider } from "react-hook-form";

export const SearchBar = () => {
  const {
    form,
    form: { handleSubmit, reset },
    onSubmit,
  } = useSearchBar();

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const collapseSearchBar = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      if (!next) {
        reset();
        handleSubmit(onSubmit)();
      }
      return next;
    });
  };

  const theme = useTheme();
  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  const { loading } = useSearchDropdownData();

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
            <Collapse in={isCollapsed} collapsedSize={70}>
              <StyledInputsContainer>
                <LocalizationInput />
                <OccasionInput />
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
                <OccasionInput />
                <VenueTypeInput />
                <DateInput />
                <GuestsNumberInput />
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

          <StyledSearchButton variant="contained" type="submit">
            Search for venue
          </StyledSearchButton>
        </StyledSearchBarContainer>
      </form>
    </FormProvider>
  );
};
