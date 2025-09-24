export type BannerConfig = {
  banner: boolean;
  bannerHeight: number;
  searchBar: boolean;
};

type PatternConfig = {
  pattern: RegExp;
  desktop: BannerConfig;
  mobile: BannerConfig;
};

export const BANNER_CONFIG: PatternConfig[] = [
  {
    pattern: /^\/$/,
    desktop: { banner: true, bannerHeight: 524, searchBar: true },
    mobile: { banner: false, bannerHeight: 256, searchBar: true },
  },
  {
    pattern: /^\/venue\/\d+\/?$/,
    desktop: { banner: true, bannerHeight: 524, searchBar: true },
    mobile: { banner: true, bannerHeight: 251, searchBar: false },
  },
  {
    pattern: /^\/login\/$/,
    desktop: { banner: true, bannerHeight: 300, searchBar: false },
    mobile: { banner: true, bannerHeight: 251, searchBar: false },
  },
  {
    pattern: /^\/account\/$/,
    desktop: { banner: true, bannerHeight: 300, searchBar: false },
    mobile: { banner: true, bannerHeight: 251, searchBar: false },
  },
];
