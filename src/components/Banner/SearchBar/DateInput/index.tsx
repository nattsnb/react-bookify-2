import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StyledFormControl, StyledInputLabel } from "../SearchBar.styled.ts";
import {
  StyledDateInputDiv,
  StartDateButton,
  EndDateButton,
  SplitButtonGroup,
  StyledActionBar,
} from "./DateInput.styled.ts";
import { StyledIconContainer } from "./DateInput.styled.ts";
import {
  type DateRange,
  DesktopDateRangePicker,
} from "@mui/x-date-pickers-pro";
import type { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

type DateInputProps = {
  value: DateRange<Dayjs>;
  onChange: (value: DateRange<Dayjs>) => void;
};

export const DateInput = ({ value, onChange }: DateInputProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [startDate, endDate] = value ?? [null, null];
  const [activeDateButton, setActiveDateButton] = useState<
    "start" | "end" | null
  >(null);

  useEffect(() => {
    if (isPickerOpen) {
      setActiveDateButton("start");
    }
  }, [isPickerOpen]);

  const startIsActive =
    activeDateButton === "start" || (isPickerOpen && !startDate && !endDate);

  const endIsActive = activeDateButton === "end";

  return (
    <DesktopDateRangePicker
      value={value}
      onChange={(newValue) => {
        onChange(newValue);
        const [newStart, newEnd] = newValue;
        if (newStart && !newEnd) {
          setActiveDateButton("end");
        }
        if (newStart && newEnd) {
          setActiveDateButton("start");
        }
      }}
      open={isPickerOpen}
      onOpen={() => {
        setIsPickerOpen(true);
      }}
      onClose={() => {
        setIsPickerOpen(false);
        setActiveDateButton(null);
      }}
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
                <StartDateButton isactive={startIsActive}>
                  {startDate ? startDate.format("YYYY-MM-DD") : "starts at"}
                </StartDateButton>
                <EndDateButton isactive={endIsActive}>
                  {endDate ? endDate.format("YYYY-MM-DD") : "ends at"}
                </EndDateButton>
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
