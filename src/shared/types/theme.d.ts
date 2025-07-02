import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme extends MUITheme {
    palette: MUITheme["Palette"] & {
      primary: {
        font: string;
      };
    };
    components: MUITheme["Components"] & {};
  }

  // interface PaletteColor {
  //   font?: string;
  //   fontLight?: string;
  //   fontExtraLight?: string;
  //   detail?: string;
  // }
  //
  // interface PaletteOptions {
  //   primary?: Partial<PaletteColor>;
  //   secondary?: Partial<PaletteColor> & {
  //     middle?: string;
  //     light?: string;
  //     dark?: string;
  //   };
  //   background?: {
  //     default?: string;
  //     offDefault?: string;
  //   };
  // }
  //
  // interface Palette {
  //   secondary: Palette["secondary"] & {
  //     middle?: string;
  //     light?: string;
  //     dark?: string;
  //   };
  //   background: Palette["background"] & {
  //     offDefault?: string;
  //   };
  // }
  export function createTheme(options?: ThemeOptions): Theme;
}
