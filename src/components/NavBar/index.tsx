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
              <Link href={"/"}>
                <StyledTypographyForHomeLink variant="homeLink">
                  bookify
                </StyledTypographyForHomeLink>
              </Link>
            </div>
            <StyledNavBarLinksContainer>
              <Link href={"/about-us/"} variant="link">
                <Typography variant="aboutUsLink">about us</Typography>
              </Link>
              <Link href={"/your-favourites/"} variant="link">
                your favourites
              </Link>
              <Link href={"/start-hosting/"} variant="link">
                start hosting
              </Link>
              {user ? (
                <Link href={"/account/"}>
                  <StyledAccountCircleIcon />
                </Link>
              ) : (
                <StyledLoginLink href={"/login/"} variant="boldLink">
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
              <Link href={"/"}>
                <StyledTypographyForHomeLink variant="homeLink">
                  bookify
                </StyledTypographyForHomeLink>
              </Link>
            </div>
            {user ? (
              <Link href={"/account/"}>
                <StyledAccountCircleIcon />
              </Link>
            ) : (
              <StyledLoginLink href={"/login/"} variant="boldLink">
                login
              </StyledLoginLink>
            )}
          </>
        )}
      </StyledNavBarContainer>
    </div>
  );
}
