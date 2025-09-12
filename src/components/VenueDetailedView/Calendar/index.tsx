import * as React from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
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
import {
  SectionTitleContainer,
  StyledDialogButtonsContainer,
} from "../VenueDetailedView.styled.ts";
import { useError } from "../../../contexts/errorContext.ts";
import type { Dayjs } from "dayjs";
import { useActiveVenue } from "../../../contexts/activeVenueContext.tsx";
import { StyledErrorMessageContainer } from "../../LoginView/LoginView.styled.ts";
import { useNavigate } from "react-router-dom";

export default function Calendar() {
  const {
    whichCalendarIsActive,
    startDate,
    endDate,
    isOneDayActive,
    handleStartsAtClick,
    handleEndsAtClick,
    handleCheckboxChange,
    handleStartDateChange,
    handleEndDateChange,
    fullPriceInPLN,
    priceInPLN,
    handleBookClick,
    bookingError,
    successOpen,
    setSuccessOpen,
  } = useCalendar();

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { isError } = useError();
  const { activeVenue } = useActiveVenue();

  if (!activeVenue) {
    return null;
  }

  const onBook = async () => {
    const response = await handleBookClick();
    if (response) {
      setSuccessOpen(true);
    }
  };

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
          {bookingError && (
            <StyledErrorMessageContainer>
              {bookingError}
            </StyledErrorMessageContainer>
          )}
          <StyledBookButton variant="contained" onClick={onBook}>
            Book
          </StyledBookButton>
        </StyledBookButtonContainer>
      </StyledPriceContainer>
      <Dialog open={successOpen} onClose={() => setSuccessOpen(false)}>
        <DialogTitle>Reservation confirmed</DialogTitle>
        <DialogContent>
          <div>
            <div>
              <b>{activeVenue.name}</b>
            </div>
            <div>Total: {fullPriceInPLN ?? "-"} zł</div>
          </div>
        </DialogContent>
        <StyledDialogButtonsContainer>
          <Button
            variant="contained"
            onClick={() => {
              setSuccessOpen(false);
              navigate("/account");
            }}
          >
            Go to my reservations
          </Button>
          <Button onClick={() => setSuccessOpen(false)}>Close</Button>
        </StyledDialogButtonsContainer>
      </Dialog>
    </StyledCalendarAndButtonsContainer>
  );
}
