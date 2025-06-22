import { InputAdornment } from "@mui/material";
import {
  StyledInputsContainer,
  StyledSearchBarTextField,
} from "./SearchBar.styled.js";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import type { useForm } from "react-hook-form";
import type { SearchBarFormValuesDto } from "../../../shared/types/forms/search-bar-form-values.dto.ts";

const textFieldsDataArray = [
  {
    id: 0,
    placeholder: "localization",
    startAdornmentIcon: <Search />,
    endAdornmentIcon: null,
  },
  {
    id: 1,
    placeholder: "occasion",
    startAdornmentIcon: <Search />,
    endAdornmentIcon: null,
  },
  {
    id: 2,
    placeholder: "date",
    startAdornmentIcon: <CalendarMonthIcon />,
    endAdornmentIcon: null,
  },
  {
    id: 3,
    placeholder: "guests",
    startAdornmentIcon: <RemoveIcon />,
    endAdornmentIcon: <AddIcon />,
  },
  {
    id: 4,
    placeholder: "venue type",
    startAdornmentIcon: <Search />,
    endAdornmentIcon: null,
  },
];

interface InputsContainerProps {
  register: ReturnType<typeof useForm<SearchBarFormValuesDto>>["register"];
  isCollapsed?: boolean;
}

export const InputsContainer = ({
  register,
  isCollapsed: isCollapsed,
}: InputsContainerProps) => {
  return (
    <StyledInputsContainer>
      {textFieldsDataArray.map((dataEntry) => (
        <StyledSearchBarTextField
          key={dataEntry.id}
          variant="outlined"
          placeholder={dataEntry.placeholder}
          isCollapsed={isCollapsed}
          {...register(dataEntry.placeholder, { required: true })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {dataEntry.startAdornmentIcon}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {dataEntry.endAdornmentIcon}
              </InputAdornment>
            ),
          }}
        />
      ))}
    </StyledInputsContainer>
  );
};
