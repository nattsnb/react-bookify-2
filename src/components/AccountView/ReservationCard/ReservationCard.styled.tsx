import { styled, Button } from "@mui/material";

export const StyledReservationCardWrapper = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  margin: ${theme.spacing(1)};
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
  margin: ${theme.spacing(1)};
  `,
);

export const StyledDateWithNameContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing(1)};
  `,
);

export const StyledNameContainer = styled("div")(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  text-align: right;
  `,
);

export const StyledDateContainer = styled("div")(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  `,
);

export const StyledReservationButton = styled(Button)(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  width: 180px;
  `,
);
