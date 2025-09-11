import { BANNER_CONFIG, type BannerConfig } from "../../config/bannerConfig.ts";

export function getBannerConfig(
  pathname: string,
  isDesktop: boolean,
): BannerConfig {
  for (const config of BANNER_CONFIG) {
    if (config.pattern.test(pathname)) {
      return isDesktop ? config.desktop : config.mobile;
    }
  }
  return { banner: false, bannerHeight: 0, searchBar: false };
}
