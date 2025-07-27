import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StyledFormControl, StyledInputLabel } from "../SearchBar.styled.ts";
import {
  StyledDateInputDiv,
  DateButton,
  SplitButtonGroup,
  StyledActionBar,
} from "./DateInput.styled.ts";
import { StyledIconContainer } from "./DateInput.styled.ts";
import {
  type DateRange,
  DesktopDateRangePicker,
} from "@mui/x-date-pickers-pro";
import type { Dayjs } from "dayjs";
import { useState } from "react";

type DateInputProps = {
  value: DateRange<Dayjs>;
  onChange: (value: DateRange<Dayjs>) => void;
};

export const DateInput = ({ value, onChange }: DateInputProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [startDate, endDate] = value ?? [null, null];

  return (
    <DesktopDateRangePicker
      value={value}
      onChange={onChange}
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
