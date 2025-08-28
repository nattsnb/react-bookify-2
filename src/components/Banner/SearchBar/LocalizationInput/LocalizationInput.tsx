import { useFormContext, Controller } from "react-hook-form";
import { StyledFormControl, StyledTextField } from "../SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../../shared/types/forms/search-bar-form-values.dto.ts";
import { Search } from "@mui/icons-material";
import { InputLabel, ListItem } from "@mui/material";
import { useLocalizationInput } from "./useLocalizationInput";
import { StyledSuggestionList } from "./LocalizationInput.styled.ts";

export const LocalizationInput = () => {
  const { control, watch } = useFormContext<SearchBarFormValuesDto>();
  const localizationValue = watch("localization");

  const {
    isLabelShrunk,
    suggestions,
    isAutocompleteOpen,
    setIsAutocompleteOpen,
  } = useLocalizationInput(localizationValue);

  return (
    <StyledFormControl fullWidth>
      {/* Use the native MUI shrink prop */}
      <InputLabel shrink={isLabelShrunk}>
        <Search />
        localization
      </InputLabel>

      <Controller
        name="localization"
        control={control}
        render={({ field }) => (
          <>
            <StyledTextField
              id="localization"
              fullWidth
              value={field.value ?? ""}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              onFocus={() => {
                setIsAutocompleteOpen(true);
              }}
              onBlur={() => {
                setIsAutocompleteOpen(false);
              }}
              label="" // no built-in label so we control it via InputLabel above
            />

            {/* Suggestions dropdown */}
            {isAutocompleteOpen && suggestions.length > 0 && (
              <StyledSuggestionList>
                {suggestions.map((name, idx) => (
                  <ListItem
                    key={idx}
                    onMouseDown={() => {
                      field.onChange(name);
                      setIsAutocompleteOpen(false);
                    }}
                  >
                    {name}
                  </ListItem>
                ))}
              </StyledSuggestionList>
            )}
          </>
        )}
      />
    </StyledFormControl>
  );
};
