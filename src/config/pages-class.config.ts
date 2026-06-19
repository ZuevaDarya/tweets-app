class PagesConfig {
  readonly HOME = "/";
  readonly EXPLORE = "/explore";
  readonly PROFILE_FAKE = "/profile-fake";
  readonly SHOP = "/shop";
  readonly SSG = "/shop/ssg";
  readonly ISR = "/shop/isr";

  PROFILE(userName: string) {
    return `/profile/${userName}`;
  }
}

export const PAGES = new PagesConfig();
