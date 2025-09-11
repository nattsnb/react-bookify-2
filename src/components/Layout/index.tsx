import { type ReactNode } from "react";
import { CircularProgress, Snackbar } from "@mui/material";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";
import { useError } from "../../contexts/errorContext.ts";
import { useServerStatus } from "../../hooks/useServerStatus.ts";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.ts";
import { Banner } from "../Banner";

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
      <NavBar />
      {isServerRunning ? (
        <PageWidthContainer>
          <Banner />
          {children}
        </PageWidthContainer>
      ) : (
        <VerticalContainer>Nothing to display</VerticalContainer>
      )}
      <Footer />
    </>
  );
}
