import { Box, Button, MenuItem } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  StyledLimitWrapper,
  StyledResultsToolbarDiv,
  StyledResultsElementsWrapper,
  StyledLimitTextFiled,
  StyledLimitSettingsContainer,
} from "./ExploreVenuesView.styled.ts";
import { ResultsList } from "./ResultsList";

const ARRAY_OF_LIMIT_SETTINGS = [6, 18, 36];

interface ElementsWrapperProps {
  limit: number;
  setLimit: (limit: number) => void;
}

export function ElementsWrapper({ limit, setLimit }: ElementsWrapperProps) {
  const handleNumberOfCardsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLimit(Number(event.target.value));
  };

  return (
    <StyledResultsElementsWrapper>
      <StyledResultsToolbarDiv>
        <StyledLimitSettingsContainer>
          <Box>show</Box>
          <StyledLimitWrapper>
            <StyledLimitTextFiled
              id="select-number-of-cards"
              select
              value={limit}
              onChange={handleNumberOfCardsChange}
              variant="outlined"
            >
              {ARRAY_OF_LIMIT_SETTINGS.map((setting) => (
                <MenuItem key={setting} value={setting}>
                  {setting}
                </MenuItem>
              ))}
            </StyledLimitTextFiled>
          </StyledLimitWrapper>

          <Box>on the page</Box>
        </StyledLimitSettingsContainer>
        <Button>
          <Typography>sort</Typography>
        </Button>
      </StyledResultsToolbarDiv>
      <ResultsList limit={limit} />
    </StyledResultsElementsWrapper>
  );
}
