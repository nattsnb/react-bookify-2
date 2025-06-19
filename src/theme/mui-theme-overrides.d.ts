import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    font?: string;
    fontLight?: string;
    fontExtraLight?: string;
    detail?: string;
  }

  interface PaletteOptions {
    primary?: Partial<PaletteColor>;
    secondary?: Partial<PaletteColor> & {
      middle?: string;
      light?: string;
      dark?: string;
    };
    background?: {
      default?: string;
      offDefault?: string;
    };
  }

  interface Palette {
    secondary: Palette["secondary"] & {
      middle?: string;
      light?: string;
      dark?: string;
    };
    background: Palette["background"] & {
      offDefault?: string;
    };
  }

  interface TypographyVariants {
    homeLink: React.CSSProperties;
    link: React.CSSProperties;
    iconLink: React.CSSProperties;
    boldLink: React.CSSProperties;
    filterTitle: React.CSSProperties;
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
    filterTitle?: React.CSSProperties;
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
    filterTitle: true;
    collapseSearchBar: true;
    aboutUsLink: true;
    boldOnCard: true;
    thinOnCard: true;
    cardCityName: true;
  }
}

declare module "@mui/material/Divider" {
  interface DividerPropsVariantOverrides {
    footer: true;
    light: true;
    dark: true;
  }
}
