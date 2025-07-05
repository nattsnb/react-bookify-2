import * as React from "react";

declare module "@mui/material/styles" {
  interface PaletteColor {
    font?: string;
    fontLight?: string;
    fontExtraLight?: string;
    detail?: string;
    middle?: string;
  }
  interface SimplePaletteColorOptions {
    font?: string;
    fontLight?: string;
    fontExtraLight?: string;
    detail?: string;
    middle?: string;
  }
  interface TypeBackground {
    offDefault?: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    background: TypeBackground;
  }
  interface PaletteOptions {
    primary?: SimplePaletteColorOptions;
    secondary?: SimplePaletteColorOptions;
    background?: Partial<TypeBackground>;
  }

  interface TypographyVariants {
    homeLink: React.CSSProperties;
    link: React.CSSProperties;
    iconLink: React.CSSProperties;
    boldLink: React.CSSProperties;
    collapseSearchBar: React.CSSProperties;
    aboutUsLink: React.CSSProperties;
    boldOnCard: React.CSSProperties;
    thinOnCard: React.CSSProperties;
    cardCityName: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    homeLink?: React.CSSProperties;
    link?: React.CSSProperties;
    iconLink?: React.CSSProperties;
    boldLink?: React.CSSProperties;
    collapseSearchBar?: React.CSSProperties;
    aboutUsLink?: React.CSSProperties;
    boldOnCard?: React.CSSProperties;
    thinOnCard?: React.CSSProperties;
    cardCityName?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    homeLink: true;
    link: true;
    iconLink: true;
    boldLink: true;
    collapseSearchBar: true;
    aboutUsLink: true;
    boldOnCard: true;
    thinOnCard: true;
    cardCityName: true;
  }
}

declare module "@mui/material/Link" {
  interface LinkPropsVariantOverrides {
    homeLink: true;
    link: true;
    iconLink: true;
    boldLink: true;
    collapseSearchBar: true;
    aboutUsLink: true;
    boldOnCard: true;
    thinOnCard: true;
    cardCityName: true;
  }
}

declare module "@mui/material/Divider" {
  interface DividerPropsVariantOverrides {
    light: true;
    footer: true;
    dark: true;
  }
}

declare module "@mui/material/styles" {
  interface Components {
    MuiPickersPopper?: {
      styleOverrides?: ComponentsOverrides<Theme>["MuiPopover"];
      defaultProps?: object;
      variants?: object[];
    };
  }
}
