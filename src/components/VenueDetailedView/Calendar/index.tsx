import * as React from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  StyledEndsAtButton,
  StyledStartsAtButton,
  StyledButtonGroup,
  StyledOneDayContainer,
  StyledOneDayTypography,
  StyledCalendarContainer,
  StyledPerDayContainer,
  StyledTotalContainer,
  StyledPriceContainer,
  StyledBookButton,
  StyledBookButtonContainer,
  StyledCalendarPicker,
  StyledCalendarAndButtonsContainer,
} from "./Calendar.styled.ts";
import { useCalendar } from "./useCalendar.ts";
import { SectionTitleContainer } from "../VenueDetailedView.styled.ts";
import { useError } from "../../../contexts/errorContext.ts";
import type { Dayjs } from "dayjs";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";

export default function Calendar() {
  const {
    whichCalendarIsActive,
    startDate,
    endDate,
    isOneDayActive,
    isCalendarError,
    handleStartsAtClick,
    handleEndsAtClick,
    handleCheckboxChange,
    handleStartDateChange,
    handleEndDateChange,
    fullPriceInPLN,
    priceInPLN,
  } = useCalendar();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { isError } = useError();
  const { activeVenue } = useActiveVenue();

  if (!activeVenue) {
    return null;
  }

  return (
    <StyledCalendarAndButtonsContainer>
      {!isMobile && (
        <>
          <SectionTitleContainer>Book this venue</SectionTitleContainer>
          <Divider variant="dark" />
        </>
      )}

      <StyledButtonGroup>
        <StyledStartsAtButton
          onClick={handleStartsAtClick}
          whichcalendarisactive={whichCalendarIsActive}
        >
          starts at
        </StyledStartsAtButton>
        <StyledEndsAtButton
          onClick={handleEndsAtClick}
          whichcalendarisactive={whichCalendarIsActive}
        >
          ends at
        </StyledEndsAtButton>
      </StyledButtonGroup>
      <StyledOneDayContainer>
        <FormControlLabel
          control={
            <Checkbox
              checked={isOneDayActive}
              onChange={handleCheckboxChange}
            />
          }
          label={<StyledOneDayTypography>just one day</StyledOneDayTypography>}
        />
      </StyledOneDayContainer>
      <StyledCalendarContainer>
        {isOneDayActive ? (
          <StyledCalendarPicker
            showDaysOutsideCurrentMonth={true}
            date={startDate}
            onChange={(date) => handleStartDateChange(date as Dayjs | null)}
          />
        ) : (
          <StyledCalendarPicker
            showDaysOutsideCurrentMonth={true}
            date={whichCalendarIsActive === "start" ? startDate : endDate}
            onChange={(date) =>
              whichCalendarIsActive === "start"
                ? handleStartDateChange(date as Dayjs | null)
                : handleEndDateChange(date as Dayjs | null)
            }
          />
        )}
      </StyledCalendarContainer>

      {isCalendarError && (
        <div>that&apos;s not a time machine, start over.</div>
      )}

      <StyledPriceContainer>
        <StyledPerDayContainer>
          <div>per day</div>
          <div>{isError ? "error" : `${priceInPLN} zł`}</div>
        </StyledPerDayContainer>
        <Divider variant="light" />
        <StyledTotalContainer>
          <div>total</div>
          <div>{isError ? "error" : `${fullPriceInPLN} zł`}</div>
        </StyledTotalContainer>
        <StyledBookButtonContainer>
          <StyledBookButton variant="contained">Book</StyledBookButton>
        </StyledBookButtonContainer>
      </StyledPriceContainer>
    </StyledCalendarAndButtonsContainer>
  );
}
