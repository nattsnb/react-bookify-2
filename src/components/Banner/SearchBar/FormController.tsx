import {
  Controller,
  type ControllerRenderProps,
  type FieldPath,
  useFormContext,
} from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";
import type { ReactElement } from "react";

interface FormControllerProps {
  name: FieldPath<SearchBarFormValuesDto>;
  children: (
    field: ControllerRenderProps<
      SearchBarFormValuesDto,
      FieldPath<SearchBarFormValuesDto>
    >,
  ) => ReactElement;
}

export const FormController = ({ name, children }: FormControllerProps) => {
  const { control } = useFormContext<SearchBarFormValuesDto>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => children(field)}
    />
  );
};
