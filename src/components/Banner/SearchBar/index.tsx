import React from "react";
import { useForm } from "react-hook-form";
import { Button, Collapse, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledCollapseTypographyContainer,
  StyledSearchBarContainer,
} from "./SearchBar.styled.ts";
import { InputsContainer } from "./InputsContainer.tsx";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

export const SearchBar = () => {
  const { register, handleSubmit } = useForm<SearchBarFormValuesDto>();
  const onSubmit = (data: SearchBarFormValuesDto) => {
    console.log(data);
  };
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const collapseSearchBar = () => {
    setIsCollapsed((prev) => !prev);
  };
  const theme = useTheme();
  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchBarContainer>
        {isViewportSmallerThanMd && (
          <Collapse in={isCollapsed} collapsedSize={95}>
            <InputsContainer register={register} />
          </Collapse>
        )}
        {isViewportLargerThanMd && (
          <Collapse
            in={isCollapsed}
            orientation="horizontal"
            collapsedSize={isViewportSmallerThanLg ? 228 : 245}
          >
            <InputsContainer register={register} isCollapsed={isCollapsed} />
          </Collapse>
        )}
        <StyledCollapseTypographyContainer>
          <Button variant="outlined" onClick={collapseSearchBar}>
            {!isCollapsed
              ? "I want to be more specific (4)"
              : "I don`t want to be that specific"}
          </Button>
        </StyledCollapseTypographyContainer>

        <Button variant="contained" type="submit">
          Search for venue
        </Button>
      </StyledSearchBarContainer>
    </form>
  );
};
