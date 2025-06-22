import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67AA92",
      font: "#000000",
      fontLight: "#74747474",
      fontExtraLight: "#9B9B9B9B",
      detail: "#C7981E",
    },
    secondary: {
      main: "#595959",
      middle: "#818181",
      light: "#BBBBBB",
      dark: "#000000",
    },
    background: {
      default: "#FFFFFF",
      offDefault: "#FDFDFD",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
    padding: 0,
    homeLink: {
      fontSize: 35,
      fontWeight: 100,
      textTransform: "uppercase",
    },
    link: {
      fontWeight: 400,
      padding: "10px 60px",
    },
    iconLink: {
      fontSize: "40px",
      fontWeight: 400,
      padding: "50px 80px",
    },
    boldLink: {
      fontWeight: 600,
      color: "#67AA92",
      padding: "0 20px",
    },
    collapseSearchBar: {
      fontWeight: 600,
      color: "#67AA92",
    },
    aboutUsLink: {
      fontWeight: 400,
      color: "#595959",
      WebkitTextStroke: "1px black",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textShadow: "1px 2px 4px rgba(0, 0, 0, 0.6)",
    },
    boldOnCard: {
      fontWeight: 500,
      color: "#FFFFFF",
    },
    thinOnCard: {
      fontWeight: 300,
      color: "#FFFFFF",
    },
    cardCityName: {
      marginLeft: "10px",
      fontWeight: 300,
      color: "#FFFFFF",
      textTransform: "capitalize",
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1279,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: "12px",
          width: "100%",
        },
      },
      variants: [
        {
          props: { variant: "light" },
          style: {
            backgroundColor: "#000000",
            height: "1px",
            opacity: "20%",
          },
        },
        {
          props: { variant: "footer" },
          style: {
            backgroundColor: "#000000",
            height: "0.48px",
          },
        },
        {
          props: { variant: "dark" },
          style: {
            backgroundColor: "#000000",
            height: "2px",
            opacity: "65%",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#000000",
          padding: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: 0,
          fontSize: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "20px",
          marginTop: "35px",
          fontWeight: 500,
          color: "#FFFFFF",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
