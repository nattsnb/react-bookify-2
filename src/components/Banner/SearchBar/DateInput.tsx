import { useState } from "react";
import { Popover, TextField, IconButton, InputAdornment } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StyledFormControl, StyledInputLabel } from "./SearchBar.styled.ts";
import { useFormContext, Controller } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

export const DateInput = () => {
  const { control } = useFormContext<SearchBarFormValuesDto>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <StyledFormControl fullWidth>
      <StyledInputLabel>
        <CalendarMonthIcon /> date range
      </StyledInputLabel>
      <Controller
        name="dateRange"
        control={control}
        defaultValue={[null, null]}
        render={({ field }) => {
          const [start, end] = field.value ?? [null, null];
          const formattedRange =
            start && end
              ? `${start.toLocaleDateString()} – ${end.toLocaleDateString()}`
              : "";

          return (
            <>
              <TextField
                value={formattedRange}
                label=""
                onClick={handleOpen}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton tabIndex={-1}>
                        <CalendarMonthIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                <div style={{ padding: 8, background: "#fff" }}>
                  <DateRangePicker
                    calendars={1}
                    value={field.value ?? [null, null]}
                    onChange={(newValue) => {
                      field.onChange(newValue);
                      handleClose();
                    }}
                    slotProps={{
                      textField: { style: { display: "none" } },
                    }}
                  />
                </div>
              </Popover>
            </>
          );
        }}
      />
    </StyledFormControl>
  );
};
