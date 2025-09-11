import {
  Controller,
  type ControllerRenderProps,
  type FieldPath,
  useFormContext,
} from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";
import type { ReactElement } from "react";

type Name = FieldPath<SearchBarFormValuesDto>;

interface FormControllerProps<TName extends Name> {
  name: TName;
  children: (
    field: ControllerRenderProps<SearchBarFormValuesDto, TName>,
  ) => ReactElement;
}

export const FormController = <TName extends Name>({
  name,
  children,
}: FormControllerProps<TName>) => {
  const { control } = useFormContext<SearchBarFormValuesDto>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => children(field)}
    />
  );
};
