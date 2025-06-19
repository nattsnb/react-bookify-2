import { createContext, useContext } from "react";

interface ErrorContextType {
  isError: boolean;
  setIsError: (value: boolean) => void;
}

export const ErrorContext = createContext<ErrorContextType | null>(null);

export const useError = () => {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error(
      "useError has to be used within <ErrorContext.Provider>"
    );
  }

  return context;
};
