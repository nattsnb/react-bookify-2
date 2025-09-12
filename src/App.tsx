import { ThemeProvider } from "@mui/material/styles";
import { CircularProgress, CssBaseline } from "@mui/material";
import theme from "./theme/theme.ts";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./poppins.css";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ErrorContext } from "./contexts/errorContext";
import { ExploreVenuesView } from "./components/ExploreVenuesView";
import { VenueDetailedView } from "./components/VenueDetailedView";
import { CurrencyProvider } from "./contexts/currencyContext.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LoginView } from "./components/LoginView";
import { AuthenticationProvider } from "./contexts/authenticationContext.tsx";
import { AccountView } from "./components/AccountView";
import { ProtectedRoute } from "./routes/ProtectedRoute.tsx";
import { ActiveVenueProvider } from "./contexts/activeVenueContext.tsx";
import { FilterParamsProvider } from "./contexts/filterParamsContext.tsx";
import { PictureCarouselProvider } from "./contexts/pictureCaruselContext.tsx";
import { NoUserRoute } from "./routes/NoUserdRoute.tsx";

export function App() {
  const [isError, setIsError] = useState(false);

  return (
    <ErrorContext.Provider value={{ isError, setIsError }}>
      <PictureCarouselProvider>
        <ActiveVenueProvider>
          <CurrencyProvider>
            <AuthenticationProvider>
              <FilterParamsProvider>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  localeText={{ okButtonLabel: "Done" }}
                >
                  <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                      <Routes>
                        <Route path="/" element={<ExploreVenuesView />} />
                        <Route
                          path="/venue/:venueId"
                          element={<VenueDetailedView />}
                        />
                        <Route path="/about-us/" element={<p>about us</p>} />
                        <Route
                          path="/your-favourites/"
                          element={<p>your favourites</p>}
                        />
                        <Route
                          path="/start-hosting/"
                          element={<p>start hosting</p>}
                        />
                        <Route
                          path="/login/"
                          element={
                            <NoUserRoute
                              placeholder={<CircularProgress />}
                              redirectTo="/login/"
                            >
                              <LoginView />
                            </NoUserRoute>
                          }
                        />
                        <Route path="/contact/" element={<p>contact</p>} />
                        <Route
                          path="/assistance/"
                          element={<p>assistance</p>}
                        />
                        <Route
                          path="/account/"
                          element={
                            <ProtectedRoute
                              placeholder={<CircularProgress />}
                              redirectTo="/login/"
                            >
                              <AccountView />
                            </ProtectedRoute>
                          }
                        />
                      </Routes>
                    </Layout>
                  </ThemeProvider>
                </LocalizationProvider>
              </FilterParamsProvider>
            </AuthenticationProvider>
          </CurrencyProvider>
        </ActiveVenueProvider>
      </PictureCarouselProvider>
    </ErrorContext.Provider>
  );
}
