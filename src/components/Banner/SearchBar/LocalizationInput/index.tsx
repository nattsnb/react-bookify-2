import { Search } from "@mui/icons-material";
import { InputLabel, ListItem } from "@mui/material";
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
  const {
    isLabelShrunk,
    suggestions,
    isAutocompleteOpen,
    setIsAutocompleteOpen,
  } = useLocalizationInput(value);

  return (
    <StyledFormControl fullWidth>
      <InputLabel shrink={isLabelShrunk}>
        <Search />
        localization
      </InputLabel>
      <StyledTextField
        id="localization"
        fullWidth
        value={value ?? ""}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onFocus={() => setIsAutocompleteOpen(true)}
        onBlur={() => setIsAutocompleteOpen(false)}
        label=""
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
