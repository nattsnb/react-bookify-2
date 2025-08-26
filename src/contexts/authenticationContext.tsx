import { createContext, useContext, useEffect, useState } from "react";
import type { AuthenticationResponseDto } from "../shared/types/tables/authentication/authentication-response.dto.ts";
import { authenticationApi } from "../shared/api/authenticationApi.ts";
import type { LoginAndSignUpDto } from "../shared/types/tables/authentication/login-and-sign-up.dto.ts";

type AuthenticationContextType = {
  user: AuthenticationResponseDto | null;
  loading: boolean;
  login: (
    credentials: LoginAndSignUpDto,
  ) => Promise<AuthenticationResponseDto | undefined>;
  register: (
    credentials: LoginAndSignUpDto,
  ) => Promise<AuthenticationResponseDto | undefined>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<AuthenticationResponseDto | undefined>;
};

export const AuthenticationContext =
  createContext<AuthenticationContextType | null>(null);

export const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthenticationContext has to be used within <ErrorContext.Provider>",
    );
  }

  return context;
};

export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthenticationResponseDto | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async (): Promise<
    AuthenticationResponseDto | undefined
  > => {
    try {
      setLoading(true);
      const me = await authenticationApi.getAuthenticatedUser();
      setUser(me ?? null);
      return me;
    } catch (error) {
      console.error("Error refreshing user:", error);
      setUser(null);
      return undefined;
    } finally {
      setLoading(false);
      console.log("user refreshed");
    }
  };

  useEffect(() => {
    void refreshUser();
  }, []);

  const login = async (
    credentials: LoginAndSignUpDto,
  ): Promise<AuthenticationResponseDto | undefined> => {
    try {
      setLoading(true);
      const data = await authenticationApi.loginUser(credentials);
      if (data) setUser(data);
      return data;
    } catch (error) {
      console.error("Login error:", error);
      return undefined;
    } finally {
      setLoading(false);
      console.log("user logged in");
    }
  };

  const register = async (
    credentials: LoginAndSignUpDto,
  ): Promise<AuthenticationResponseDto | undefined> => {
    try {
      setLoading(true);
      const data = await authenticationApi.registerUser(credentials);
      if (data) setUser(data);
      return data;
    } catch (error) {
      console.error("Register error:", error);
      return undefined;
    } finally {
      setLoading(false);
      console.log("user registered");
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      await authenticationApi.logoutUser();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
      console.log("user logged out");
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, loading, login, register, logout, refreshUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
