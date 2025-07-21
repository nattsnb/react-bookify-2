import { Link, styled } from "@mui/material";

export const StyledSMLinks = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;

  .MuiSvgIcon-root {
    font-size: 50px;
  }
`;

export const SMContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 474px;
  width: 100%;
  padding: 0 ${theme.spacing(1)};
`,
);
