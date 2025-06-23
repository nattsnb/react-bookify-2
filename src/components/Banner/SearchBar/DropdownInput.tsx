import React from "react";
import { MenuItem, InputAdornment } from "@mui/material";
import { StyledSearchBarTextField } from "./SearchBar.styled";
import type { useForm } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

interface DropdownInputProps {
  name: keyof SearchBarFormValuesDto;
  label: string;
  options: { label: string; value: any }[];
  register: ReturnType<typeof useForm<SearchBarFormValuesDto>>["register"];
  multiple?: boolean;
  isCollapsed?: boolean;
  startAdornmentIcon?: React.ReactNode;
  endAdornmentIcon?: React.ReactNode;
}

export const DropdownInput = ({
  name,
  label,
  options,
  register,
  multiple = false,
  isCollapsed = false,
  startAdornmentIcon,
  endAdornmentIcon,
}: DropdownInputProps) => {
  return (
    <StyledSearchBarTextField
      select
      label={label}
      isCollapsed={isCollapsed}
      SelectProps={{ multiple }}
      {...register(name)}
      InputProps={{
        startAdornment: startAdornmentIcon && (
          <InputAdornment position="start">{startAdornmentIcon}</InputAdornment>
        ),
        endAdornment: endAdornmentIcon && (
          <InputAdornment position="end">{endAdornmentIcon}</InputAdornment>
        ),
      }}
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSearchBarTextField>
  );
};
