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
}
