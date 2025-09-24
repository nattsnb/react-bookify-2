import type { AuthenticationResponseDto } from "../types/tables/authentication/authentication-response.dto.ts";
import type { LoginAndSignUpDto } from "../types/tables/authentication/login-and-sign-up.dto.ts";
import { axiosClient } from "./axiosClient.ts";

const loginUser = async (
  credentials: LoginAndSignUpDto,
): Promise<AuthenticationResponseDto | undefined> => {
  try {
    const { data } = await axiosClient.post<AuthenticationResponseDto>(
      "/authentication/log-in",
      credentials,
    );
    return data;
  } catch (error) {
    console.error("Error logging user:", error);
    return undefined;
  }
};

const logoutUser = async (): Promise<void | undefined> => {
  try {
    const { data } = await axiosClient.post("/authentication/log-out");
    return data;
  } catch (error) {
    console.error("Error logging user:", error);
    return undefined;
  }
};

const registerUser = async (
  credentials: LoginAndSignUpDto,
): Promise<AuthenticationResponseDto | undefined> => {
  try {
    const { data } = await axiosClient.post<AuthenticationResponseDto>(
      "/authentication/sign-up",
      credentials,
    );
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    return undefined;
  }
};

const getAuthenticatedUser = async (): Promise<
  AuthenticationResponseDto | undefined
> => {
  try {
    const { data } =
      await axiosClient.get<AuthenticationResponseDto>("/authentication");
    return data;
  } catch (error) {
    console.error("Error fetching authenticated user:", error);
    return undefined;
  }
};

export const authenticationApi = {
  loginUser,
  logoutUser,
  registerUser,
  getAuthenticatedUser,
};
