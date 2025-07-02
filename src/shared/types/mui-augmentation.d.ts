import type { CSSProperties } from "react";
import type { PaletteColorOptions, TypeBackground } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primary: Palette["primary"] & {
      font: string;
      fontLight: string;
      fontExtraLight: string;
      detail: string;
    };
    secondary: Palette["secondary"] & {
      middle: string;
    };
    background: TypeBackground & {
      offDefault: string;
    };
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions & {
      font?: string;
      fontLight?: string;
      fontExtraLight?: string;
      detail?: string;
    };
    secondary?: PaletteColorOptions & {
      middle?: string;
    };
    background?: Partial<TypeBackground> & {
      offDefault?: string;
    };
  }

  interface TypographyVariants {
    homeLink: CSSProperties;
    link: CSSProperties;
    iconLink: CSSProperties;
    boldLink: CSSProperties;
    collapseSearchBar: CSSProperties;
    aboutUsLink: CSSProperties;
    boldOnCard: CSSProperties;
    thinOnCard: CSSProperties;
    cardCityName: CSSProperties;
  }
  interface TypographyVariantsOptions {
    homeLink?: CSSProperties;
    link?: CSSProperties;
    iconLink?: CSSProperties;
    boldLink?: CSSProperties;
    collapseSearchBar?: CSSProperties;
    aboutUsLink?: CSSProperties;
    boldOnCard?: CSSProperties;
    thinOnCard?: CSSProperties;
    cardCityName?: CSSProperties;
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
