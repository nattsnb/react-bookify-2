import type { AuthenticationResponseDto } from "../types/tables/authentication/authentication-response.dto.ts";
import type { LoginAndSignUpDto } from "../types/tables/authentication/login-and-sign-up.dto.ts";

const API_URL = "http://localhost:3000";

const loginUser = async (
  credentials: LoginAndSignUpDto,
): Promise<AuthenticationResponseDto | undefined> => {
  try {
    const response = await fetch(`${API_URL}/authentication/log-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(`Server responded ${response.status}`);
    }
    return (await response.json()) as Promise<AuthenticationResponseDto>;
  } catch (error) {
    console.error("Error logging user:", error);
    return undefined;
  }
};

const registerUser = async (
  credentials: LoginAndSignUpDto,
): Promise<AuthenticationResponseDto | undefined> => {
  try {
    const response = await fetch(`${API_URL}/authentication/log-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(`Server responded ${response.status}`);
    }
    return (await response.json()) as Promise<AuthenticationResponseDto>;
  } catch (error) {
    console.error("Error registering user:", error);
    return undefined;
  }
};

export const authenticationApi = {
  loginUser,
  registerUser,
};
