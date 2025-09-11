import {
  StyledArrowBackIosIcon,
  StyledBackButtonFlexDiv,
  StyledBackButtonContainer,
} from "./BackButton.styled.ts";
import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  message: string;
}

export const BackButton = ({ message }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <StyledBackButtonContainer>
      <StyledBackButtonFlexDiv onClick={() => navigate(-1)}>
        <StyledArrowBackIosIcon />
        <p>
          {message}
        </p>
      </StyledBackButtonFlexDiv>
    </StyledBackButtonContainer>
  );
};
