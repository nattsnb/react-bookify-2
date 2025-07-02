import {
  Checkbox,
  ListItemButton,
  ListItemText,
  Slider,
  styled,
} from "@mui/material";

export const StyledResetButton = styled("button")`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: bold;
`;

export const StyledSlider = styled(Slider)`
  & .MuiSlider-valueLabel {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  & .MuiSlider-track {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.palette.primary.main},
      ${({ theme }) => theme.palette.secondary.light}
    );
    border: none;
  }

  & .MuiSlider-thumb {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.palette.primary.main},
      ${({ theme }) => theme.palette.secondary.light}
    );
    border: 2px solid white;
  }
  padding-left: ${({ theme }) => theme.spacing(13)};
  padding-right: ${({ theme }) => theme.spacing(13)};
  margin-top: ${({ theme }) => theme.spacing(12)};
  width: 70%;
`;

export const StyledSliderContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAmenityButton = styled(ListItemButton)`
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const StyledCheckbox = styled(Checkbox)`
  align-self: flex-end;
`;

export const StyledAmenityText = styled(ListItemText)`
  margin: 0;
  display: flex;
  align-items: flex-end;
  padding-top: ${({ theme }) => theme.spacing(3)};
`;
