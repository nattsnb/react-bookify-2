import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer";
import { CircularProgress, Divider } from "@mui/material";
import {
  StyledContainer,
  StyledEditDetailsButton,
  StyledLogoutButton,
  StyledReservationCardsContainer,
  StyledSectionContainer,
  StyledSectionTittle,
} from "./AccountView.styled";
import { useAuthentication } from "../../contexts/authenticationContext.tsx";
import { useNavigate } from "react-router-dom";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.ts";
import { ReservationCard } from "./ReservationCard";
import { useAccountView } from "./useAccountView.ts";

export function AccountView() {
  const { myReservationsData, isLoading } = useAccountView();
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
              <StyledReservationCardsContainer>
                {isLoading && <CircularProgress />}
                {!isLoading &&
                myReservationsData &&
                myReservationsData.length > 0
                  ? myReservationsData.map((item) => (
                      <ReservationCard
                        key={item.reservation.id}
                        reservation={item.reservation}
                        venue={item.venue}
                      />
                    ))
                  : !isLoading && <p>No reservations found.</p>}
              </StyledReservationCardsContainer>
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
