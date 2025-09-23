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
import { Urls } from "./shared/constants/urls.ts";

export function App() {
  const [isError, setIsError] = useState(false);
  console.log("deploy works")

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
                        <Route
                          path={Urls.HOME}
                          element={<ExploreVenuesView />}
                        />
                        <Route
                          path={`${Urls.VENUE_DETAILS}/:venueId`}
                          element={<VenueDetailedView />}
                        />
                        <Route path={Urls.ABOUT_US} element={<p>about us</p>} />
                        <Route
                          path={Urls.YOUR_FAVOURITES}
                          element={<p>your favourites</p>}
                        />
                        <Route
                          path={Urls.START_HOSTING}
                          element={<p>start hosting</p>}
                        />
                        <Route
                          path={Urls.LOGIN}
                          element={
                            <NoUserRoute
                              placeholder={<CircularProgress />}
                              redirectTo={Urls.ACCOUNT}
                            >
                              <LoginView />
                            </NoUserRoute>
                          }
                        />
                        <Route path={Urls.CONTACT} element={<p>contact</p>} />
                        <Route
                          path={Urls.ASSISTANCE}
                          element={<p>assistance</p>}
                        />
                        <Route
                          path={Urls.ACCOUNT}
                          element={
                            <ProtectedRoute
                              placeholder={<CircularProgress />}
                              redirectTo={Urls.LOGIN}
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
