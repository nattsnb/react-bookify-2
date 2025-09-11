import { Search } from "@mui/icons-material";
import { ListItem, InputAdornment } from "@mui/material";
import { StyledFormControl, StyledTextField } from "../SearchBar.styled.ts";
import { useLocalizationInput } from "./useLocalizationInput";
import { StyledSuggestionList } from "./LocalizationInput.styled.ts";

type LocalizationInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const LocalizationInput = ({
  value,
  onChange,
}: LocalizationInputProps) => {
  const { suggestions, isAutocompleteOpen, setIsAutocompleteOpen } =
    useLocalizationInput(value);

  return (
    <StyledFormControl fullWidth>
      <StyledTextField
        id="localization"
        fullWidth
        value={value ?? ""}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onFocus={() => setIsAutocompleteOpen(true)}
        onBlur={() => setIsAutocompleteOpen(false)}
        placeholder="localization"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          autoComplete: "off",
        }}
      />
      {isAutocompleteOpen && suggestions.length > 0 && (
        <StyledSuggestionList>
          {suggestions.map((name, idx) => (
            <ListItem
              key={idx}
              onMouseDown={() => {
                onChange(name);
                setIsAutocompleteOpen(false);
              }}
            >
              {name}
            </ListItem>
          ))}
        </StyledSuggestionList>
      )}
    </StyledFormControl>
  );
};
