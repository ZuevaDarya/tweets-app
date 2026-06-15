class PagesConfig {
  PROFILE(userName: string) {
    return `/profile/${userName}`;
  }
}

export const PAGES = new PagesConfig();
