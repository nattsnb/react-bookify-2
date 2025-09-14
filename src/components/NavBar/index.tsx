import Typography from "@mui/material/Typography";
import { Link, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledAccountCircleIcon,
  StyledLoginLink,
  StyledNavBarContainer,
  StyledNavBarLinksContainer,
  StyledTypographyForHomeLink,
} from "./NavBar.styled.ts";
import { useAuthentication } from "../../contexts/authenticationContext.tsx";
import { Urls } from "../../shared/constants/urls.ts";

export function NavBar() {
  const { user } = useAuthentication();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <StyledNavBarContainer>
        {isDesktop ? (
          <>
            <div>
              <Link href={Urls.HOME}>
                <StyledTypographyForHomeLink variant="homeLink">
                  bookify
                </StyledTypographyForHomeLink>
              </Link>
            </div>
            <StyledNavBarLinksContainer>
              <Link href={Urls.ABOUT_US} variant="link">
                <Typography variant="aboutUsLink">about us</Typography>
              </Link>
              <Link href={Urls.YOUR_FAVOURITES} variant="link">
                your favourites
              </Link>
              <Link href={Urls.START_HOSTING} variant="link">
                start hosting
              </Link>
              {user ? (
                <Link href={Urls.ACCOUNT}>
                  <StyledAccountCircleIcon />
                </Link>
              ) : (
                <StyledLoginLink href={Urls.LOGIN} variant="boldLink">
                  login
                </StyledLoginLink>
              )}
            </StyledNavBarLinksContainer>
          </>
        ) : (
          <>
            <div>
              <MenuIcon />
            </div>
            <div>
              <Link href={Urls.HOME}>
                <StyledTypographyForHomeLink variant="homeLink">
                  bookify
                </StyledTypographyForHomeLink>
              </Link>
            </div>
            {user ? (
              <Link href={Urls.ACCOUNT}>
                <StyledAccountCircleIcon />
              </Link>
            ) : (
              <StyledLoginLink href={Urls.LOGIN} variant="boldLink">
                login
              </StyledLoginLink>
            )}
          </>
        )}
      </StyledNavBarContainer>
    </div>
  );
}
