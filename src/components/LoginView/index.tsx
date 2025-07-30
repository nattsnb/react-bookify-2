import { useState } from "react";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.ts";
import { BackButton } from "../BackButton";
import {
  StyledFormContainer,
  StyledLoginAndRegisterButtonsContainer,
  StyledLogInContainer,
  StyledModeButton,
  StyledBodyContainer,
  StyledGoogleButton,
  StyledFacebookButton,
  StyledLogoContainer,
  StyledFacebookIcon,
  StyledDividersContainer,
} from "./LoginView.styled.ts";

export function LoginView() {
  const [activeMode, setActiveMode] = useState<"login" | "register">("login");

  const toggleToLoginMode = () => {
    if (activeMode === "register") {
      setActiveMode("login");
    }
  };

  const toggleToRegisterMode = () => {
    if (activeMode === "login") {
      setActiveMode("register");
    }
  };

  return (
    <PageWidthContainer>
      <StyledBodyContainer>
        <BackButton message={"back"} />
        <StyledLogInContainer>
          <StyledLoginAndRegisterButtonsContainer>
            <StyledModeButton
              isactive={activeMode === "login"}
              onClick={toggleToLoginMode}
            >
              Login
            </StyledModeButton>
            <StyledModeButton
              isactive={activeMode === "register"}
              onClick={toggleToRegisterMode}
            >
              Register
            </StyledModeButton>
          </StyledLoginAndRegisterButtonsContainer>
          <StyledFormContainer>
            {activeMode === "login" ? (
              <>
                {" "}
                <StyledGoogleButton>
                  <StyledLogoContainer>
                    <img
                      src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
                      alt="Google Logo"
                      width="32"
                    />
                  </StyledLogoContainer>
                  Login with Google
                </StyledGoogleButton>
                <StyledFacebookButton>
                  <StyledLogoContainer>
                    <StyledFacebookIcon />
                  </StyledLogoContainer>
                  Login with Facebook
                </StyledFacebookButton>
                <StyledDividersContainer>
                  <div className="line" />
                  <div className="text">or</div>
                  <div className="line" />
                </StyledDividersContainer>
              </>
            ) : (
              <>
                <StyledGoogleButton>
                  <StyledLogoContainer>
                    <img
                      src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
                      alt="Google Logo"
                      width="32"
                    />
                  </StyledLogoContainer>
                  Register with Google
                </StyledGoogleButton>
                <StyledFacebookButton>
                  <StyledLogoContainer>
                    <StyledFacebookIcon />
                  </StyledLogoContainer>
                  Register with Facebook
                </StyledFacebookButton>
                <StyledDividersContainer>
                  <div className="line" />
                  <div className="text">or</div>
                  <div className="line" />
                </StyledDividersContainer>
              </>
            )}
          </StyledFormContainer>
        </StyledLogInContainer>
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
