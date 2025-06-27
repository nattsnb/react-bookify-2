import { IconButton, InputAdornment } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import {
  StyledFormControl,
  StyledGuestInputTextField,
} from "./SearchBar.styled.ts";
import { useFormContext, Controller } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

export const GuestsNumberInput = () => {
  const { control } = useFormContext<SearchBarFormValuesDto>();

  return (
    <StyledFormControl fullWidth>
      <Controller
        name="guests"
        control={control}
        render={({ field }) => {
          const { value, onChange } = field;

          const handleIncrement = () => {
            const current = Number(value) || 0;
            onChange(current + 1);
          };

          const handleDecrement = () => {
            const current = Number(value) || 0;
            if (current <= 1) {
              onChange(null);
            } else {
              onChange(current - 1);
            }
          };

          const handleManualInput = (
            e: React.ChangeEvent<HTMLInputElement>,
          ) => {
            const inputValue = e.target.value;
            const numeric = parseInt(inputValue, 10);

            if (inputValue === "") {
              onChange(null);
            } else if (!isNaN(numeric) && numeric >= 1) {
              onChange(numeric);
            }
          };

          return (
            <StyledGuestInputTextField
              id="guests"
              type="number"
              label="guests"
              fullWidth
              value={value ?? ""}
              onChange={handleManualInput}
              InputLabelProps={{
                shrink: Boolean(value),
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={handleDecrement}>
                      <Remove />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleIncrement}>
                      <Add />
                    </IconButton>
                  </InputAdornment>
                ),
                inputProps: {
                  min: 1,
                },
                notched: false,
              }}
            />
          );
        }}
      />
    </StyledFormControl>
  );
};
