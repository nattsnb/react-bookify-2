import { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";
import { useCurrency } from "../../../contexts/currencyContext.tsx";
import { useActiveVenue } from "../../../contexts/activeVenueContext.tsx";
import { reservationApi } from "../../../shared/api/reservationApi.ts";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const useCalendar = () => {
  const { activeVenue } = useActiveVenue();
  const [whichCalendarIsActive, setWhichCalendarIsActive] = useState<
    "start" | "end"
  >("start");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [isOneDayActive, setIsOneDayActive] = useState(false);
  const [daysBetween, setDaysBetween] = useState(0);
  const { currencyRate } = useCurrency();
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!startDate || !endDate) {
      setDaysBetween(0);
    } else if (startDate.isSame(endDate, "day")) {
      setDaysBetween(1);
    } else {
      const diff = endDate.diff(startDate, "day");
      setDaysBetween(diff);
    }
  }, [startDate, endDate]);

  const handleStartsAtClick = () => {
    setBookingError(null);
    setWhichCalendarIsActive("start");
    setIsOneDayActive(false);
  };
  const handleEndsAtClick = () => {
    setBookingError(null);
    setWhichCalendarIsActive("end");
    setIsOneDayActive(false);
  };
  const handleCheckboxChange = () => {
    setBookingError(null);
    if (isOneDayActive) {
      setIsOneDayActive(false);
      setWhichCalendarIsActive("start");
    } else {
      setIsOneDayActive(true);
      setWhichCalendarIsActive("start");
      setEndDate(null);
    }
  };

  const handleStartDateChange = (date: Dayjs | null) => {
    setBookingError(null);
    setStartDate(date);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    setBookingError(null);
    if (startDate && date && date.isBefore(startDate, "day")) {
      setBookingError("End date must be after start date.");
      setEndDate(null);
      return;
    }
    setEndDate(date);
  };

  const priceInPLN =
    activeVenue && currencyRate
      ? Math.round((activeVenue.pricePerNightInEURCent / 100) * currencyRate)
      : null;

  const fullPriceInPLN =
    activeVenue && priceInPLN !== null
      ? isOneDayActive
        ? priceInPLN
        : daysBetween * priceInPLN
      : null;

  const handleBookClick = async () => {
    setBookingError(null);

    if (!activeVenue) {
      setBookingError("No active venue selected.");
      return null;
    }
    if (!startDate) {
      setBookingError("Choose start date.");
      return null;
    }

    const computedEnd = isOneDayActive ? startDate.add(1, "day") : endDate;

    if (!computedEnd) {
      setBookingError("Choose end date.");
      return null;
    }

    const payload = {
      venueId: activeVenue.id,
      dateStart: startDate.format("YYYY-MM-DD"),
      dateEnd: computedEnd.format("YYYY-MM-DD"),
    };

    try {
      const reservation = await reservationApi.createReservation(payload);
      if (!reservation) {
        setBookingError("Could not create reservation.");
        return null;
      }
      return reservation;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        navigate("/login", { replace: true, state: { from: location } });
        return null;
      }
      let message = "Unexpected error during booking.";
      if (axios.isAxiosError(error)) {
        const raw = (error.response?.data as any)?.message ?? error.message;
        message = Array.isArray(raw) ? raw.join(", ") : String(raw);
      } else if (error instanceof Error) {
        message = error.message;
      }
      setBookingError(message);
      return null;
    }
  };

  return {
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
  };
};
