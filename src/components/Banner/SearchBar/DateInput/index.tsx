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
import { useDateInput } from "./useDateInput.ts";
import type { Dayjs } from "dayjs";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro";

export const DateInput = () => {
  const { isPickerOpen, setIsPickerOpen } = useDateInput();
  const { watch, setValue } = useFormContext<SearchBarFormValuesDto>();
  const range = watch("dateRange") ?? [null, null];

  return (
    <DesktopDateRangePicker
      value={range}
      onChange={(newValue) => {
        setValue("dateRange", newValue as [Dayjs | null, Dayjs | null]);
      }}
      open={isPickerOpen}
      onOpen={() => setIsPickerOpen(true)}
      onClose={() => setIsPickerOpen(false)}
      calendars={1}
      showDaysOutsideCurrentMonth
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
            {isPickerOpen || range[0] || range[0] ? (
              <SplitButtonGroup variant="outlined" fullWidth>
                <DateButton isSet={!!range[0]}>
                  {range[0] ? range[0].format("YYYY-MM-DD") : "starts at"}
                </DateButton>
                <DateButton isSet={!!range[1]}>
                  {range[1] ? range[1].format("YYYY-MM-DD") : "ends at"}
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
