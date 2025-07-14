import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme.ts";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./poppins.css";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ErrorContext } from "./contexts/errorContext";
import { ExploreVenuesView } from "./components/ExploreVenuesView";
import { VenueDetailedView } from "./components/VenueDetailedView";
import { FilterParamsContext } from "./contexts/filterParamsContext.ts";
import type { VenueFilterDto } from "./shared/types/tables/venue/venue-filter.dto.ts";
import { CurrencyProvider } from "./contexts/currencyContext.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PictureCarouselContext } from "./contexts/pictureCaruselContext.ts";

export function App() {
  const [isError, setIsError] = useState(false);
  const [filterParams, setFilterParams] = useState<VenueFilterDto | undefined>(
    undefined,
  );
  const [displayedPictureNumber, setDisplayedPictureNumber] = useState(0);

  return (
    <ErrorContext.Provider value={{ isError, setIsError }}>
      <PictureCarouselContext.Provider
        value={{ displayedPictureNumber, setDisplayedPictureNumber }}
      >
        <CurrencyProvider>
          <FilterParamsContext.Provider
            value={{ filterParams, setFilterParams }}
          >
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
                    <Route path="/login/" element={<p>log in</p>} />
                    <Route path="/contact/" element={<p>contact</p>} />
                    <Route path="/assistance/" element={<p>assistance</p>} />
                  </Routes>
                </Layout>
              </ThemeProvider>
            </LocalizationProvider>
          </FilterParamsContext.Provider>
        </CurrencyProvider>
      </PictureCarouselContext.Provider>
    </ErrorContext.Provider>
  );
}
