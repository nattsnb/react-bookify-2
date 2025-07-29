import { IconButton, InputAdornment } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import {
  StyledFormControl,
  StyledGuestInputTextField,
} from "./SearchBar.styled.ts";

type GuestsNumberInputProps = {
  value: number | null | undefined;
  onChange: (value: number | null) => void;
};

export const GuestsNumberInput = ({
  value,
  onChange,
}: GuestsNumberInputProps) => {
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

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numeric = parseInt(inputValue, 10);

    if (inputValue === "") {
      onChange(null);
    } else if (!isNaN(numeric) && numeric >= 1) {
      onChange(numeric);
    }
  };

  return (
    <StyledFormControl fullWidth>
      <StyledGuestInputTextField
        id="guests"
        type="number"
        placeholder="guests"
        fullWidth
        value={value ?? ""}
        onChange={handleManualInput}
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
    </StyledFormControl>
  );
};
