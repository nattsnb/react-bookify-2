import { styled, Button } from "@mui/material";

export const StyledReservationCardWrapper = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  margin: ${theme.spacing(1)};
  align-items: center;
  margin-bottom: ${theme.spacing(5)};
  margin-top: ${theme.spacing(5)};
  
  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    }
  `,
);

export const StyledDetailsContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing(1)};
  max-height: 228px;
  width: 100%;
  align-items: center;
  `,
);

export const StyledDatesContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 300px;
  align-items: space-between;
  margin: ${theme.spacing(1)};
  `,
);

export const StyledDateWithNameContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing(1)};
  width: 100%;
  `,
);

export const StyledNameContainer = styled("div")(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  text-align: right;
  width: 100%;
  `,
);

export const StyledDateContainer = styled("div")(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  width: 100%;
  text-align: right;
  `,
);

export const StyledReservationButton = styled(Button)(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  max-width: 220px;
  `,
);
