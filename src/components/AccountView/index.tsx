import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer";
import { Divider } from "@mui/material";
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
import { useEffect, useState } from "react";
import type { ReservationDto } from "../../shared/types/tables/reservation/reservation.dto.ts";
import { reservationApi } from "../../shared/api/reservationApi.ts";

export function AccountView() {
  const { user, logout } = useAuthentication();
  const [reservations, setReservations] = useState<ReservationDto[] | null>(
    null,
  );

  useEffect(() => {
    if (!user?.id) return;
    (async () => {
      const data = await reservationApi.getReservationsByUser(user.id);
      setReservations(data ?? []);
    })();
  }, [user?.id]);

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
              {reservations === null ? (
                <p>loading your reservations…</p>
              ) : reservations.length > 0 ? (
                <ul>
                  {reservations.map((reservation) => (
                    <li key={reservation.id}>
                      #{reservation.id} • venue: {reservation.venueId} •{" "}
                      {new Date(reservation.dateStart).toLocaleDateString()} –{" "}
                      {new Date(reservation.dateEnd).toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>you have no reservations</p>
              )}
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
