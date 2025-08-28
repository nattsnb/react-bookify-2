import { Controller, useFormContext } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../../shared/types/forms/search-bar-form-values.dto.ts";
import { GuestsNumberInput } from "./GuestsNumberInput";

export const GuestsController = () => {
  const { control } = useFormContext<SearchBarFormValuesDto>();

  return (
    <Controller
      name="guests"
      control={control}
      render={({ field }) => (
        <GuestsNumberInput value={field.value} onChange={field.onChange} />
      )}
    />
  );
};
