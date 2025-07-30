import {styled} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const StyledBackButtonContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: ${theme.spacing(16)};
    ${theme.breakpoints.down("md")} {
      margin-bottom: ${theme.spacing(8)};
    }
  `,
);

export const StyledBackButtonFlexDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)(
  ({ theme }) => `
    margin-right: ${theme.spacing(2)};
    margin-left: ${theme.spacing(3)};
  `,
);