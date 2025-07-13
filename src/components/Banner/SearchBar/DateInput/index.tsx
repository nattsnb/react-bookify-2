import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useFormContext } from "react-hook-form";
import { StyledFormControl, StyledInputLabel } from "../SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../../shared/types/forms/search-bar-form-values.dto.ts";
import {
  StyledDateInputDiv,
  DateButton,
  SplitButtonGroup,
  StyledActionBar,
} from "./DateInput.styled.ts";
import { StyledIconContainer } from "./DateInput.styled.ts";
import type { Dayjs } from "dayjs";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro";
import { useState } from "react";

export const DateInput = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const { watch, setValue } = useFormContext<SearchBarFormValuesDto>();
  const dateRange = watch("dateRange") ?? [null, null];
  const [startDate, endDate] = dateRange;

  return (
    <DesktopDateRangePicker
      value={dateRange}
      onChange={(newValue) => {
        setValue("dateRange", newValue as [Dayjs | null, Dayjs | null]);
      }}
      open={isPickerOpen}
      onOpen={() => setIsPickerOpen(true)}
      onClose={() => setIsPickerOpen(false)}
      calendars={1}
      showDaysOutsideCurrentMonth
      closeOnSelect={false}
      components={{
        ActionBar: StyledActionBar,
      }}
      componentsProps={{
        actionBar: {
          actions: ["accept"],
        },
      }}
      renderInput={() => {
        return (
          <StyledFormControl fullWidth>
            {isPickerOpen || startDate ? (
              <SplitButtonGroup
                variant="outlined"
                fullWidth
                onClick={() => setIsPickerOpen(true)}
              >
                <DateButton isSet={!!startDate}>
                  {startDate ? startDate.format("YYYY-MM-DD") : "starts at"}
                </DateButton>
                <DateButton isSet={!!endDate}>
                  {endDate ? endDate.format("YYYY-MM-DD") : "ends at"}
                </DateButton>
              </SplitButtonGroup>
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
