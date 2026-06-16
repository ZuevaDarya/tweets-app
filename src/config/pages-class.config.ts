class PagesConfig {
  readonly HOME = "/";
  readonly EXPLORE = "/explore";
  readonly PROFILE_FAKE = "/profile-fake";

  PROFILE(userName: string) {
    return `/profile/${userName}`;
  }
}

export const PAGES = new PagesConfig();
