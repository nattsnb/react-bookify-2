import { styled } from "@mui/material";

export const StyledVenueCardWrapper = styled("div")`
  width: 282px;
  height: 228px;
  box-shadow: 0 0 0.4vw ${({ theme }) => theme.palette.secondary.light};
`;

export const StyledPictureFrame = styled("div")`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  pointer-events: none;
`;

export const StyledUnderCardInfoBox = styled("div")`
  background-color: ${({ theme }) => theme.palette.background.offDefault};
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

export const StyledHeartDiv = styled("div")`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.63;
  border-radius: 0 0 10px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(1)};
`;

export const StyledNameDiv = styled("div")`
  height: 40px;
  width: fit-content;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.63;
  border-radius: 0 0 0 20px;
  padding: 6px 6px 3px 23px;
  text-transform: capitalize;
`;

export const StyledPictureBottomInfoDiv = styled("div")`
  height: 70px;
  width: 140px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.63;
  border-radius: 0 20px 0 0;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const StyledLocalizationDiv = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const StyledUnderCardInfoBoxHalfContainer = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledUnderCardInfoCategoryDiv = styled("div")`
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const StyledPictureFrameTopInfoContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledIconContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  pointer-events: auto;

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.background.offDefault};
    opacity: 80%;
    text-shadow: 3px 3px 15px ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const StyledPictureAndPictureFrameContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;
`;

export const StyledImg = styled("img")`
  position: absolute;
`;
