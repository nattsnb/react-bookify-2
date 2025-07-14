import { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";

export const useCalendar = () => {
  const [whichCalendarIsActive, setWhichCalendarIsActive] = useState<
    "start" | "end"
  >("start");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [isOneDayActive, setIsOneDayActive] = useState(false);
  const [isCalendarError, setIsCalendarError] = useState(false);
  const [daysBetween, setDaysBetween] = useState(0);

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

  return {
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
  };
};
