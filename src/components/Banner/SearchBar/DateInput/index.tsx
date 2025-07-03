import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useFormContext } from "react-hook-form";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import {
  StyledDatesInputDiv,
  StyledFormControl,
  StyledInputLabel,
} from "../SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../../shared/types/forms/search-bar-form-values.dto.ts";
import {
  StyledDateTextField,
  StyledDateInputDiv,
  StyledSplitDiv,
  DateButton,
} from "./DateInput.styled.ts";
import { StyledIconContainer } from "./DateInput.styled.ts";
import { ButtonGroup } from "@mui/material";

export const DateInput = () => {
  const { watch, setValue } = useFormContext<SearchBarFormValuesDto>();
  const range = watch("dateRange") ?? [null, null];

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <DateRangePicker
      value={range}
      onChange={(newValue) => {
        setValue("dateRange", newValue);
        console.log("Nowy zakres dat:", newValue);
      }}
      open={isPickerOpen}
      onOpen={() => setIsPickerOpen(true)}
      onClose={() => setIsPickerOpen(false)}
      renderInput={(startProps, endProps) => {
        console.log("startProps", startProps);
        console.log("endProps", endProps);
        console.log("Aktualny zakres", range);

        return (
          <StyledFormControl fullWidth>
            {isPickerOpen ? (
              <ButtonGroup variant="outlined" fullWidth>
                <DateButton
                  onClick={() => setIsPickerOpen(true)}
                  isSet={!!range[0]}
                >
                  {range[0] ? range[0].format("YYYY-MM-DD") : "starts at"}
                </DateButton>
                <DateButton
                  onClick={() => setIsPickerOpen(true)}
                  isSet={!!range[1]}
                >
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
