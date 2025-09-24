import { Search } from "@mui/icons-material";
import { ListItem, InputAdornment } from "@mui/material";
import { StyledFormControl, StyledTextField } from "../SearchBar.styled.ts";
import { useLocalizationInput } from "./useLocalizationInput";
import { StyledSuggestionList } from "./LocalizationInput.styled.ts";

type LocalizationInputProps = {
  value: string;
  onChange: (value: string) => void;
  setIsSearchBarCollapsed: (v: boolean) => void;
};

export const LocalizationInput = ({
  value,
  onChange,
  setIsSearchBarCollapsed,
}: LocalizationInputProps) => {
  const { suggestions, isAutocompleteOpen, setIsAutocompleteOpen } =
    useLocalizationInput(value);

  const onFocusLocalizationInput = () => {
    setIsAutocompleteOpen(true);
    setIsSearchBarCollapsed(true);
  };

  return (
    <StyledFormControl fullWidth>
      <StyledTextField
        id="localization"
        fullWidth
        value={value ?? ""}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onFocus={onFocusLocalizationInput}
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
          {suggestions.map((name) => (
            <ListItem
              key={name}
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
