import { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";
import { useCurrency } from "../../../contexts/currencyContext.tsx";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";

export const useCalendar = () => {
  const { activeVenue } = useActiveVenue();
  const [whichCalendarIsActive, setWhichCalendarIsActive] = useState<
    "start" | "end"
  >("start");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [isOneDayActive, setIsOneDayActive] = useState(false);
  const [isCalendarError, setIsCalendarError] = useState(false);
  const [daysBetween, setDaysBetween] = useState(0);
  const { currencyRate } = useCurrency();

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
    setIsCalendarError(false);
    setWhichCalendarIsActive("start");
    setIsOneDayActive(false);
  };
  const handleEndsAtClick = () => {
    setIsCalendarError(false);
    setWhichCalendarIsActive("end");
    setIsOneDayActive(false);
  };
  const handleCheckboxChange = () => {
    setIsCalendarError(false);
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
    setStartDate(date);
  };
  const handleEndDateChange = (date: Dayjs | null) => {
    setIsCalendarError(false);
    if (startDate && date && date.isBefore(startDate, "day")) {
      setIsCalendarError(true);
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

  return {
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
  };
};
