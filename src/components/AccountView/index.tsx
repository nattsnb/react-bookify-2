import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledContainer,
  StyledEditDetailsButton,
  StyledLogoutButton,
  StyledSectionContainer,
  StyledSectionTittle,
} from "./AccountView.styled";
import { useAuthentication } from "../../contexts/authenticationContext.tsx";
import { useNavigate } from "react-router-dom";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.ts";

export function AccountView() {
  const { user, logout } = useAuthentication();
  const navigate = useNavigate();

  const onClickLogoutButton = async () => {
    try {
      await logout();
      navigate("/login/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  console.log(user);
  return (
    <PageWidthContainer>
      {user && (
        <>
          <StyledContainer>
            <StyledSectionContainer>
              <StyledSectionTittle>user data</StyledSectionTittle>
              <Divider variant="light" />
              <p>name: {user.name ?? "-"}</p>
              <p>email: {user.email ?? "-"}</p>
              <p>phone number: {user.phoneNumber ?? "-"}</p>
              <VerticalContainer>
                <StyledEditDetailsButton>
                  edit your details
                </StyledEditDetailsButton>
              </VerticalContainer>
            </StyledSectionContainer>
            <StyledSectionContainer>
              <StyledSectionTittle>my reservations</StyledSectionTittle>
              <Divider variant="light" />
            </StyledSectionContainer>
          </StyledContainer>
          <StyledLogoutButton onClick={onClickLogoutButton}>
            Log out
          </StyledLogoutButton>
        </>
      )}
    </PageWidthContainer>
  );
}
