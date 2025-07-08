import { InputLabel, List, styled } from "@mui/material";

export const StyledSuggestionList = styled(List)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;

  background-color: ${({ theme }) => theme.palette.background.offDefault};
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;

  .MuiListItem-root {
    padding: ${({ theme }) => theme.spacing(1, 2)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:last-of-type {
      border-bottom: none;
    }
    &:hover {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }
  }
`;

interface StyledInputLabelProps {
  visible?: boolean;
}

export const StyledInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== "visible",
})<StyledInputLabelProps>(({ visible }) => ({
  visibility: visible ? "visible" : "hidden",
  opacity: visible ? 1 : 0,
  transition: "visibility 0.2s, opacity 0.2s",
}));
