import { useFormContext, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledFormControl, StyledTextField } from "./SearchBar.styled.ts";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";
import { Search } from "@mui/icons-material";
import { InputLabel } from "@mui/material";

export const LocalizationInput = () => {
  const { control, watch } = useFormContext<SearchBarFormValuesDto>();
  const localizationValue = watch("localization");
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    setShrink(!!localizationValue);
  }, [localizationValue]);

  return (
    <StyledFormControl fullWidth>
      <InputLabel shrink={shrink}>
        <Search />
        localization
      </InputLabel>

      <Controller
        name="localization"
        control={control}
        render={({ field }) => (
          <StyledTextField
            id="localization"
            fullWidth
            value={field.value ?? ""}
            onChange={(event) => {
              setShrink(!!event.target.value);
              field.onChange(event);
            }}
            onFocus={() => setShrink(true)}
            label=""
          />
        )}
      />
    </StyledFormControl>
  );
};
