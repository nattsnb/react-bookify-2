import { type ReactNode } from "react";
import { CircularProgress, Snackbar } from "@mui/material";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";
import { useError } from "../../contexts/errorContext.ts";
import { useServerStatus } from "../../hooks/useServerStatus.ts";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isError } = useError();
  const { isServerRunning, isLoading } = useServerStatus();

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  return (
    <>
      {isError && (
        <VerticalContainer>
          <Snackbar open={true} message="Error fetching data." />
        </VerticalContainer>
      )}
      <p>NavBar</p>
      {isServerRunning ? (
        children
      ) : (
        <VerticalContainer>Nothing to display</VerticalContainer>
      )}
      <p>Footer</p>
    </>
  );
}
