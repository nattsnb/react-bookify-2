import * as React from "react";
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
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
} from "./Calendar.styled.ts";
import { useCalendar } from "./useCalendar.ts";
import { SectionTitleContainer } from "../VenueDetailedView.styled.ts";
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";
import { useError } from "../../../contexts/errorContext.ts";
import { useCurrency } from "../../../contexts/currencyContext.tsx";
import type { Dayjs } from "dayjs";

interface CalendarProps {
  venue: VenueDto;
}

export default function Calendar({ venue }: CalendarProps) {
  const {
    whichCalendarIsActive,
    startDate,
    endDate,
    isOneDayActive,
    isCalendarError,
    daysBetween,
    handleStartsAtClick,
    handleEndsAtClick,
    handleCheckboxChange,
    handleStartDateChange,
    handleEndDateChange,
  } = useCalendar();

  const { isError } = useError();
  const { currencyRate } = useCurrency();

  if (!venue) return null;

  const drawerOpen = false;

  let fullPriceInPLN: number | null;
  const priceInPLN = currencyRate
    ? Math.round((venue.pricePerNightInEURCent / 100) * currencyRate)
    : null;

  if (isOneDayActive) {
    fullPriceInPLN = priceInPLN;
  } else {
    fullPriceInPLN = daysBetween * (priceInPLN ?? 0);
  }

  return (
    <>
      {!drawerOpen && (
        <>
          <SectionTitleContainer>Book this venue</SectionTitleContainer>
          <Divider variant="dark" />
        </>
      )}

      <StyledButtonGroup>
        <StyledStartsAtButton
          onClick={handleStartsAtClick}
          whichCalendarIsActive={whichCalendarIsActive}
        >
          starts at
        </StyledStartsAtButton>
        <StyledEndsAtButton
          onClick={handleEndsAtClick}
          whichCalendarIsActive={whichCalendarIsActive}
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
    </>
  );
}
