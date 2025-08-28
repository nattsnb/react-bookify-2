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
  StyledForm,
  StyledTextField,
  StyledSubmitButton,
  StyledParagraph,
  StyledErrorMessageContainer,
} from "./LoginView.styled.ts";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { RegisterFormValuesDto } from "../../shared/types/forms/register-form.dto.ts";
import { LoginAndSignUpDto } from "../../shared/types/tables/authentication/login-and-sign-up.dto.ts";
import { useAuthentication } from "../../contexts/authenticationContext.tsx";
import { useLocation, useNavigate } from "react-router-dom";

const googleLogoImageSrc =
  "https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw";

export function LoginView() {
  const [activeMode, setActiveMode] = useState<"login" | "register">("login");
  const { login, register: registerUser } = useAuthentication();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = (location.state as any)?.from?.pathname ?? "/account/";

  const loginForm = useForm<LoginAndSignUpDto>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmitLoginForm: SubmitHandler<LoginAndSignUpDto> = async (
    values,
  ) => {
    try {
      const user = await login(values);
      if (user) {
        navigate(redirectTo, { replace: true });
        return;
      }
      loginForm.setError("root", {
        type: "server",
        message: "Wrong credentials",
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const registerForm = useForm<RegisterFormValuesDto>({
    defaultValues: { email: "", password: "", retypePassword: "" },
  });

  const onSubmitRegisterForm: SubmitHandler<RegisterFormValuesDto> = async (
    values,
  ) => {
    try {
      if (values.password !== values.retypePassword) {
        registerForm.setError("retypePassword", {
          type: "validate",
          message: "Passwords do not match",
        });
        return;
      }
      const user = await registerUser({
        email: values.email,
        password: values.password,
      });
      if (user) navigate(redirectTo, { replace: true });
    } catch (error) {
      console.error("Register error:", error);
    }
  };

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
                      src={googleLogoImageSrc}
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
                <StyledForm
                  onSubmit={loginForm.handleSubmit(onSubmitLoginForm)}
                >
                  <StyledTextField
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    {...loginForm.register("email", { required: true })}
                  />
                  <StyledTextField
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    {...loginForm.register("password", { required: true })}
                  />
                  <StyledErrorMessageContainer>
                    {loginForm.formState.errors.root?.message && (
                      <StyledParagraph role="alert" aria-live="polite">
                        {loginForm.formState.errors.root.message}
                      </StyledParagraph>
                    )}
                  </StyledErrorMessageContainer>

                  <StyledSubmitButton
                    type="submit"
                    disabled={loginForm.formState.isSubmitting}
                  >
                    Log in
                  </StyledSubmitButton>
                </StyledForm>
              </>
            ) : (
              <>
                <StyledGoogleButton>
                  <StyledLogoContainer>
                    <img
                      src={googleLogoImageSrc}
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
                <StyledForm
                  onSubmit={registerForm.handleSubmit(onSubmitRegisterForm)}
                >
                  <StyledTextField
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    {...registerForm.register("email", { required: true })}
                  />
                  <StyledTextField
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    {...registerForm.register("password", { required: true })}
                  />
                  <StyledTextField
                    type="password"
                    autoComplete="current-password"
                    placeholder="Retype password"
                    {...registerForm.register("retypePassword", {
                      required: true,
                    })}
                  />
                  <StyledErrorMessageContainer>
                    {registerForm.formState.errors.retypePassword?.message && (
                      <StyledParagraph>
                        {registerForm.formState.errors.retypePassword.message}
                      </StyledParagraph>
                    )}
                  </StyledErrorMessageContainer>
                  <StyledSubmitButton
                    type="submit"
                    disabled={registerForm.formState.isSubmitting}
                  >
                    Register
                  </StyledSubmitButton>
                </StyledForm>
              </>
            )}
          </StyledFormContainer>
        </StyledLogInContainer>
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
