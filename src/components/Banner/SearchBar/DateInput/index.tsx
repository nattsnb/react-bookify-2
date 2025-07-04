import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useFormContext } from "react-hook-form";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { StyledFormControl, StyledInputLabel } from "../SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../../shared/types/forms/search-bar-form-values.dto.ts";
import { StyledDateInputDiv, DateButton } from "./DateInput.styled.ts";
import { StyledIconContainer } from "./DateInput.styled.ts";
import { ButtonGroup } from "@mui/material";
import { useDateInput } from "./useDateInput.ts";

export const DateInput = () => {
  const { isPickerOpen, setIsPickerOpen } = useDateInput();
  const { watch, setValue } = useFormContext<SearchBarFormValuesDto>();
  const range = watch("dateRange") ?? [null, null];

  return (
    <DateRangePicker
      value={range}
      onChange={(newValue) => {
        setValue("dateRange", newValue);
      }}
      open={isPickerOpen}
      onOpen={() => setIsPickerOpen(true)}
      onClose={() => setIsPickerOpen(false)}
      renderInput={() => {
        return (
          <StyledFormControl fullWidth>
            {isPickerOpen || range[0] || range[0] ? (
              <ButtonGroup variant="outlined" fullWidth>
                <DateButton isSet={!!range[0]}>
                  {range[0] ? range[0].format("YYYY-MM-DD") : "starts at"}
                </DateButton>
                <DateButton isSet={!!range[1]}>
                  {range[1] ? range[1].format("YYYY-MM-DD") : "ends at"}
                </DateButton>
              </ButtonGroup>
            ) : (
              <StyledDateInputDiv onClick={() => setIsPickerOpen(true)}>
                <StyledInputLabel>
                  <StyledIconContainer>
                    <CalendarMonthIcon />
                  </StyledIconContainer>
                  date range
                </StyledInputLabel>
              </StyledDateInputDiv>
            )}
          </StyledFormControl>
        );
      }}
    />
  );
};
