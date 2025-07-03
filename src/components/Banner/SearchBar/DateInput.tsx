import { useState, useEffect } from "react";
import { Popover } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useFormContext, Controller } from "react-hook-form";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import {
  StyledFormControl,
  StyledInputLabel,
  StyledTextField,
} from "./SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

export const DateInput = () => {
  const { control, watch } = useFormContext<SearchBarFormValuesDto>();
  const range = watch("dateRange") ?? [null, null];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    setShrink(!!range[0] || !!range[1] || Boolean(anchorEl));
  }, [range, anchorEl]);

  const openPicker = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const closePicker = () => setAnchorEl(null);

  const displayValue =
    range[0] && range[1]
      ? `${range[0].toLocaleDateString()} – ${range[1].toLocaleDateString()}`
      : "";

  return (
    <StyledFormControl fullWidth>
      <StyledInputLabel shrink={shrink}>
        <CalendarMonthIcon />
        date range
      </StyledInputLabel>

      <Controller
        name="dateRange"
        control={control}
        defaultValue={[null, null]}
        render={({ field }) => (
          <>
            <StyledTextField
              variant="standard"
              fullWidth
              value={displayValue}
              onClick={openPicker}
              inputProps={{ readOnly: true }}
            />
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={closePicker}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <div style={{ padding: 8, background: "#fff" }}>
                <DateRangePicker
                  calendars={1}
                  value={field.value ?? [null, null]}
                  onChange={(val) =>
                    field.onChange(val as [Date | null, Date | null])
                  }
                  onAccept={closePicker}
                  onClose={closePicker}
                  renderInput={() => <></>}
                />
              </div>
            </Popover>
          </>
        )}
      />
    </StyledFormControl>
  );
};
