import { Link, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledNavBarContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${theme.spacing(30)};
  box-shadow:  0 7px 7px -7px  ${theme.palette.secondary.light};
  margin-bottom: ${theme.spacing(2)};
  height: 57px;

  ${theme.breakpoints.down("lg")} {
    padding: 0 ${theme.spacing(12)};

    ${theme.breakpoints.down("md")} {
      padding: 0 ${theme.spacing(6)};
        height: 57px;
`,
);

export const StyledNavBarLinksContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 590px;
  width: 100%;
  margin-left: ${theme.spacing(16)};
  color: ${theme.palette.secondary.dark};
`,
);

export const StyledLoginLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
`,
);

export const StyledTypographyForHomeLink = styled(Typography)`
  font-size: 37px;
`;
