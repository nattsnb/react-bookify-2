import {
  Checkbox,
  ListItemButton,
  ListItemText,
  Slider,
  styled,
} from "@mui/material";

export const StyledResetButton = styled("button")(
  ({ theme }) => `
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: ${theme.palette.primary.main};
    font-weight: bold;
  `,
);

export const StyledSlider = styled(Slider)(
  ({ theme }) => `
    & .MuiSlider-valueLabel {
      background-color: ${theme.palette.primary.main};
    }
    & .MuiSlider-track {
      background: linear-gradient(
        to bottom,
        ${theme.palette.primary.main},
        ${theme.palette.secondary.light}
      );
      border: none;
    }
  
    & .MuiSlider-thumb {
      background: linear-gradient(
        to bottom,
        ${theme.palette.primary.main},
        ${theme.palette.secondary.light}
      );
      border: 2px solid white;
    }
    margin-top: ${theme.spacing(12)};
    width: 70%;
  `,
);

export const StyledSliderContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAmenityButton = styled(ListItemButton)(
  ({ theme }) => `
    align-items: center;
    gap: ${theme.spacing(3)};
  `,
);

export const StyledCheckbox = styled(Checkbox)`
  align-self: flex-end;
`;

export const StyledAmenityText = styled(ListItemText)(
  ({ theme }) => `
    margin: 0;
    display: flex;
    align-items: flex-end;
    padding-top: ${theme.spacing(3)};
  `,
);
