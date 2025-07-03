import { useState, useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useFormContext, } from "react-hook-form";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import {
  StyledFormControl,
  StyledInputLabel,
  StyledTextField,
} from "./SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

export const DateInput = () => {
  const { watch, setValue } = useFormContext<SearchBarFormValuesDto>();
  const range = watch("dateRange") ?? [null, null];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    setShrink(!!range[0] || !!range[1] || Boolean(anchorEl));
  }, [range, anchorEl]);

  return (
    <StyledFormControl fullWidth>
      <StyledInputLabel shrink={shrink}>
        <CalendarMonthIcon />
        date range
      </StyledInputLabel>


      <DateRangePicker
        value={range}
        onChange={(newValue) => {
          setValue("dateRange", newValue);
          console.log(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <StyledTextField
              variant="standard"
              fullWidth
              value={range[0]?.toISOString()}
              inputProps={{ readOnly: true }}
              {...startProps}
            />
            <StyledTextField
              variant="standard"
              fullWidth
              value={range[0]?.toISOString()}
              inputProps={{ readOnly: true }}
              {...endProps}
            />
          </>
        )}
      />
    </StyledFormControl>
  );
};
