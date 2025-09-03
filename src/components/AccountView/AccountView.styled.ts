import { Button, styled } from "@mui/material";

export const StyledSectionContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    padding: ${theme.spacing(5)} ${theme.spacing(8)};
  margin: ${theme.spacing(2)};
  width: 100%;
  height: fit-content;
  max-width: 700px;
  `,
);

export const StyledContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: start;
  gap: ${theme.spacing(2)};

    & .one-third  { flex: 1 1 33.333%; }
    & .two-thirds { flex: 2 1 66.666%; }

  ${theme.breakpoints.down("lg")} {
    flex-direction: column;
    align-items: center;
    & .one-third,
    & .two-thirds {
      flex: 1 1 100%;
    }
  }
`,
);

export const StyledLogoutButton = styled(Button)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.background.default};
  font-weight: 600;  
  font-size: 18px;
  border-radius: 15px;
  width: 135px;
  height: 46px;
  margin-top: ${theme.spacing(6)};
  `,
);

export const StyledSectionTittle = styled("div")(
  ({ theme }) => `
  font-size: 20px;
  color: ${theme.palette.primary.main};
  font-weight: 600;
  text-align: center;
  `,
);

export const StyledEditDetailsButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.secondary.main};
  border: 2px solid rgba(0, 0, 0, 0.1); 
  font-size: 16px;
  border-radius: 15px;
  width: 150px;
  height: 46px;
  margin-top: ${theme.spacing(6)};
  text-transform: lowercase;
  `,
);

export const StyledReservationCardsContainer = styled("div")(
  ({ theme }) => `
    margin-top: ${theme.spacing(2)};
`,
);
